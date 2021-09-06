---
title: "It's Not Only About the Benjamins"
date: 2017-09-27T23:48:17-04:00
author: Neil Chaudhuri
description: "The highest paying languages are also among the most fun and productive. We know from experience."
image: "/img/blog/benjamins.jpeg"
categories:
- Programming
- Functional Programming
- Open Source
- Analytics
- Software Engineering
- Machine Learning
- Big Data
tags:
- Go
- Scala
- Clojure
- Python
- Java
- Apache Spark
- Play Framework
- ReactiveMongo
- Scalaz
- Akka
- Swift
- Kotlin
---

The [2017 Stack Overflow Developers Survey](https://insights.stackoverflow.com/survey/2017) had the most 
respondents since they began the project in 2011. You really should
take a look. They cover a *lot* of ground, and the findings across geography and demographics are 
[fascinating](https://www.youtube.com/watch?v=W6MkESn1v1w). 

It's interesting most developers report feeling underpaid. That isn't surprising to me, but it might be counterintuitive to
people more accustomed to [Stark Industries](https://www.youtube.com/watch?v=VVyoXimCrdQ) than to [Pied Piper](https://www.youtube.com/watch?v=BzAdXyPYKQo).
It's natural to follow up by asking [which programming languages pay the most](https://insights.stackoverflow.com/survey/2017#top-paying-technologies), 
and those answers *did* surprise me. 

Worldwide it's Clojure! Really? This is particularly interesting since Stack Overflow has also noted that 
Clojure is [losing popularity among functional languages](https://stackoverflow.blog/2017/09/06/incredible-growth-python/). I
guess there is some combination of major investment in Clojure with a shrinking pool of capable Clojure developers that is driving
up their value. 

In the United States, the title for highest-paying programming language is shared by Scala and Go. Meanwhile 
Python, which Stack Overflow declared 
"[has a solid claim to being the fastest-growing major programming language](https://stackoverflow.blog/2017/09/06/incredible-growth-python/),"
is the highest-paid in France and India and second-highest (to Java) in Germany. 

It's great these languages pay so well, but what really matters is they are powerful languages that help us solve
harder problems faster. At Vidya we have had the pleasure to work with all of them. 

**Clojure**

Yes, even Clojure. I worked on a DARPA project called [XDATA](https://www.darpa.mil/program/xdata) which identifies the 
analytics tools best suited to particular kinds of problems. One such tool was 
[Cascalog](https://github.com/nathanmarz/cascalog) from the mind of [Nathan Marz](https://twitter.com/nathanmarz?lang=en), 
the creator of Apache Storm and author 
of the [Lambda Architecture](http://lambda-architecture.net/). It's gone cold now, but at the time, Cascalog represented a powerful alternative
to Map Reduce because it is built on Clojure to harness the power of functional programming to solve 
Big Data problems. This was my first professional exposure to functional programming after years of working with 
Java, and I became so enamored of the natural fit between functional programming and Big Data that I even 
[blogged about its advantages over Java for building analytics](/blog/java-is-dysfunctional-with-big-data/).

It was also at XDATA that I met a brilliant team from [AMPLab at Berkeley](https://amplab.cs.berkeley.edu/) who had
created a revolutionary project called Spark.

**Scala**

Spark was my first introduction to Scala, and I have been a huge fan of the language ever since. I marveled at how I could write
complex analytics--at least for me at the time--with so little code. Since then, Spark became 
open-sourced as Apache Spark, and I got 
[badges in both Scala and Apache Spark on Stack Overflow](https://stackoverflow.com/users/1347281/vidya?tab=badges). I expanded my
Scala knowledge working not only with Spark but also with Play Framework, ReactiveMongo,
Scalaz, and Akka for several government and commercial clients. I have come to enjoy Scala so much
that it is very hard to go back to writing Java. I even put together a tutorial on YouTube called 
[Nine Reasons to Try Scala](/tutorial/nine-reasons-to-try-scala/) and have given several talks 
based on it.

Scala motivated the evolution of Java that began with 
[Java 8](http://www.oracle.com/technetwork/java/javase/8-whats-new-2157071.html), and Scala itself continues to evolve 
in disparate domains with 
[Scala.js](https://www.scala-js.org/), [Dotty](http://dotty.epfl.ch/), and [Scala Native](http://www.scala-native.org/en/latest/).
The learning curve is steep, and slow compilation and esoteric documentation continue to be real problems. But Scala 
has made me a better engineer in every language I use by helping me embrace immutability,
composability, and all the other qualities that make functional programming so powerful.

**Go**

I am still new to Go, but I can see why it continues to shoot up the [TIOBE Index](https://www.tiobe.com/tiobe-index/). 
Google designed Go neither to be revolutionary like Smalltalk nor all things to all people like Java. Instead, it does 
a few things well, and it is *very* fast. The canonical use case for Go is multicore programming because it provides 
[goroutines and channels](https://tour.golang.org/concurrency/1), which abstract concurrent tasks by facilitating messages
among lightweight threads. `Future` in Scala does something similar, and that is also a powerful albeit 
[controversial](https://stackoverflow.com/questions/27454798/is-future-in-scala-a-monad) abstraction. Both languages are also
statically typed but offer facilities reminiscent of dynamic typing.  

As for my first professional experience with Go, you're looking at it. I rebuilt the 
Vidya website using [Hugo](https://gohugo.io/), a static-site generator. It's really fast and comes with a lot of nice features, but
it could use more like CDN integration and an asset pipeline. Overall it is a pleasure to work with. I had to learn some Go in 
order to customize our site's functionality, but I have a long way to go before I consider myself any kind of expert. 
I look forward to the opportunity to wrap my head around the syntax and do more interesting things.   

**Python**
   
[When I spoke at Code Writers DC](blog/2017/06/05/speaking-at-code-writers-workshop-2017/), I identified statically typed
languages as a "trend" in software engineering and cited Scala, Go, Swift,
and Kotlin as examples. Python, however, is a big exception. It's been around forever, and as Stack Overflow noted, it's
still blowing up because of Big Data and machine learning. The list of Python tools 
for data science is long--[Pandas](http://pandas.pydata.org/), [NumPy](http://www.numpy.org/), 
[SciKit Learn](http://scikit-learn.org/stable/), and [NLTK](http://www.nltk.org/) just to name a few. [Keras](https://keras.io/), 
arguably the leading Deep Learning tool out there, is a Python abstraction over other 
Python components--[TensorFlow](https://www.tensorflow.org/), [CNTK](https://docs.microsoft.com/en-us/cognitive-toolkit/), and 
[Theano](http://www.deeplearning.net/software/theano/). Other languages--like Go and Scala and Clojure along with of course 
R--feature powerful data science libraries in their own right, but Python's ecosystem can't be beat as much as I prefer 
statically typed languages.

Whenever people ask my advice on where they should begin their programming careers, I always suggest Python first
and then JavaScript. I enjoy Python and wrote a lot of it on XDATA, but I haven't had the opportunity
to use it as much as I would like since then. I am happy to report though that our most popular tutorial 
[Starting with Data](/tutorial/starting-with-data/) is based on Python and JavaScript.


It's cool that Vidya has so much experience with the most lucrative languages in the world, but it's even cooler that 
we have had the pleasure to do what we love--building great software with the best tools. As they say, 
"Find a job you love and you'll never work a day in your life."  

