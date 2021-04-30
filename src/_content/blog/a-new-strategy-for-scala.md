---

author: "Neil Chaudhuri"
title: "A New Strategy for Scala"
description: "The report of the death of the Strategy Pattern has been greatly exaggerated."
banner: "img/banners/scala.png"
date: 2016-12-24
gist: true
tags:
- Scala
- Java
categories:
- Programming
- Functional Programming
- Software Engineering
- Agile
aliases:
- /blog/Programming/Scala/Java/Data/Agile/2016/12/24/a-new-strategy-for-scala

---

[Alvin Alexander](http://alvinalexander.com/) is a renowned software engineer and author. His *[Scala Cookbook](http://scalacookbook.com/)* was invaluable when I got started with
[Scala](/tags/scala), and that book and his prolific blog posts have remained essential reading even as I've gotten better at it.
One of Alvin's most recent posts, [How Scala killed the Strategy Pattern](http://alvinalexander.com/scala/how-scala-killed-oop-strategy-design-pattern),
is the latest iteration of an old criticism of the [Gang of Four (Go4) Design Patterns](http://stackoverflow.com/questions/1673841/examples-of-gof-design-patterns-in-javas-core-libraries)
by functional programming (FP) advocates--that you don't even need them if languages provide sufficient abstractions.
In other words, the Go4 design patterns are only necessary because object-oriented programming (OOP) languages like C++ (the language 
they use in the [book published in 1994](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612))
and Java demand them while FP obviates them entirely. Alvin's post reiterates this theme by suggesting Scala
"kills" the [Strategy Pattern](https://en.wikipedia.org/wiki/Strategy_pattern), which is one of my favorites because it
promotes [delegation over inheritance](https://sourcemaking.com/refactoring/replace-inheritance-with-delegation) and is
so obviously useful outside of the computer science department.

On this one, I really don't agree with Alvin. Here's why.

Don't get me wrong. I agree with a lot of what he says. His Scala example is pretty. It is clearly more concise than the Java equivalent
because of the absence of boilerplate, but Alvin's kind of cheating. His Java code uses pre-Java 8 semantics. In previous 
versions of Java you had to do one of the following just to define a function:

* Create a class that you had to instantiate just to call the function
* Create a class that applies the Go4's [Singleton](https://sourcemaking.com/design_patterns/singleton) design pattern, which is [controversial](http://stackoverflow.com/questions/137975/what-is-so-bad-about-singletons) 
* Create a class whole sole purpose is to provide a static method that does what you need

...each in its own dedicated file.

All of those options were a pain. With [functions being first-class citizens in Java 8](http://stackoverflow.com/questions/15221659/java-8-lambda-expression-and-first-class-values?answertab=votes#tab-top),
the boilerplate to define and use functions is minimized (though definitely not eliminated). Check out the 
[companion code](https://github.com/VidyaSource/scala-strategy/tree/master/src/com/vidyasource/strategy/java) so you can look at Alvin's example written with Java 8 to 
see the difference. Still need those dedicated files though.

There is a much more important reason why Scala doesn't really kill the Strategy Pattern. Alvin's Scala code has
a lot more of the classic Strategy going on than it appears because Scala's syntactic sugar hides it. Here
is Alvin's example de-sugared.

{{< gist neilchaudhuri 988cbe4b54a74532a4415ed3094cb96d >}}

The de-sugared code reminds us that in Scala all functions are still objects. In this case, the functions are all instances of
`Function2[Int, Int, Int]`, which has an `apply` method. This abstraction is in fact the Strategy; and `addStrategy`, `subtractStrategy`,
and `multiplyStrategy` are just instances of the abstraction.

So you have a "Context" class, `StrategyExample`, that maintains a reference to a
`Function2[Int, Int, Int]` object with an `apply` method, and that abstraction can be implemented by any instance that satisfies
the API contract--with the Context having no idea about which implementation it's getting since it's provided at runtime.

Even if that isn't *literally* the Strategy Pattern articulated in the Go4 book, isn't that really close and still precisely the *spirit* 
of the Strategy Pattern?

What FP advocates and OOP critics forget is that the Go4 never embraced the boilerplate; they simply acknowledged it and 
offered guidance on how to solve common problems with OO languages where functions aren't first-class citizens. That was a great 
thing. Our OO code, whether in Java, C#, or whatever, was better for it.

I would be remiss if I didn't mention the more theoretical, sometimes even personal, dimension to the criticism. Much of it--not from Alvin but
from many others--stems from a pedantic, purist elitism that believes FP to be the most intellectually
rigorous form of programming and resents its being supplanted decades ago by "inferior" OOP that remains preeminent to this day--even
as FP has enjoyed a renaissance with the rise of "[Big Data](/categories/big-data)" and [reactive programming](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754). 
It's true that the Go4 patterns derive from trial-and-error rather than [mathematical formalism](https://hseeberger.wordpress.com/2010/11/25/introduction-to-category-theory-in-scala/), 
which means potentially they can be [misapplied](http://softwareengineering.stackexchange.com/questions/48811/what-design-patterns-are-the-worst-or-most-narrowly-defined) 
or grow stale. Still, [professional software engineering](/blog/2016/04/02/the-art-of-software-engineering) 
happens outside the classroom, and the market chose OOP over FP. We needed the Go4 patterns, however imperfect,
to balance structure and flexibility in the countless applications that have been built over the last several decades--
with countless more to come. To dismiss them out-of-hand like a [hipster](http://www.urbandictionary.com/define.php?term=hipster) 
dismisses every song in the [Billboard Top 40](http://www.billboard.com/charts/pop-songs) is counterproductive.

The practical reality is that Scala has shown it doesn't have to be [one or the other](https://www.youtube.com/watch?v=wgpytjlW5wU). Its blend of FP and OOP defines its
surge in popularity and compelled a much needed evolution of Java. It's also unfair to hold the Go4 hostage to the OOP landscape from a time
when [Ace of Base had hit songs](https://www.youtube.com/watch?v=iqu132vTl5Y) and the
[Cleveland Browns were actually good](http://www.cleveland.com/browns/index.ssf/2015/01/story_on_the_1994_cleveland_br.html).
Even if the patterns could use some tweaks, they remain crucial for OOP developers who want to write clean code with
the minimal [technical debt](/tags/technical-debt) that is the hallmark
of strong [agile](/categories/agile) teams.

Alvin Alexander is a really accomplished thought leader in Scala and a lot of other areas. I value his work a great deal.
But on this one, I have to side with the continued relevance of the Go4. Understanding their OOP Design Patterns *as well as*
key FP tenets like [immutability](http://stackoverflow.com/questions/12207757/why-do-immutable-objects-enable-functional-programming), 
[pure functions](https://www.sitepoint.com/functional-programming-pure-functions/), 
[pattern matching](http://stackoverflow.com/questions/2502354/what-is-pattern-matching-in-functional-languages), 
and critical structures like [monads](http://stackoverflow.com/questions/44965/what-is-a-monad)
will make you a great software engineer. And no matter what anyone says, it is likely that [rumors of the demise of the
Go4 patterns will remain greatly exaggerated](http://www.thisdayinquotes.com/2010/06/reports-of-my-death-are-greatly.html).

Note: The astute reader will notice that I implement `execute` as a [curried](http://stackoverflow.com/questions/36314/what-is-currying)
function unlike Alvin. That isn't really relevant to my point about the Strategy Pattern in Scala; I just like it better.
