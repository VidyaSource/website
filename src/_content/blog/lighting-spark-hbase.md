---

author: "Neil Chaudhuri"
title: "Lighting a Spark with HBase"
description: "Apache Spark is great for Hadoop analytics, and it works just fine with HBase."
banner: "img/banners/spark.png"
date: 2014-01-25
gist: true
tags:
- Java
- Scala
- Hadoop
- Apache Spark
- HBase
- MapReduce
- Hive
- HDFS
categories: 
- Big data
- Programming
- Functional Programming
- Open-source
aliases:
- /blog/Programming/Scala/Java/Data/Hadoop/Analytics/2014/01/25/lighting-a-spark-with-hbase
- /blog/2014/01/25/lighting-a-spark-with-hbase
---

Although most developers and users are still feeling their way through [Hadoop](http://hadoop.apache.org/) and (more
specifically [MapReduce](https://hadoop.apache.org/docs/r1.2.1/mapred_tutorial.html)), the truth is Google wrote
that [paper](http://static.googleusercontent.com/media/research.google.com/en/us/archive/mapreduce-osdi04.pdf) in 2004.
That’s ten years ago! *[Million Dollar Baby](http://www.imdb.com/title/tt0405159/)* won Best Picture that year.
*[Yeah!](http://www.youtube.com/watch?v=eSPhCS-15eE)* by Usher, Lil John and Ludacris topped the charts in the United
States. And [Facebook](https://www.facebook.com/VidyaSource) had only just started to kill work productivity and violate
your privacy.

As long ago as that feels, it is an eternity in technology. Google has of course moved on way past MapReduce to things
like [Dremel](http://static.googleusercontent.com/media/research.google.com/en/us/pubs/archive/36632.pdf). The rest of
us aren’t moving so quickly, but that doesn’t mean we still need to plod along writing low-level MapReduce code.


Several abstractions have come along to make cloud-scale analytics easier. One of them is
[Apache Spark](http://spark.incubator.apache.org/). Spark was originally created by [AMPLab](https://amplab.cs.berkeley.edu/)
at UC Berkeley and is now in incubation at Apache. It utilizes cluster memory to minimize the disk reads and writes that
slow down MapReduce. Spark is written in [Scala](/tags/scala) and exposes both a Scala and [Java](/tags/java)
API. Though [as I’ve said before](/blog/Java/Scala/Data/Hadoop/Analytics/2013/10/27/java-is-dysfunctional-with-big-data),
once you get past the learning curve, I don’t see how anyone would prefer Java to Scala for analytics.

Please take a look at the [Spark documentation](http://spark.incubator.apache.org/docs/latest/scala-programming-guide.html)
to learn about the [*RDD*](http://spark.incubator.apache.org/docs/latest/api/core/index.html#org.apache.spark.RDD.RDD)
abstraction. *RDD*’s are basically fancy arrays. You load data into them and perform whatever combination of
operations--maps, filters, reducers, *etc.*-- you want. *RDD*’s make analytics so much more fun to write than canonical
MapReduce. In the end, Spark doesn't just run faster; it lets us write faster.

The web has a bunch of examples of using Spark with Hadoop components like
[HDFS](http://hadoop.apache.org/docs/stable1/hdfs_design.html) and [Hive](https://cwiki.apache.org/confluence/display/Hive/GettingStarted)
(via [Shark](https://github.com/amplab/shark/wiki), also made by AMPLab), but there is surprisingly little on using
Spark to create *RDD*’s from HBase, the Hadoop database. If you don’t know HBase, check out this excellent
[presentation](http://www.slideshare.net/cloudera/5-h-base-schemahbasecon2012) by
[Ian Varley](https://twitter.com/thefutureian). It’s just a cloud-scale key-value store.

The Spark [Quick Start documentation](http://spark.incubator.apache.org/docs/latest/quick-start.html) says, “*RDD*s can
be created from Hadoop InputFormats.” You may know that
[InputFormat](http://hadoop.apache.org/docs/current/api/org/apache/hadoop/mapred/InputFormat.html) is the Hadoop
abstraction for anything that can be processed in a MapReduce job. As it turns out, HBase uses a
[TableInputFormat](http://hbase.apache.org/apidocs/org/apache/hadoop/hbase/mapreduce/TableInputFormat.html), so it
should be possible to use Spark with HBase.

It turns out that it is.

As the [Scaladoc for *RDD*](http://spark.incubator.apache.org/docs/latest/api/core/index.html#org.apache.spark.RDD.RDD)
shows, there are numerous concrete `RDD` implementations--each best suited for different situations. The
`[NewHadoopRDD](http://spark.incubator.apache.org/docs/latest/api/core/index.html#org.apache.spark.RDD.NewHadoopRDD)`
is great for reading data stored in later versions of Hadoop, which is exactly what we need here.

Check out this code.

{{< gist neilchaudhuri 8623270 >}}

Once we instantiate the `[SparkContext](http://spark.incubator.apache.org/docs/latest/api/core/index.html#org.apache.spark.SparkContext)`
for the local machine, we write an anonymous function to create an
`[HBaseConfiguration](http://hbase.apache.org/apidocs/org/apache/hadoop/hbase/HBaseConfiguration.html)`, which will enable
us to add the HBase configuration files to any Hadoop ones we have as well as the name of the table
we want to read. That’s an HBase thing--not a Spark thing.

Then we create an instance of `NewHadoopRDD` with the `SparkContext` instance and three Java
`[Class](http://docs.oracle.com/javase/7/docs/api/java/lang/Class.html)` objects related to HBase:

* One for the `InputFormat`, `TableInputFormat`, as mentioned earlier
* One for the key type, which on a table scan is always `[ImmutableBytesWritable](http://hbase.apache.org/apidocs/org/apache/hadoop/hbase/io/ImmutableBytesWritable.html)`
* One for the value type, which on a table scan is always `[Result](http://hbase.apache.org/apidocs/org/apache/hadoop/hbase/client/Result.html)`

Then we call our anonymous function with the location of `[hbase-site.xml](http://hbase.apache.org/book/config.files.html)`
and the name of the table we want to read, `table-with-data`,
to provide Spark with the necessary HBase configuration to construct the `RDD`. Once we have the `RDD`, we can perform all
the usual operations on HBase we usually see with the more conventional usage of `RDD`s in Spark.

The code example does feature some HBase-specific operations though. When the *RDD* is constructed, it loads all the
data in `table-with-data` as (`ImmutableBytesWritable`, `Result`) tuples--key-value pairs as you would expect. For each
one of these pairs, we grab the second item in the tuple (the `Result`) and
get the column
from it marked with a specific [column family and column qualifier](http://hbase.apache.org/book/columnfamily.html).

[As advocated](http://tek-tips.nethawk.net/new-paradigm-and-thinking-required-for-massively-distributed-and-complex-systems/)
by big data overlord [Nathan Marz](https://twitter.com/nathanmarz), HBase has no notion of deletes; new values are just
appended. Consequently, each column is really a collection, and after converting the Java collection returned by the HBase API
into a Scala collection, the last *map* call extracts the latest--and therefore
the “right”--[KeyValue](http://hbase.apache.org/apidocs/org/apache/hadoop/hbase/KeyValue.html). We now have a collection
of all the current data in each row.

If that is unclear, let's summarize the mapping operations this way:

* Load an `RDD` of (`ImmutableBytesWritable`, `Result`) tuples from the table
* Transform previous into an `RDD` of *Result*'s
* Transform previous into an `RDD` of collections of `KeyValue`s (where the latest one is what we want). Collection of collections?
[Oh no!](http://www.youtube.com/watch?v=Xpc0s9FsA1Q)
* Transform previous into an RDD of `byte[]` (binary representations of the current data)

So using Spark, we can read the contents of an entire HBase table and perform one transformation after another--maybe
along with some filters, aggregations, and other operations--to do [ALL THE ANALYTICS](http://www.tjkelly.com/wp/wp-content/uploads/hyperbole-clean-all-the-things.jpg).

Astute or experienced readers might have noticed that `getColumn` call in the second `map` operation is actually
deprecated in favor of `getColumnCells`,
which returns a collection of [Cell](http://hbase.apache.org/apidocs/org/apache/hadoop/hbase/Cell.html)s ordered by
timestamp. That’s the superior approach. I just used `getColumn` as an excuse to demonstrate Spark’s ability to apply
anonymous functions within `RDD` operations in the next `map` call.

The next time some analytics are in order, don’t bother with old-school MapReduce. The higher level of abstraction over anything with an
`InputFormat`, including HBase, makes Spark a great choice for Hadoop analytics.