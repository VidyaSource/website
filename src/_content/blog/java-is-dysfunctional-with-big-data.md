---

author: "Neil Chaudhuri"
title: "Java is Dysfunctional with Big Data"
description: "Java is great, but there are far better options for big data analytics."
date: 2013-10-27
image: "/img/blog/big-data.jpg"
gist: true
aliases: 
 - /blog/Java/Scala/Data/Hadoop/Analytics/2013/10/27/java-is-dysfunctional-with-big-data
categories:
- Programming
- Functional Programming
- Big Data
- Analytics
tags: 
- Java
- Scala
- Hadoop
- Apache Spark
- Clojure
- Cascalog
- MapReduce
---
Let me first say I love Java. There is a reason it’s the most popular programming language in the world. For me
personally, I made a career out of building systems in Java, and I even teach a course in Java.

But when it comes to Big Data, Java simply doesn’t cut it.

Everybody knows functional languages have enjoyed a renaissance as Big Data has become a thing. And for good reason:
immutable (or mostly immutable) state, lazy evaluation, the natural fit with recursion, and so on. There are a lot of
resources out there like [this](http://cafe.elharo.com/programming/java-programming/why-functional-programming-in-java-is-dangerous/)
blog post where you can explore those concepts and the passions they arouse.

But for all the computer science theory, inelegant blogger arguments, and angry feedback from purists still bitter they
never went to prom, most of us have jobs to do, analytics to run, and customers to please. We need tools that allow us
to get the most done the most quickly. That just isn’t Java.

Almost everyone who has used the Hadoop stack learned MapReduce by writing the canonical
[Word Count](http://developer.yahoo.com/hadoop/tutorial/module4.html#wordcount) example in Java and did just fine, so
what’s the problem? We have evolved past low-level Hadoop programming and operate at a much higher level of abstraction.
Big Data analytics is really a series of operations on collections--initialization followed by some combination of
filtering operations (extracting only elements that satisfy some condition), mapping operations (transforming elements),
and reducing operations (aggregating elements) that produce new collections.

Java is terrible at collections. You don’t think so? Let’s take a simple scenario where you have a collection of numbers
representing your data. I want to do the following:

1. Filter out all even numbers
2. Map the result by multiplying each number by 3
3. Reduce the result to their sum

Pretty simple. For example [1,2,3,4,5] --> [2,4] -> [6, 12] -> 18

Here is a reasonable implementation of this algorithm in Java.

~~~java 
public class CollectionsDemo {
    public CollectionsDemo() {
        List<Integer> data = BigDataGenerator.data();
        int finalResult = sum(map(filter(data)));
    }

    public List<Integer> filter(List<Integer> data) {
        List<Integer> evens = new ArrayList<Integer>();
        for (Integer number : data) {
            if (number % 2 == 0) {
                evens.add(number);
            }
        }

        return evens;
    }

    public List<Integer> map(List<Integer> data) {
        List<Integer> mappedData = new ArrayList<Integer>();
        for (Integer number : data) {
            mappedData.add(3 * number);
        }

        return mappedData;
    }

    public int sum(List<Integer> data) {
        int sum = 0;
        for (Integer number : data) {
            sum += number;
        }

        return sum;
    }

    public static void main(String[] args) {
        new CollectionsDemo();

    }
}
~~~

That’s a lot of code to perform three trivial operations, and it’s because of all the boilerplate. Sometimes we forget
how much boilerplate there is in Java because our IDE’s generate it for us.

If we are going to be productive with Big Data, we need languages that allow us to manipulate collections much more easily.
Justin Timberlake brought [sexy back](http://www.youtube.com/watch?v=3gOHvDP_vCs); Big Data brought functional languages back.

I mentioned all the technical details like immutability that make functional languages well-suited to Big Data, but it’s
their suitability to Big Data *developers* that really matters. Developers need a compelling reason to make the effort
to learn functional languages, which are much more difficult to understand than an object-oriented language like Java.

To prove my point, here is the same algorithm in Scala, another language for the JVM that combines object-oriented and
functional paradigms:

~~~scala
val finalResult = data.filter(_ % 2 == 0).map(3 * _).sum
~~~

I know what you’re thinking. [Really?](http://www.thedailybeast.com/videos/2013/05/19/really-amy-poehler-returns-to-snl.html)
Yup. That’s it. And it’s readable too.

And here is the same algorithm in Clojure, a Lisp (so a functional language) for the JVM and other environments:

~~~clojure
(reduce +
  (map #(* 3 %)
  (filter even? (data))))
~~~  

This might be slightly less readable but still worth it to learn.

I mention Scala and Clojure because they are the languages of choice for two preeminent Big Data tools.

[Apache Spark](http://spark.incubator.apache.org/) was originally created by [AMPLab](https://amplab.cs.berkeley.edu/)
at UC Berkeley and is now in incubation at Apache. Spark utilizes cluster memory to minimize the disk reads and writes
that slow down MapReduce. Spark is written in Scala and exposes a Scala API.

[Cascalog](https://github.com/nathanmarz/cascalog) is a tool created by data overlord [Nathan Marz](https://twitter.com/nathanmarz),
formerly of Twitter and quite possibly the world’s foremost expert on Big Data batch and streaming analytics. Cascalog
is an abstraction written in Clojure on top of the core Hadoop stack (MapReduce, Hive, Pig) that helps you avoid
Hadoop’s low level details.

Remember what a pain [Word Count](http://developer.yahoo.com/hadoop/tutorial/module4.html#wordcount)  is in Java? Look
at the difference with these alternatives.

Word Count in Spark:

~~~scala
file.flatMap(line => line.split(" "))
    .map(word => (word, 1))
    .reduceByKey(_ + _)
~~~    


Word Count in Cascalog:

~~~clojure
(?<- (stdout)
     [?word ?count]
     (sentence ?line)
     (tokenise ?line :> ?word)
     (c/count ?count))
~~~     

Is there any doubt that Java is in over its head with Big Data? A developer has to be pretty [lazy](http://www.youtube.com/watch?v=Px5TWbc4xQo)
not to make the effort to learn at least one functional language.

But if you are, all is not lost. Both Spark and Cascalog (as [JCascalog](https://github.com/nathanmarz/cascalog/wiki/JCascalog))
hava Java API’s too. As cumbersome as Java is, they are realistic enough to know that minimizing the barrier to entry for developers *and* their organizations is important.

And there are efforts underway to make Java itself functional. Right now, you can use anonymous inner classes to fake it,
or you can look into third-party solutions like Google Guava’s [Iterables](http://docs.guava-libraries.googlecode.com/git/javadoc/com/google/common/collect/Iterables.html) or random [frameworks](https://github.com/functionaljava/functionaljava) of dubious longevity. Most promising is the possibility that the language itself will evolve--that Java 8 will represent...finally...the arrival of [functional Java](http://blog.agiledeveloper.com/2013/01/functional-programming-in-java-is-quite.html).

But keep in mind two things. First, they’ve been promising functional programming in Java since Java 6. I’ve been promised
a [Justice League](http://media.dcentertainment.com/sites/default/files/character_bio_576_justiceleague.jpg) movie too. Second,
even if Java 8 comes out functional tomorrow, it isn’t like organizations will drop everything to make the switch. Project
and technical leads will assess the risks and rewards of moving to Java 8. It could be years before the switch happens on your project.

So if you’re a Java developer who wants to get good at Big Data, start learning Scala or Clojure now. Python wouldn’t
hurt either. Why should Commander Data be the only one who is [fully functional](http://www.youtube.com/watch?v=9ev1ec0Z0GI)?
