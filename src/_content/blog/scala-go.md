---

author: "Neil Chaudhuri"
title: "Scala or Go: Tastes Great or Less Filling?"
description: "Scala and Go are two of the most popular emerging languages. Which is best for your project?"
image: "/img/blog/scala-go.png"
date: 2019-03-29
gist: true
tags:
- Golang
- Play Framework
- SBT
- Git
categories: 
- Programming
- Scala
- Go
- Software Engineering
- DevOps
- Functional Programming
- Microservices
- REST
- Agile
- TypeScript
- Elm
- Kotlin
aliases:
- /blog/2019/03/29/scala-or-go-tastes-great-or-less-filling/
- /blog/scala-or-go-tastes-great-or-less-filling/
- /blog/2019/03/29/vidya/technology/scala-or-go-tastes-great-or-less-filling/
---

[Scala](/categories/scala) and [Go](/categories/go) (aka [Golang](/tags/golang)) are two of the fastest growing leading-edge 
[programming](/categories/programming) languages in the world. In the United States, they are also among the 
[most lucrative](https://adtmag.com/articles/2017/08/18/go-scala-salaries.aspx). Scala and Go are among a slew of 
programming languages that innovate in numerous ways to produce faster, more resilient, more secure applications for a multicore,
[cloud native](/categories/cloud-native), [mobile](/categories/mobile) world.   

The thing is Scala and Go have *very* different philosophies on what makes engineers most productive and what defines great
applications. We are going to look at how Scala and Go solve five common programming tasks
and how their contrasting approaches reflect their contrasting philosophies.
Then you can decide for yourself which works best for your next application. This is a really long post, so here are the 
tasks we will consider so you can jump to the ones that interest you most:

* [Absent Values](#absent-values)
* [Error Handling](#error-handling)
* [Collections](#collections)
* [Concurrency and Parallelism](#concurrency-and-parallelism)
* [Polymorphism](#polymorphism)

Or you can skip straight to my [conclusion](#how-do-you-decide): which boils down to this: 

> Despite the strong possibility that this opinion will subject me to ritual humiliation on social media, I would use
  Scala (or a similarly featured language like [Kotlin](/categories/kotlin)) for microservices or bigger
  but Go both to replace any [bash or Python (or C++ or whatever) scripts](https://www.quora.com/Where-do-we-use-Python-or-shell-scripts-in-the-DevOps-project-life-cycle) 
  that are part of my continuous delivery pipeline and 
  to create [lambda functions](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html), which are supposed to be lightweight,
  fast, and focused.

With that, let me introduce you to Scala and Go.

# Scala

Scala is an object-oriented (OO) *and* [functional programming](/categories/functional-programming) language built for 
the JVM (though [Scala Native](http://www.scala-native.org/en/v0.3.8/) is in the works). It emerged from academia at the 
[EPFL](https://scala.epfl.ch/) in Switzerland from the mind of Academic Director Martin Odersky, who sought to prove that 
the two paradigms--OO for representing your domain and functional for its 
[mathematical guarantees for working programs](/blog/2018/09/18/the-business-case-for-functional-programming/)--can blend
seamlessly to yield the best of both worlds. Scala also has an exquisite static type system that can provide a 
powerful safety net.  

Operationally, as you might expect from a language borne from academia, Scala tooling can be problematic and compilation 
can be slow, but type inference, a vast standard library, and other features of the language make you
very productive once you get the hang of them. Performance varies with the JVM you're running, but regardless you do have to 
contend with the size of compiled objects and the latency of garbage collection at runtime. When you want to experiment, 
you can skip the ceremony of writing a class or test and instead use a command-line REPL, an online REPL called 
[Scastie](https://scastie.scala-lang.org/) you can share, or an outstanding third-party command-line REPL called 
[Ammonite](https://ammonite.io/#Ammonite-REPL). Dependency management is achieved with [SBT](/tags/sbt) typically but 
also more general JVM build tools like [Gradle](/tags/gradle) and Maven.

Scala became really popular with the advent of ["Big Data"](/categories/big-data) because 
[functional programming lends itself so naturally to analytics](https://www.vidyasource.com/blog/2013/10/27/java-is-dysfunctional-with-big-data/),
and the learning curve for 
[modern LISPs like Haskell and Clojure](https://en.wikipedia.org/wiki/Lisp_(programming_language)#2000_to_present) 
is too high for too many. [Apache Spark](/tags/apache-spark) is built in Scala, and when it got big, Scala got big. Since then Scala has
also become a popular language for other domains including 
[reactive web applications and microservices](https://www.reactivemanifesto.org/) with 
[Play Framework](https://www.playframework.com/) and [Akka](https://akka.io/) and even the front end with 
[Scala.js](https://www.scala-js.org/).  

# Go

Go had an pragmatic mission from the start, so it was built with simplicity, minimalism, and performance in mind. Robert Griesemer, 
Rob Pike, and Ken Thompson created Go at Google as an [alternative to C++](https://talks.golang.org/2015/gophercon-goevolution.slide#4)
built for modern machines. Go is compiled to native machine code; no virtual machine. Go is statically typed 
like Scala but is imperative and procedural. It's not 
a functional language *per se*, but [functions are first-class](https://golangbot.com/first-class-functions/). Where it 
truly shines is in its concurrency primitives: [channels and goroutines](https://medium.com/rungo/anatomy-of-channels-in-go-concurrency-in-go-1ec336086adb).
Together, they enable you to leverage the full power of your multicore machine. 

Operationally, Go is really fast to compile and run. It too
has a vast standard library for common tasks like [REST calls](https://golang.org/pkg/net/http/) and 
[JSON de/serialization](https://golang.org/pkg/encoding/json/). When you want to experiment, you can 
use the [Go Playground](https://play.golang.org/) or a scratch file in your IDE, but there is no command-line REPL. Unlike Scala,
Go has by design a very lean feature set and simple constructs. This makes it 
relatively easy to learn. However, you have to add a lot of features yourself that you take for granted in other languages 
or explore what Go offers as [potential workarounds](https://golang.org/doc/faq#Why_doesnt_Go_have_feature_X).
To get *really* good at advanced features of Go like concurrency and polymorphism is still a challenge.
Official dependency management is nonexistent, and you may find Go's unorthodox project setup based on [Git](/tags/git) repos
[takes getting used to](https://medium.com/rungo/working-in-go-workspace-3b0576e0534a). 

After Go took off at Google and was released to the public, it got really popular as the language of concurrency, which helped
in turn to make it the language of 
[DevOps](/categories/devops)--particularly in concert with 
[Kubernetes](https://rancher.com/using-kubernetes-api-go-kubecon-2017-session-recap/), which also emerged from Google. 
Go has expanded into other domains as well
with the CMS [Hugo](https://gohugo.io/) (which was used to build this site) and the microservices framework 
[Go kit](https://gokit.io/).

# Comparing Scala and Go

Let's look at how Scala and Go handle the kinds of real-world problems you will encounter every day.

*Disclaimer:* The sample code is not meant to showcase necessarily the "best" way to solve these problems--most performant, most elegant, 
or whatever. Instead it is meant to showcase reasonable, idiomatic solutions and, more importantly, how they reflect
the design philosophies of the respective languages. Of course 
[you are welcome to suggest improvements](/contact/) regardless.

## Absent values

You have to deal with potentially absent values all the time like when database queries for single entities return no hits or 
when you are maintaining backwards-compatible microservices. Typically, absent values are represented with `null`. Sir 
Tony Hoare called his invention of `null` to represent the absence of a value his 
"[billion-dollar mistake](https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare)." 
Handling absent values isn't glamorous, but if you do it poorly, you will suffer significant productivity loses. 


### Scala

Although `null` exists in Scala as a JVM language, you should (almost) never interact with it directly. Instead, you should work with `Option`, a 
[monad](https://stackoverflow.com/questions/44965/what-is-a-monad) designed specifically for this purpose. 
We describe `Option` in more detail in [our tutorial](https://www.youtube.com/watch?v=rbZ6GzR8B7I),
but essentially it compels you to account for the potential absence of a value at *compile* time. This avoids the costly
`NullPointerException` at runtime that has sent thousands of [Java](/categories/java) developers to therapy.

{{< gist neilchaudhuri 0faef521f6bb22d32ef75b1c041b6b62 >}}

In this example, the `findStudent` function returns an `Option[Student]`. If the `Option` contains a value, the client 
can transform it into a `String` (*i.e.* `Option[Student] => Option[String]`) with the `map` function on `Option`; 
otherwise, `getOrElse` handles the absent value.

`Option` allows you to safely work with potentially absent values 
[without fear](https://marvel.fandom.com/wiki/Daredevil:_The_Man_Without_Fear_Vol_1_1). The compile-time safety makes 
you very productive. On the other hand, every transformation on the `Option`--via `map`, `filter`, *etc.*--produces a new
value because of the functional programming bias towards [immutability](/blog/2018/09/18/the-business-case-for-functional-programming/).
If memory is at a premium, maybe this is a concern.


### Go  

Go handles potentially absent values through completely different idioms. Functions can return multiple return values. 
When a value is present, it's idiomatic to return the value and a `bool` value (named `ok` by convention) of `true`; otherwise, it returns 
the ["zero value" of the return type](https://tour.golang.org/basics/12) and `false`. The client uses an imperative 
`if` statement to distinguish.

{{< gist neilchaudhuri 5f4c9844dbfe1d92fb200c8089c00229 >}}

In this example, the `findStudent` function returns a `Student` *and* a `bool`. Go allows you to initialize and test 
conditions in one line, and that's what we see here. If `ok` is `true`, we know we got something and act 
accordingly; if `ok` is `false`, we know the value is absent and handle this contingency.

For those uncomfortable with monad composition and higher-order functions, Go provides a very simple alternative in keeping
with its mission. On the other hand, Go engineers need the knowledge and discipline to apply these language features and idioms.
There is no dedicated type like `Option` to help. Also, unlike with the composability afforded by monads like `Option`,
if you need to compose multiple potentially absent values, you need to write multiple `if` conditions; that can feel verbose.
The simplicity may well be worth it though.


## Error Handling

This is another inglorious task that is critical to good software engineering. As programs become big and complex, proper
error handling is critical to diagnose bugs and move builds to production as quickly as possible. 

### Scala

As you might imagine from a language that prizes on immutability and composability, Scala offers another monad,
`Try`, for error handling. Analogous to `Option`, it compels
you to account for a possible error at compile time rather than the absence of a value. A `Try[Double]`, for example,
represents either a `Double` if all is well or an error (or more precisely an instance of `Throwable`) otherwise.  

{{< gist neilchaudhuri 5c4cc893d46e107aac4ee163f22e9d0d >}}

In this example, the `squareRoot` function returns `Try[Double]`, and the client does something a bit more complicated 
than the prior example. It calls `squareRoot` twice and uses a [for comprehension](https://docs.scala-lang.org/tour/for-comprehensions.html),
which is syntactic sugar for otherwise cumbersome `map` and `flatMap` transformations, to take advantage of the composability of 
monads to sum the results. If both calls work out, then the result is a `Try` with the sum; if either fails, the error information
is passed on. You can do similar with `Option` too. This is why monad composability in Scala is so cool. The same pattern 
works on very different types as long as they follow the [monad laws](https://miklos-martin.github.io/learn/fp/2016/03/10/monad-laws-for-regular-developers.html).

As before though, keep in mind that you are generating new objects with each transformation. This means you're paying 
for the protection immutability affords you with memory.

### Go

Just as `Option` and `Try` in Scala are similar, handling absent values and handling errors in Go is similar. Here again Go 
takes advantage of multiple return values, but rather than a value accompanied by a `bool`, idiomatic Go error handling features a value accompanied by
an `Error` (named `err` by convention). If `err` has the value of `nil`, then you can work with the value because it's all good; 
otherwise, you handle the error and (probably) ignore the zero-value. 

{{< gist neilchaudhuri 711fb4328e611dae4616de45ea3d4228 >}}

In this example, the `sumRoots` function, which is the client of `squareRoot`, returns a value and an error. 
Those are saved from the first call to `squareRoot`. If there is an error, the function returns immediately; otherwise, it does the same 
with the second call to `squareRoot`. If the function makes it to the end, then it returns the sum and a `nil` error. 
You will see a similar approach in `main` with the call to `sumRoots`.

There are a few interesting things to note. First, once again the code reflects Go's bias toward simplicity. Furthermore,
as immutability is not a priority, variable reuse is common in Go. In 
this case, `err` is reused to store the error returned from `squareRoot`. It doesn't happen here, but it isn't unheard of 
to reuse the value variable as well once its initial value has served its purpose. Finally, we see a common pattern:

* Call a function
* Test `err` for `nil`
* If an error is found, return
* Call the next function
* Test `err` for `nil`
* If an error is found, return
* Lather, rinse, repeat

Absent Scala's function composition, it's a fair bit of boilerplate--particularly when you are calling a lot of functions 
that may return errors. You can take advantage of language features to make it more elegant like 
[this pattern utilizing interfaces and pointers from Rob Pike](https://golang.org/doc/faq#exceptions),
but this is one of the ways where Go's simplicity is a bit overrated. Building custom abstractions from Go's toolkit requires creativity,
and you will have to do that often when you use Go to build mature applications. Still, it is almost certainly easier to 
master advanced patterns in Go than it is in Scala.

Finally, even though it doesn't appear in this example, `defer` [is a simple but powerful construct](https://gobyexample.com/defer)
in Go that executes a call at the end of a function no matter what happens--error or otherwise. You can use `defer` to 
clean things up after an error in the same way you'd use `finally` in other languages. 

## Collections

I don't have to tell you that manipulating data from a database, a [stream](https://medium.com/stream-processing/what-is-stream-processing-1eadfca11b97),
a REST request, or a host of other sources is a common task in application development. Languages that facilitate seamless
transformation and aggregation of collections of data make your life a lot easier.

### Scala

Scala has a vast library of collections--both immutable and mutable though immutable is preferred--each of which offers in turn
a vast collection of higher-order functions that let you manipulate the collection in numerous ways. 

{{< gist neilchaudhuri fb288ef2b338930408fe300989ad3c0c >}}

In this example, given a `List` of words, the code uses `groupBy` to convert it into a `Map` of each word (lowercased to normalize them) 
to a list of occurrences of each word. Finally, those lists are transformed into their sizes, and the result is a `Map` 
of each word to its count.

There isn't much to see. This is a credit to Scala's powerful abstractions. Still, it is important to keep in mind that this
code performs multiple *O(n)* traversals and with each one consumes memory to produce an entirely new collection--all but the first 
and last of which are immediately thrown away. 

### Go

Go naturally takes a far more lightweight approach to collections. You will essentially only deal with [maps](https://blog.golang.org/go-maps-in-action) and
[slices](https://blog.golang.org/go-slices-usage-and-internals), which are array views that enable memory-efficient
operations on the backing arrays. 

{{< gist neilchaudhuri 357962559b337e02be3b21d2a6a9ceb9 >}}

In this example, the code uses `make` both to create an empty map (with values defaulting to the zero value, in this case literally 0) 
to hold the word counts and to create a slice containing
the words. It simply iterates over the slice and builds the word count using the `ok` idiom you saw before to check
if there is an existing entry for the word in the map.
 
The code is more verbose than its Scala counterpart, but it is significantly more efficient in time and space. There is a 
single *O(n)* traversal with constant-time lookups in the map, and we maintain only two collections the entire time. The efficiency
of Go collections and the simplicity of using them are among the best reasons to use Go in a project.

## Concurrency and Parallelism

Modern software applications have a lot more to do in a lot less time, so it's important for your code to take advantage
of every bit of power your machines have. Modern applications demand modern languages that enable you to leverage every
core through abstractions that strike the right balance of power and intuitiveness. Perhaps most importantly, they need to provide
mechanisms for handling errors because concurrent/parallel programming is notoriously hard to debug. It's a challenge to reproduce
the conditions that generated the bug in the first place.

By the way, as Rob Pike has taught us, [concurrency is not parallelism](https://www.youtube.com/watch?v=cN_DpYBzKso). Long story
short, concurrency is about decomposing a problem into its components; each component might then run in parallel depending
on available resources. Concurrency *manages* a lot of things at once while *parallelism* does a lot of things at once. 

Regardless, doing concurrency and parallelism well is a hard problem. Whatever path you choose, you need to understand the 
nature of your tasks to achieve peak performance. Are they IO- or CPU-intensive? Are they intrinsically parallel?

### Scala

As a core language in [reactive programming](https://www.reactivemanifesto.org/), Scala takes concurrency and parallelism very seriously. 
It offers `Future` as its [core primitive](https://docs.scala-lang.org/overviews/core/futures.html) to facilitate concurrency and parallelism--in concert with an 
`ExecutionContext`, which is basically a [thread pool](https://www.playframework.com/documentation/2.7.x/ThreadPools). 
`Future` abstracts the threads away from you, which is nice, but its association with `ExecutionContext`
can lead to some [complexity](https://stackoverflow.com/questions/27454798/is-future-in-scala-a-monad) in understanding 
[how they work](http://www.beyondthelines.net/computing/scala-future-and-execution-context/).
This is why notable [third-party libraries](https://alvinalexander.com/scala/differences-scalaz-task-scala-future-referential-lazy) 
offer their own concurrency primitives. Still, `Future` at least approximates a monad, and that means we can *mostly*
adhere to the familiar patterns we saw with `Option` and `Try`.

At a low level, each asynchronous call delegates to a different thread. This helps scale your application, but it's also 
a heavyweight operation as the operating 
system needs to schedule threads against physical processors and manage expensive context switching. The result is that 
for some problems parallelism with `Future` in Scala may potentially consume a lot of resources for merely a modest 
increase in performance--or even slow you down. When performance is a major concern, you need to configure your `ExecutionContext`
smartly according to the capability of your machine(s) and the nature of your tasks. 

Bottom line? Reactive programming doesn't necessarily make your applications faster (except maybe in those cases where you
can do expensive work in parallel), but it usually allows them to be more resilient. Reactive applications
scale under load with limited threads and memory especially when you have latency from inconsistent network IO like database and REST calls.

{{< gist neilchaudhuri dad25808fb17f28d28d452d2d7b8d477 >}}

In this example, the code uses [Play WS Standalone](https://github.com/playframework/play-ws) as a REST client to fetch 
JSON containing a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier). 
Play WS has an asynchronous, non-blocking API based on `Future`, so you need to 
provide an `ExecutionContext` via [Akka](https://doc.akka.io/docs/akka/2.5/stream/). That's all the boilerplate at the 
beginning of this example. Sometimes it will be done for you
as when you use Play WS in the context of [Play Framework](https://www.playframework.com/). Nonetheless, you should be 
aware it has to happen somewhere.

In the `getUuid` function, the `get` call to Play WS makes an asynchronous, non-blocking HTTP GET request and returns a `Future` 
containing the response. You need to be careful and make sure you only work directly with the `Future` itself lest you 
lose the eventual result--the response or an error. Otherwise anything you do next outside the realm of the asynchronous call 
will execute after the request is dispatched but completely independently from when the response returns. That's a common
mistake for engineers new to `Future`. This is why everything that happens after the call in `getUuid` is dispatched is a method call on the
`Future` object that comes back.

Like a typical monad, `Future` offers `map` to enable clients to transform results, and `getUuid` does exactly that by parsing 
the JSON response into the UUID string and returning a `Future[String]`. If the REST call returned an error, it
remains preserved in the `Future.` The client of `getUuid` requires two calls to complete before
moving forward, so it calls the function twice so the independent fetches can run in parallel
and composes them as we saw with `Try` via `for` comprehension to produce a `Future[Tuple2[String, String]]`. Finally,
the code calls `map` again to transform the tuple of strings into a printed result. If there is an error any step of the way,
we handle it with `recover`.

`Future` is a really nice concurrency primitive that offers the convenience of a monad, but it has its pitfalls. As mentioned,
you need to supply a finely tuned `ExecutionContext`, and everything you do once you make an asynchronous call better happen in the
context of the `Future` that returns. Otherwise, you will find very confusing results like silent failures. The 
[amorphous referential transparency](https://www.reddit.com/r/scala/comments/3zofjl/why_is_future_totally_unusable/) 
of `Future` can confuse you too. If the code made its calls to `getUuid` inside the `for` comprehension, they would have 
been sequential and not parallel. The result is likely the same, which *feels* 
[referentially transparent](https://alvinalexander.com/scala/how-to-create-scala-methods-no-side-effects-pure-functions#referential-transparency), but the fact
where you make the call impacts the desired parallelism definitely doesn't. 

`Future` also consumes a lot of system resources because it transacts in full threads that have to managed by the operating system.
It's important to profile your application to understand what's going on because there will almost be certainly occasions
where things don't perform as you expect. You will need to diagnose if it is a code or resource problem.

### Go

Concurrency and parallelism lie at the heart of Go's mission as well, but of course it takes a totally different approach
with primitives called [goroutines](https://tour.golang.org/concurrency/1) and [channels](https://gobyexample.com/channels). 
The philosophy here is to break down your tasks into 
independent functions, and spin them off into goroutines. The key thing to remember is 
[goroutines are not threads](https://golang.org/doc/faq#goroutines); they are lightweight pieces of memory tracking thread usage.
As a result, you can spin off literally hundreds of thousands of goroutines and use only a little memory on the stack while
the Go scheduler, not you, uses clever algorithms to manage them in concert with the operating system and its actual threads.

Goroutines use a paradigm called [communicating sequential processes](https://en.wikipedia.org/wiki/Communicating_sequential_processes) (CSP)
developed by Sir Tony Hoare, who despite being the `null` guy is a pillar of computer science. CSP is a 
message-passing model. Goroutines pass their data over channels rather than
synchronize data, which slows things down. If you are familiar with messaging patterns like 
[Gregor Hohpe's Enterprise Integration Patterns](https://www.enterpriseintegrationpatterns.com/), then you understand the power
of this approach to manipulate message data as needed to produce the results you want--and at scale thanks to Go.    
  
{{< gist neilchaudhuri 3230c8388581c3d85977154f18090f47 >}}

In this example, the code defines a type called `Result` containing a UUID and an error to hold the result of a concurrent 
computation. Only one of those should be populated with a meaningful value, but there is no simple way to enforce that. 
Meanwhile, the `main` function creates a [buffered channel](https://gobyexample.com/channel-buffering) for communicating
`Result` values and spins off two goroutines for two concurrent `getUuid` calls, which take the channel as a write-only
parameter. That *is* enforceable.

The `getUuid` function makes the REST call and unmarshals the JSON response. If an error occurs at either step, the code creates 
a `Result` with the respective error (and the zero value, the empty string, for the UUID) and publishes it to the channel.
If all goes well, the code creates a `Result` with the UUID (and the zero value, `nil`, for the error) and publishes
it to the channel instead. The `main` function knows in this case how many `Results` to expect from the channel and consumes 
the right amount of data from the channel. It bails at the first error it finds, or it accumulates the data into a slice of UUIDs.

Goroutines are lightweight and flexible--and straightforward if you have a good grasp on messaging. Still, there are subtleties
that can make them more complicated than we might expect from Go. If you don't understand the difference between buffered
and unbuffered channels, you may find [curious results](https://stackoverflow.com/questions/18660533/why-using-unbuffered-channel-in-the-same-goroutine-gives-a-deadlock).
Error handling is also tricky because patterns aren't obvious. In this case we encapsulated success and error cases in a single
struct, but some advise using [dedicated error channels](https://stackoverflow.com/a/42890750/1347281). This example is also 
as simple as it gets: You have one channel, and you know how many computations will transpire. In more
complicated cases you will need to utilize other Go functionality from the [sync](https://golang.org/pkg/sync/) package 
like `Mutex`, `WaitGroup`, `Pool`. You might even need the [experimental](https://rodaine.com/2017/05/x-files-intro/) 
`ErrGroup`. Finally, you need to be very careful with [pointers](https://tour.golang.org/moretypes/1) and mutability generally
as always in concurrent programming. They save memory but you need to govern access carefully.

Concurrency and parallelism are always hard. You have to decide which language offers primitives that comport with your mental
model of how things should work.  

## Polymorphism

You know polymorphism. Far beyond trite `Animal`-`Dog`-`Cat` examples, the business value of polymorphism is to
leverage abstractions to limit changes to your code even as the functionality of your application grows. By defining 
new behavior leveraged through old abstractions, you can build software efficiently, and you don't have
to work weekends when your client demands new features immediately.

### Scala

As an OO language, Scala offers the familiar polymorphism that developers in Java, Ruby, and similar languages 
have loved for years, but because it is a functional lanugage with a rich type system, it also offers 
[typeclass polymorphism](https://medium.com/@sinisalouc/ad-hoc-polymorphism-and-type-classes-442ae22e5342), which enables
completely unrelated types to exhibit polymorphic behavior. You can think of it as functional programming's take on the 
[Open-Closed Principle](https://stackify.com/solid-design-open-closed-principle/) from OO. Perhaps most striking of all
in comparison to Go, Scala offers parametric polymorphism--what the kids call "generics." 
When [Java 5 introduced generics](https://docs.oracle.com/javase/tutorial/extra/generics/index.html),
it was revolutionary, and Scala benefits as well.

{{< gist neilchaudhuri 6102b1fd9539d18fc918d7a872b90a03 >}}

In this example, we really see three examples of polymorphism in Scala. The first is the kind of straightforward 
[runtime polymorphism](https://stackoverflow.com/questions/28961957/example-of-runtime-polymorphism-in-java) familiar to Java developers--except with 
[Scala traits rather than Java interfaces](https://stackoverflow.com/questions/16410298/what-are-the-differences-and-similarties-between-scala-traits-vs-java-8-interfa).
`Connection` and `File` are marked as instances of `Closeable`, and the `showClosing` function accepts a `Closeable` parameter.
Therefore either `Connection` or `File` is suitable to pass to `showClosing` and the result of the function is dynamically and
polymorphically resolved.

The second example of polymorphism is also familiar to Java developers. It's generics. In Scala, you never have just `List`;
you have `List[T]`, where `T` is a type parameter indicating the type of item in the `List`. Scala's type inference deduces that 
`numbers` is an instance of `List[Int]`; `strings` is an instance of `List[String]`. The `head` method returns the first element
of a `List`, which is a `T`. `T` is `Int` with `numbers` and `String` with `strings`.
Finally, just for demonstration purposes, the code defines a function `use` that's not only type parameterized but type
bounded. It only accepts a type that's `File` or any subclass of `File`. If you try passing a `Connection` to it, the code
won't compile.

The last example is what I consider the coolest and most powerful form of polymorphism in Scala--typeclass polymorphism.
`List` has a `sorted` method as you'd hope, but it requires an 
[implicit ordering](https://www.scala-lang.org/api/current/scala/collection/immutable/List.html#sorted[B%3E:A](implicitord:scala.math.Ordering[B]):Repr).
In other words, you have to tell `List[T]` how to sort its elements by providing a function that 
[lifts](https://stackoverflow.com/questions/17965059/what-is-lifting-in-scala) `T` into an `Ordering[T]`. This makes
perfect sense, and it is enforced by Scala's type system. The code defines
a type called `Complex` and a typeclass called `ComplexOrdering` that defines how instances of `Complex` should be sorted.
Without this, `List[Complex]` wouldn't know how to sort its contents, and that last line wouldn't compile. This means you can 
make any `T` sortable by defining an `Ordering[T]` typeclass. More broadly, it means you can use typeclasses to add 
polymorphic behavior to completely unrelated types, which includes types you don't control like legacy types and/or 
types found in imported dependencies. 

Polymorphism in Scala is powerful and flexible because of its sophisticated type system. It allows you not only to extend functionality
in clever ways but also to constrain the solution space. In other words, you can limit the number of ways a problem can be solved,
which makes it harder to write bugs.     

### Go

Go is not an OO language. Structs have no capacity for inheritance by design--only composition via 
"[embedding](https://golang.org/doc/effective_go.html#embedding)". Go is not quite functional either. However, polymorphic
behavior is not only possible but a fundamental part of the power of Go via 
[structural typing](https://en.wikipedia.org/wiki/Structural_type_system). You can take advantage by doing two things. First, you write 
[interfaces](https://gobyexample.com/interfaces), which as usual define the method signatures for a set of API calls. You
can also compose interfaces via embedding. Second, you can 
endow any type--an existing Go type like `float64` or your own custom structs--with behavior by defining functions and assigning
them to the type. When you do this, the type is called a "[receiver](https://tour.golang.org/methods/8)", and if the receiver 
has been assigned all the functions associated with a given interface, it is an implicit instance of that interface. You
can then pass the type to any function expecting an instance of that interface, and it's resolved at compile time, which 
makes you more productive in stark contrast to the runtime resolution of 
[duck typing](https://en.wikipedia.org/wiki/Duck_typing) in dynamic languages like [Python](/categories/python).

{{< gist neilchaudhuri 1b5c2024980149bf58ebed603b6f578d >}}    
 
In this example, interface `Named` is embedded in `Connection` and `File`. Note that this does not denote any relationship
among them, but there is a tight coupling similar to inheritance in that any changes to `Named` are reflected wherever it 
is embedded. Interface `Closeable` is defined with a single function `close` with no parameters and returning a `string`. 
Any type with an identical function is resolved at compile time as an instance of `Closeable`, and lucky for us, 
`Connection` and `File` qualify as they are both receivers of a `close` function with the right signature. 
As a result, `showClosing` works just fine when called on both kinds of structs.

That's the extent of Go's polymorphism. Clearly it is not remotely as extensive as Scala's, but it promotes two important 
values--composition over inheritance and abstraction over implementation. Engineers coming from traditional OO backgrounds
may find Go's polymorphism takes a little getting used to, but with some creativity you will find it 
[quite powerful](https://talks.golang.org/2015/json.slide#1). There is no question, however, that the absence of generics
can be quite jarring for more complex applications. It's such a powerful and pervasive idiom that even front end languages
like [TypeScript](https://www.typescriptlang.org/docs/handbook/generics.html) and [Elm](https://elmprogramming.com/type-system.html) have it. 
As it happens, there has been such demand for generics from the Go community that 
[the maintainers have begun considering it](https://go.googlesource.com/proposal/+/master/design/go2draft-generics-overview.md).
As the debate rages on whether the benefits outweigh the costs--potentially the speed and simplicity fundamental to 
Go's mission--just recognize you won't have the benefit of generics for a while.

# How Do You Decide?

Scala and Go are two great languages with fundamentally different philosophies that offer distinct advantages and disadvantages. I've 
tried to lay those out as simply as I can so you can extrapolate which might be best suited to your situation. 

Having worked on complex applications with both languages, I can tell you Scala takes longer to grasp, and you will have a harder 
time finding Scala engineers--especially in the United States and especially if you require onsite work. But if you 
have senior staff who can mentor novices and who can build abstractions that utilize functional programming's strengths 
and the exquisite type system to constrain wayward novices, you will find the team growing very productive very quickly.
Day-to-day tasks like compilation and continuous delivery are slower, and you will often find yourself exploring Scala's rich
[open-source](/categories/open-source) community to enhance development.

Meanwhile, anyone can learn Go. The constructs are simple and lightweight, and compiling and executing are just so fast. It's amazing.
Mastering the more advanced concepts of Go, however, demands effort. You will also find yourself reinventing the wheel 
from other languages often--like writing your own `filter` function, which is easy enough but is more plumbing than 
directly related to your business domain--and building creative workarounds for the limitations of Go by exploiting the powerful
features Go *does* offer. Dependency management and error handling could be better, and the absence of generics can be rather painful
when dealing with unknown schemas like [unmarshaling dynamic JSON](https://stackoverflow.com/questions/28877512/taking-a-json-string-unmarshaling-it-into-a-mapstringinterface-editing-an).

So it all depends on if the priorities of your application and project align with the priorities of the language and ecosystem
you choose. Despite the strong possibility that this opinion will subject me to ritual humiliation on social media, I would use
Scala (or a similarly featured language like [Kotlin](/categories/kotlin)) for microservices or bigger
but Go both to replace any [bash or Python (or C++ or whatever) scripts](https://www.quora.com/Where-do-we-use-Python-or-shell-scripts-in-the-DevOps-project-life-cycle) 
that are part of my continuous delivery pipeline and 
to create [lambda functions](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html), which are supposed to be lightweight,
fast, and focused. This means you may not necessarily have to choose because nontrivial cloud native architectures will often 
blend both microservices and lambdas, and you should *always* have a continuous delivery pipeline.

I hope this helps. If you read the whole thing, you deserve a nap.
        




 
