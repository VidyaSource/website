---

author: "Neil Chaudhuri"
title: "Welcoming HealthCare.gov"
description: "We are proud to have helped HealthCare.gov make affordable insurance available to more Americans."
banner: "img/banners/health-care-gov.jpg"
date: 2019-03-02
tags:
- ScalaCheck
- ScalaTest
- Play Framework
- Spring
categories: 
- Partners
- Programming
- Software Engineering
- Agile
- Scala
- Java
- Testing
- Architecture
- Functional programming
- Microservices
- REST

---

Vidya is proud to have teamed with Accenture Federal Services to transition [HealthCare.gov](https://www.healthcare.gov/) from
a conventional [Java](/categories/java) monolith built with [Spring](/categories/spring) into 
[Scala](/categories/scala) [microservices](/categories/microservices) built with [Play Framework](/tags/play-framework). One of several factors
that motivate software engineers is mission, and there are few missions more fulfilling than helping people access
health insurance and ultimately health care as efficiently as possible.

As American readers know, HealthCare.gov faces a lot of exogenous pressure as a proxy in a raging American political
and economic maelstrom. I did my best to ease that pressure on engineers by helping them deliver as quickly as possible.
I developed reusable primitives that utilize Scala's type system to summon the compiler to minimize
mistakes. For example, I wrote [monads](https://slideslive.com/38908886/functional-programming-with-effects) 
(without calling them monads) to ease composing data from multiple microservices asynchronously. I also introduced 
[ScalaCheck](/tags/scalacheck) as a complement to [ScalaTest](/tags/scalatest) because I believe very strongly 
in [property-based testing](http://blog.jessitron.com/2013/04/property-based-testing-what-is-it.html). That one didn't
really catch on though. You can't win 'em all.

While I had to write code that was functional, performant, and maintainable 
as always, there was more. As the only one on the project who knew Scala and Play before joining, I also had to do my best
to write code that was exemplary as part of a broader mandate to mentor others on the team. Contrary to popular belief, 
transitioning from Java to Scala isn't so easy. 

Of course there are language gotchas like a different object model anchored by `Any`,
`AnyRef`, and `Nothing` (which is [the subclass of everything](https://stackoverflow.com/questions/45080408/nothing-is-a-subclass-of-every-other-class-how-to-understand-it)
...weird, I know), but the biggest challenge was impressing upon the team virtues of functional programming like 
[immutability](https://www.quora.com/Why-is-immutability-important-in-functional-programming) and 
[composability](https://stackoverflow.com/questions/2887013/what-does-composability-mean-in-context-of-functional-programming?answertab=active#tab-top). 
Engineers often grew frustrated when functional solutions escaped them
while imperative, more Java-like solutions were obvious or when `Future` proved to be a more
[confusing](https://stackoverflow.com/questions/27454798/is-future-in-scala-a-monad?answertab=active#tab-top) 
parallelism primitive than it should be. Still, almost everyone was eager to learn, and there is nothing more rewarding than seeing 
the light bulb come on when you help things click for someone.

While this project had its challenges given the the high stakes along with the inertia common among large government projects managed by
large consulting firms, I grew a great deal as an engineer and a teammate. Best of all, it is 
extremely rewarding to know that our hard work and long hours will save a lot of lives.
