---

author: "Neil Chaudhuri"
title: "Know Your Options"
description: "Null is a real pain, but functional languages like Scala can make it a lot easier." 
image: "/img/blog/options.jpeg" 
date: 2014-08-04
gist: true
tags:
- Java
- Scala
- Ruby
categories: 
- Programming
- Functional Programming
aliases:
- /blog/Programming/Java/Scala/Ruby/2014/08/04/know-your-options
- /blog/know-your-options

---

Imagine a method in [Java](/tags/java) that retrieves an `Employee` entity from the database by the employee id. Something like this:

{{< gist neilchaudhuri 0492bb53d537566a39a5 >}}

That's pretty straightforward. You've probably written hundreds of methods like this one. The problem is what to do if 
there is *no* employee with that id. Java developers usually consider two options for this scenario:



* Throw a [checked exception](http://en.wikibooks.org/wiki/Java_Programming/Checked_Exceptions)
* Return `null` 

Sure, you could also apply the [Null Object Pattern](http://en.wikipedia.org/wiki/Null_Object_pattern#Java), but no one ever does that.

Throwing a checked exception has one huge advantage. It explicitly alerts you to the possibility you won't find an employee 
with the id, and the compiler forces you to deal with that possibility by either kicking the can down the road with a rethrow 
or by catching the exception. The problem is that using exceptions to regulate flow control is generally considered 
[a bad idea](http://stackoverflow.com/questions/729379/why-not-use-exceptions-as-regular-flow-of-control). 

On the other hand, returning `null` implies using a conditional statement for flow control, which is preferred. The problem is that `null` 
is basically the worst thing ever. Even the guy who invented it 
[thinks so](http://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare). For details on 
why `null` is basically the worst thing ever, check out what the [Google Guava](https://code.google.com/p/guava-libraries/) team 
[has to say about it](https://code.google.com/p/guava-libraries/wiki/UsingAndAvoidingNullExplained).

Various languages address the issues with `null` in different ways. [Ruby](/tags/ruby), for example, has `nil`, which is a singleton 
instance of [NilClass](http://www.ruby-doc.org/core-2.1.2/NilClass.html), which can be 
[monkey-patched](http://stackoverflow.com/questions/394144/what-does-monkey-patching-exactly-mean-in-ruby) in clever ways 
to mitigate some of those issues.

A much cleaner, more sophisticated approach is to use the concept of [optional types](http://en.wikipedia.org/wiki/Option_type), 
which is sort of utilized in Guava and has its origins in mathematical [type theory](http://en.wikipedia.org/wiki/Type_theory) 
and functional programming languages like Haskell and [Scala](/tags/scala), where I was first introduced to the 
concept. Since then, Scala's `Option` type has become one of my favorite features of the language.

Let's go back to our original example. In Scala, it would probably look like this.

{{< gist neilchaudhuri 263b8d2a7817452cc1b2 >}}

Check out that `Option[Employee]` return type. The `Option` type has a [rigorous definition](http://www.scala-lang.org/api/current/index.html#scala.Option), but as a practical matter, think of it as a one-item 
collection. If we find an employee with the given id, the collection contains the corresponding `Employee` instance. If 
we don't, the collection contains a singleton--similar to Ruby's `nil` and some applications of the Null Object Pattern.

[Some](http://www.scala-lang.org/api/current/index.html#scala.Some) and [None](http://www.scala-lang.org/api/current/index.html#scala.None$) 
are instances of `Option`. So more precisely, when we find an employee, our method returns an instance of `Some[Employee]`. 
When we don't, our method returns `None`.

What's the big deal? Two things.

First, just like with the exception approach, we have a compile-time mandate to account for both possibilities. There is 
no chance we will be caught by surprise at runtime and slow down our development cycle. But this compile-time checking 
is accomplished with type safety rather than a problematic exception.

Second, and even better, the caller's code is really clean. You could call our method like this:

{{< gist neilchaudhuri 12ada41ce66430cdd3c7 >}}

If you have worked with Scala collections before, you'll notice how similar it is to use `Option`. In this case, 
if `findById` returns `Some`, the `map` call extracts the `Employee` instance “inside” the `Some`, and you can do whatever you want 
with it. Here we get the employee's name in the `map` call and run the name through a `filter` to make 
sure it isn't blank. If it isn't, the employee's name is stored in the variable. The `getOrElse` call never happens. 

However, if `findById` returns `None`, the `map` and `filter` calls never happen, and `getOrElse` handles this alternate flow. In fact, `getOrElse`
executes when *any* method along the call chain returns `None`. So if there is an employee with given id but the name is blank, 
`map` returns `Some` but `filter` returns `None`, and `getOrElse` does its thing in this case as well.

All scenarios are accounted for, and the code is elegant and pretty easy to follow if you are comfortable with actual 
collections. You can even use [flatMap](http://alvinalexander.com/scala/collection-scala-flatmap-examples-map-flatten) 
if you have `Option`'s within `Option`'s. That's cool.

Hopefully now you know why I love `Option` so much. Even if you don't program in Scala, you can think differently 
about your code no matter which language you use. For much more on `Option`, check out Daniel Westheide's 
[outstanding post](http://danielwestheide.com/blog/2012/12/19/the-neophytes-guide-to-scala-part-5-the-option-type.html)
on the topic.
