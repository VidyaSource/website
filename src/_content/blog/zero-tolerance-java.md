---

author: "Neil Chaudhuri"
title: "Zero Tolerance"
description: "In your Java program, is your BigDecimal 0? It depends on what the meaning of the word of is is." 
image: "/img/zero.jpg" 
date: 2014-11-06
gist: true
tags:
- Java
categories: 
- Programming
- Testing
aliases:
- /blog/Programming/Java/Testing/2014/11/06/zero-tolerance
- /blog/zero-tolerance

---

Experienced [Java](/tags/java) developers know that Java 5 brought many significant improvements to the language. 
One of them was the introduction of [BigDecimal](http://docs.oracle.com/javase/8/docs/api/java/math/BigDecimal.html), an 
abstraction for arbitrary-precision decimal numbers that gives you arithmetic functionality and complete control over 
rounding and scale. All of this flexibility and power made `BigDecimal` the *de facto* class Java developers used to model money--at 
least until Java 7 gave us the [Currency](http://docs.oracle.com/javase/8/docs/api/java/util/Currency.html) class. 
On a recent project though with an API that doesn’t use `Currency`, I had a simple question:

*How do you test if a BigDecimal is 0?*

It turns out that the power of `BigDecimal` makes this question a lot trickier than you might think.

My first instinct was to do what you are always supposed to do with equality of objects--use the 
[equals](http://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-) method. So I used 
BigDecimal’s [ZERO](http://docs.oracle.com/javase/8/docs/api/java/math/BigDecimal.html#ZERO) constant and did this.

{{< gist neilchaudhuri dbb7435aeb9a15a716fd >}}

We do this kind of thing all the time without a second thought. The problem was that my unit test failed, and it turns 
out it was because the condition always evaluated to `false`--even when `price` was definitely 0.

It turns out zero isn’t always zero. At least not when it comes to `BigDecimal`.

The answer is in `BigDecimal`’s implementation of the [equals](http://docs.oracle.com/javase/8/docs/api/java/math/BigDecimal.html#equals-java.lang.Object-)
method. 

> Unlike compareTo, this method considers two BigDecimal objects equal only if they are equal in value and scale (thus 2.0 is not equal to 2.00 when compared by this method).


I assumed `equals` just compared values, but scale matters. `BigDecimal.ZERO` has scale of 0, but the zero value in `price` in my test did not. 
That’s why things went wrong.

What’s the right way to check if your BigDecimal instance is 0? It turns out there are two right ways. 

One of them makes perfect sense if you know [Comparable](http://docs.oracle.com/javase/8/docs/api/java/lang/Comparable.html). 
(If you don’t, check out our [tutorial](/tutorial/2013/10/27/comparison-shopping) on the topic.)

{{< gist neilchaudhuri e0f0e8cbec3cc2007e44 >}}

This approach is intuitive and readable.

If you want to sacrifice readability to gain a few milliseconds of performance and earn some cuteness points, you can do this.

{{< gist neilchaudhuri d4a7d94fbfc6a30692f2 >}}

BigDecimal, like all values in Java, represents a signed number, and the [signum](http://docs.oracle.com/javase/8/docs/api/java/math/BigDecimal.html#signum--) 
method returns the [sign](http://en.wikipedia.org/wiki/Sign_function) of the underlying number. Technically, `signum` doesn’t 
test the numerical value, but since a BigDecimal representing 0 always has a signum of 0...it works out the same in your condition.

The next time you are checking if your BigDecimal is 0, just remember. [It depends on what the meaning of the word of is is](https://www.youtube.com/watch?v=j4XT-l-_3y0).
