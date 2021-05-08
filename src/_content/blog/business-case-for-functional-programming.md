---
author: "Neil Chaudhuri"
title: "The Business Case for Functional Programming"
description: "Learn how functional programming can make your teams more productive than you ever imagined."
image: "/img/functions.jpg"
date: 2018-09-18
tags:
- Agile
- Scrum
- Java
- Scala
- Go
- Technical debt
- ScalaCheck
- REST
categories: 
- Agile
- Project Management
- Software Engineering
- Programming
- Functional Programming
- Testing
- Continuous Integration
aliases:
- /blog/the-business-case-for-functional-programming/
---

Functional programming isn't exactly a fun topic anywhere outside of technical conferences and
[The Big Bang Theory](https://www.youtube.com/watch?v=k0xgjUhEG3U). Even software engineers who love 
code often tune out when they hear terms like [monad](http://stackoverflow.com/questions/44965/what-is-a-monad)
and [referential transparency](https://stackoverflow.com/questions/210835/what-is-referential-transparency). 
But if you are a technical manager or executive, heads up. Functional programming will limit your 
[technical debt](tags/technical-debt) so you build better 
software faster than you imagined and will earn you the Tesla you always wanted. 

Here's why.

## Code Reuse For Real

Code reuse is a vision long offered by object-oriented (OO) languages like [Java](/categories/java) but has proven to be a 
myth--like the Fountain of Youth and fat-free ranch dressing that's edible. In practice OO languages tightly couple data
with behavior, so it's hard to extract the behavior into reusable code others can use. 

In functional programming (FP), *behavior* is the first-class citizen--in the form of functions that deterministically transform single inputs 
into single outputs. This empowers engineers to compose functions into data flows where providing data to an initial function sets off a 
[Rube Goldberg machine](https://www.youtube.com/watch?v=kr_z37TgQO4) where the output of that function
becomes the input to the next function and so on down the line. You can also mix and match functions to create new data flows.
In the end, building software is basically like [building Legos](https://cdn-images-1.medium.com/max/1600/1*yGnDGRW4pTgmcDUi4oC8Uw.png).
This makes your code easier to understand--or in FP vernacular, "reason about"--and makes code reuse
a natural outcome of your day-to-day process.

## Satisfaction Guaranteed. Literally.

If you manage OO projects, you may have heard of "design patterns," which came out of a 
[book by a group of expert software engineers](https://en.wikipedia.org/wiki/Design_Patterns) known as the "Gang of Four."
Design patterns offer suggestions for modeling code that solves common problems in a manner resilient to change. 
In other words, thoughtfully applied patterns reduce your time to market so your team won't have to work the weekend
after your mercurial client changes course. That spares you a lot of resentment and 
the cost of at least two pizzas--more [if I am on your team](/consulting/).

Sounds great, right? It is! Sort of.

The problem is design patterns are opinion--expert opinion borne of decades of experience to be sure--but opinion nonetheless. 
As programming languages and technical challenges evolve, there is no way to know how well they will stand the test of time. The
[Singleton](https://www.geeksforgeeks.org/singleton-design-pattern/) design pattern, for example, has 
been [particularly controversial](https://stackoverflow.com/questions/137975/what-is-so-bad-about-singletons).

On the other hand, FP offers *mathematical* guarantees that the code you write is sound. The laws that govern 
it--[Type theory](https://en.wikipedia.org/wiki/Type_theory) and 
[Category theory](https://en.wikipedia.org/wiki/Category_theory) in particular--are not vulnerable to the whims of the broader
technology landscape. Math isn't opinion. 

This is why [Elm](https://elm-lang.org/) developers often report 
["0 runtime exceptions" in production](https://www.slideshare.net/InfoQ/fullscale-elm-in-production), which sounds like 
fat-free ranch dressing that's edible to [JavaScript](/tags/javascript) developers resigned to a lifetime of `undefined` 
[errors](https://stackoverflow.com/questions/48333993/javascript-function-is-undefined-only-in-ie11) at runtime that would make 
[Sisyphus](https://www.britannica.com/topic/Sisyphus) cry. That's a huge win, but note "0 runtime exceptions" isn't the same 
as "0 bugs." No paradigm can guarantee that. FP can't stop a developer surviving on Red Bull after staying up all night playing 
Fortnite from calculating the total price of a customer's shopping cart by subtracting rather than adding. Still, FP 
--along with companion principles like [immutability](https://www.quora.com/Why-is-immutability-important-in-functional-programming)--
provides safeguards making it harder to write bugs and uncovers the ones your team *does* write more quickly and cheaply by virtue of 
mathematical guarantees that endure.

## More Quality in Less Time

That shopping cart bug should be caught by tests, but most software engineers look at unit and integration testing like [flossing](https://www.dentalassociates.com/application/files/4214/7760/0003/flossing-is-beneficial-1.jpg).
They get why it's necessary but don't look forward to it at all. The consequences are particularly profound
when leadership acts as an enabler. Not that you would ever do this, but many technology leaders find testing takes so long that 
they are satisfied with a few token tests. The result is illusory productivity. Delivering a mess of alpha- and beta-quality features
quickly might impress unsuspecting clients at first, but watch their enthusiasm wane when the inevitability 
of bug fixes orders of magnitude more expensive becomes apparent.

To be fair, developer testing can be a pain. Test setup is slow because you need to 
mock or stub your inputs along with any dependencies necessary for the code to execute a scenario like databases or [REST](/tags/rest) clients. This
often requires an open-source library like [Mockito](https://site.mockito.org/) or [unittest.mock](https://docs.python.org/3/library/unittest.mock.html).  

*And* you have to repeat this process for multiple happy-path scenarios and some
arbitrary number of alternate-path and error scenarios. 

*And* you need
to write your tests efficiently so that the test suite doesn't take hours to run in [continuous integration](/categories/continuous-integration).

All of that is cumbersome, but FP can make it easier.

The first thing you should do--FP or not--is to reduce dependencies. Lots of dependencies is a [smell](https://martinfowler.com/bliki/CodeSmell.html). 
Then replace the remaining object dependencies 
with functional dependencies. Gradually have the engineers evolve their APIs towards *behavior* rather than objects. 

For example, let's say one of your user stories involves fetching a username by an identifier to use it for subsequent business logic. 
Typically, that code has a dependency on some object that knows how to read from the database. Testing the logic in isolation
requires the overhead of writing your own stub for that database object or importing a library to mock it. What if instead the 
dependency was on a simple function that takes a number (the identifier) and returns a string (the username)? In Scala, 
that might look like `Int => String`. This 
elegantly decouples the logic from the database concern or any particular family of objects; all it knows is 
"If I give this function the right identifier, I get the username back." Even better, I can stub that function really easily:

* One happy path: `123 => "neil"`
* One error path: `999 => throw new UserNotFoundException("No user with id 999")` 
  

That's really easy. No mocking libraries necessary. In production the logic will use a function performing the real database lookup, but it
will still have the identical `Int => String` shape.

As for test inputs, consider [property-based testing](http://www.scalatest.org/user_guide/property_based_testing). 
For the cost of less initial setup than you do now for a single input, tools like 
[ScalaCheck](/tags/scalacheck) will generate literally
hundreds of inputs that will put the code through the wringer against data you never imagined and would never have time to write yourself.
I would suggest property-based tests as the first line of defense in development but conventional, scenario-based tests 
with functional dependencies to address bugs discovered in functional testing or production.   

Finally, if your team's tests have sophisticated setup with expensive resources you'd like to share across tests and 
clean up afterwards, have your engineers employ the [Loan Pattern](https://www.outbrain.com/techblog/2017/05/effective-testing-with-loan-pattern-in-scala/),
which is one of the FP-est things you can do. I wrote an example 
on [Stack Overflow](https://stackoverflow.com/questions/43729262/how-to-write-unit-tests-in-spark-2-0/43769845#43769845) 
of how powerful this can be for testing [Big Data](/categories/big-data) jobs using [Apache Spark](/tags/apache-spark). 


## Easier Than You Think

It is very likely that today you can begin to enjoy many of the FP advantages I've described. Most modern languages--even Java finally
--offer some degree of FP either in the core language or through open-source extensions. 

It is also critical to keep in mind that it isn't a zero-sum game among FP and other paradigms. In fact, the fundamental
academic premise of Scala is that OO and FP can not only coexist but complement each other to produce an ideal language offering
the best of both. Similarly, FP can complement other paradigms like the imperative, procedural philosophy that
drives [Go](/tags/go).  

Consequently, you should not worry that FP demands a radical transformation of your code 
base that is unrealistic for your timeline and unthinkable for your client. No need to send everyone to Haskell training either.


## Conclusion

As you face increasing pressure to deliver more features in less time at higher quality, your team needs to leverage the full capabilities
of your engineering stack to maximize productivity. No matter your situation, let functional programming be a weapon
in your arsenal. Whether you transition to
fundamentally functional languages like [Elixir](https://elixir-lang.org/) or Scala or Elm, leverage functional capabilities 
(or extensions) in other languages like Java or JavaScript, 
or even just adopt corollary principles like immutability, your team will write fewer bugs and catch others faster than you
thought possible. You should see improvement in as little as a single sprint (in a [Scrum](/tags/scrum) project), and it's an 
investment [most software engineers are happy to make](/blog/the-art-of-software-engineering) that will generate huge
value for all of you.
