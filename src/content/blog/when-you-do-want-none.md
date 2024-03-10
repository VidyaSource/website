---

author: neil-chaudhuri
title: "When You Do Want None"
description: "A quick tip for Scala developers for handling empty and whitespace strings in their code."
image: "/img/blog/mixalot.jpg"
date: 2015-02-25
gist: true
tags:
- Scala
categories: 
- Programming
- Functional Programming
aliases:
- /blog/Programming/Scala/2015/02/25/when-you-do-want-none
---

In the applications I typically develop, I only care when strings are meaningful or when they aren’t because they are
`null` (or `nil`, `None`, or `Null` depending on the language). Empty strings and strings containing only whitespace are this
weird, in-between third category I really would prefer not to deal with. When I go to McDonald’s, I want to focus on the
burgers and fries. I want absolutely nothing to do with the [Filet-O-Fish](https://www.youtube.com/watch?v=6bJOIqVAD-s).

Scala’s [Option](http://www.scala-lang.org/api/2.11.4/index.html#scala.Option) gives us a neat way to avoid meaningless strings if we wish.

I have [blogged](/blog/know-your-options) about `Option` before.
It helps us avoid null in an elegant, typesafe way at compile-time. The collection-like semantics of `Option` helps us turn
[Some](http://www.scala-lang.org/api/current/index.html#scala.Some)(*meaninglessString*) into [None](http://www.scala-lang.org/api/current/index.html#scala.None$)
(not to be confused with Python’s [None](http://stackoverflow.com/questions/19473185/what-is-a-none-value))
so we can deal with it as if it were an organic `None` value.

It’s really pretty easy.

~~~scala
val option: Option[String] = Some("") 
//or Some("Vidya"), Some("   "), None, or whichever Option[String] you want
val result: String = option
  .filter(_.trim.nonEmpty)
  .map(string => s"You found a meaningful string $string")
  .getOrElse("You found None or an empty or whitespace-only string.")
println(result)
~~~

If you know Scala, you can see exactly what happens here. Check out that call to `filter`. We typically associate it
with collections where `filter` removes all elements from the collection that don’t pass the condition. Option offers an
analogous `filter` that returns None if the value “inside” Some doesn’t pass the condition. In the case of an empty or
whitespace-only string, trimming it keeps it or makes it empty, so the `filter` test doesn’t pass and yields None. This is a really
concise way of letting us deal with only two categories of strings--meaningful or not--instead of three. One place where
this could come in handy is backend form validation of mandatory fields in web applications.

If you have the luxury of not having to distinguish between empty-ish strings and null, keep this tip in mind.
Unless you’re Sir Mix-A-Lot, you actually might [want None](https://www.youtube.com/watch?v=_JphDdGV2TU).