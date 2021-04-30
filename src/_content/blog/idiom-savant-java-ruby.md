---

author: "Neil Chaudhuri"
title: "Idiom Savant"
description: "Idioms are just as important in programming languages as they are in spoken languages."
banner: "img/banners/programming.jpg"
date: 2014-01-21
gist: true
tags:
- Java
- Ruby
categories: 
- Software Engineering
- Programming
aliases:
- /blog/Programming/Ruby/Java/2014/01/21/idiom-savant
- /blog/idiom-savant

---

Idioms are a big deal in any language. They represent deep knowledge beyond syntax and grammar, a feel for getting the
most out of the language.

For example, when non-English speakers become fluent in English, they usually speak in a “textbook” way. One might
see a celebrity receive a light punishment for a major crime and say, “That individual most assuredly did not receive a
punishment commensurate with the gravity of the crime.” Meanwhile, a native English speaker might say instead, “Dude!
Really? That’s a slap on the wrist!” What the non-native English speaker says is formal and correct, but it doesn’t
reflect a deep understanding of the language or comfort with its idiosyncrasies.

Idioms are just as important in programming languages.

When I first started writing [Ruby](/tags/ruby) code, it was after many years of writing [Java](/tags/java)
code. It showed. It looked like Ruby code written by a Java guy.
It still worked, but it didn’t give me a feel for how Ruby works. Worse yet, I wasn’t taking advantage of the cool
features Ruby has that Java doesn’t.

Here is a Ruby function written in a non-idiomatic way.

{{< gist neilchaudhuri 8535394 >}}

Except for the *def*, which is more reminiscent of Groovy, this function looks very Java. It takes a string parameter
(or so we assume since Ruby is dynamic) and checks if it contains a space. If it does, return the string in lowercase
with the space removed. If not, return the string in uppercase. Contrived but straightforward. And very Java-looking.

Compare that to the idiomatic Ruby equivalent

{{< gist neilchaudhuri 8535382 >}}

Notice a few differences:

* The *unless* keyword in Ruby to indicate “if not”
* The condition on the same line (which you can do with *if* or *unless*)
* No parentheses necessary around the parameter to *include?*
* A second return statement unnecessary since the last line is returned

As you can see, idiomatic Ruby is more concise and leverages core language features that are pretty cool and absent from
Java.

Now check out a very Java-looking loop

{{< gist neilchaudhuri 8535421 >}}

This loops 100 times and prints out the current number. It looks very familiar to a Java developer.

Compare that to the idiomatic Ruby equivalent

{{< gist neilchaudhuri 8535410 >}}

Notice the differences:

* Underscore syntax for the function name rather than the lower camel case of Java
* The *[times](http://www.ruby-doc.org/core-2.1.0/Integer.html#method-i-times)* method called on *100* because it is an
object--not a primitive like in Java
* The *each* method called on the *times* enumerator

In this case, idiomatic Ruby is not more concise. But as [Russ Olsen](https://twitter.com/russolsen) points out in *[Eloquent Ruby](http://eloquentruby.com/)*,
the foremost authority on idiomatic Ruby,
the Java-like loop syntax is actually syntactic sugar for the idiomatic loop syntax. The Ruby community prefers the idiomatic
syntax. So should you.

These are simple examples. I didn’t even get into the idiomatic Ruby awesomeness at your disposal with collections thanks to
its support for functional programming constructs
(even though [Ruby is not a functional language](http://stackoverflow.com/questions/159797/is-ruby-a-functional-language)).

I’m not saying Ruby idioms are superior to Java idioms. You simply should write idiomatic code for whichever language
you’re using. A Ruby developer moving to Java would have to learn to use lower camel case, *if* blocks, and so on.

Idiomatic code is critical for several reasons. It will often be more concise than the alternative. You will take
advantage of the powerful features that have presumably made the language popular. You will also become a student of languages
and understand the pros and cons of [static vs. dynamic](http://stackoverflow.com/questions/125367/dynamic-type-languages-versus-static-type-languages),
[imperative vs. functional](http://stackoverflow.com/questions/602444/what-is-functional-declarative-and-imperative-programming),
*etc*., which will make it easier to learn new languages and stay ahead in technology. Finally,
your colleagues at work will be more likely to understand and maintain your code. That needs to be a priority for you if you want to be a
truly professional developer and team player.

Keep idioms in mind as you become an expert polyglot developer. You will write better code and prove very
marketable.
