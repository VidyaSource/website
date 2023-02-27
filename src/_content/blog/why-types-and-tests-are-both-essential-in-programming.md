---

author: "Neil Chaudhuri (He/Him)"
title: "Why Types and Tests are Both Essential in Programming"
description: "The arguments for types vs. tests is silly. You need both because they solve two different problems."
image: "/img/blog/programming.jpg"
date: 2023-02-26
categories:
- Programming
- Software Engineering
- TypeScript
- Python
- JavaScript
- Java
- Agile

---

90% of Tech Twitter is the same arguments over and over again:

* Are engineers being laid off simply not good enough? (No. Layoffs are all but random and serve, along with stock buybacks using all the cash on hand tech companies have, to impress The Street and inflate stock price.)

* Does preference for remote work mean you're lazy? (No. What matters is if your customers are happy and your business is profitable, and your business should
enable you to contribute in the easiest way possible for you and your family.)

* Is HTML a programming language? (Who cares? Stop gatekeeping.)

* Is Tailwind CSS a productivity boost or the spawn of Satan? (This is stupid. Mind your business. Use what you like and let others do the same.)

* Should you have more unit tests or integration tests? (Shoot me.)

* Must you love programming to excel? (No. Don't believe me? Then believe [Sarah Drasner](https://leaddev.com/culture-engagement-motivation/why-flow-matters-more-passion), who is smarter than both of us.)

Another common debate, and one that is more interesting, is whether you should invest in types or tests. It raises some key 
questions about what makes each valuable, but unfortunately the debate gets lost in the haze of programming language preferences, developer experiences,
and other tangential concerns. Still, the answer matters because it's central to improving our process so we 
can build as efficiently and with the highest quality as possible.

It turns out you need types *and* tests because each solves completely different problems that are both important to you as a developer.

## Types automate API integrity at development time

The key components of an API call—whether it's a Java method, a REST endpoint, or a Python function—are the input parameters and the output. There are infinite ways a consumer can interact with your API, but we don't want that.

Consider an API call that takes first name, last name, and an amount of money parameters with no types:

~~~typescript 
(firstName, lastName, amount) => {...}
~~~

Each parameter has literally infinite possible values, so our API forces consumers to be very careful. For example, it's very easy to mix up the `firstName` and `lastName` strings.

>>> True story: There is a political fundraising apparatus that has switched my first and last names, so every email starts off "Chaudhuri, we need your help!" when they really mean "Neil, we need your help!" It's like my high school coach is yelling at me to donate.

Even worse, they could mix up one of the string values with the number in the amount. In fact, it's very easy to put garbage of any type into each parameter, and relatively speaking almost all of it is bad. Of course
you can paper over the problem in a number of ways:

* Intuitive parameter names like I did above
* Logical order for parameters
* Comments or other documentation
* Default values or optionality for parameters (if your programming language has those features)

These things are good as a general matter, but they don't solve the problem. 

We can improve the situation considerably by adding types:

~~~typescript 
(firstName: string, lastName: string, amount: number) => {...}
~~~
Now we have ensured `firstName` and `lastName` can only be strings and `amount` can only be a number. But I know. We can still switch
`firstName` and `lastName`. We can put a negative number in for amount. Each parameter *still* has literally infinite possible values, but we 
have shrunk the universe of valid inputs immeasurably. [Don't let perfect be the enemy of good.](https://en.wikipedia.org/wiki/Perfect_is_the_enemy_of_good) This is progress!

We can tighten up our types further to do even better:

~~~typescript 
(firstName: FirstName, lastName: LastName, amount: Currency) => {...}
~~~

How you do this depends on the features of your programming language. Maybe it has a built-in type already for currency. Or you can define a type with 
a custom implementation or as simply as a type alias. Regardless of how you get there, look how far we've come.
No confusing name with amount. No mixing up names. No improper values for the amount. The tigher our type constraints, the more we make life easier 
for consumers by narrowing the field of possible values for each parameter. Yes, there are still infinite possible permutations of parameters,
but at least it's not "infinite infinite."

Types constrain our API to limit the universe of possible inputs, and best of all, they work at development time. If API consumers make a mistake by
supplying a value outside the type boundary, they are going to hear about it: from the IDE, type checker, compiler, code generator. We all know the faster you find something wrong the easier 
it is to fix, and nothing works faster than types to all but guarantee the integrity of our APIs. This is the beauty of automating API integrity
rather than wasting time as human compilers and static analyzers who inevitably get it wrong. You also get a form of documentation that helps you understand
the API just by looking at it.

As for outputs, constraints on return types are also valuable because as we compose functions, the return value from one call becomes the input to another.
Programs are essentially data pipelines of composed functions, so types guarantee the integrity of the entire call chain, which is pretty amazing.
If you maximize the power of types of the values going in and coming out of your API calls, and you then compose them so they fit together like Legos, you have
made enormous strides in maximizing the quality of your code without writing a single test.

But that isn't quite enough.

## Tests *verify* your API behavior at runtime

We've used types to limit the universe of values our API consumers can apply, but how do we know we have done the 
right thing with them to satisfy our API contract and return what consumers asked for?

Or more simply, does our code work? This is where tests come in.

As entire books have been written about testing and you likely already know much about it, I won't spend a lot of time on it here. What matters for 
this discussion is that while types define APIs in development, tests act at runtime to verify your API behavior with the parameters whose types have 
already been guaranteed. Types and tests are *complementary*. You need both.

## So why the controversy?

While it's been around for as long as static and dynamically typed languages have coexisted, in my experience the Types vs. Tests debate blew up fairly recently in the JavaScript community, 
where more experienced developers in particular were already comfortable acting as human compilers and static analyzers and viewed the emergence of TypeScript with skepticism. After all, types 
add more verbosity (to varying degrees given your programming language's talent for type inference), and developers hate extra keystrokes. 
Add to that more work like `tsconfig.json` for TypeScript or adding hints or the `typing` library in Python and you have a recipe for tension.

But at the core of the debate is one key question: "Tests can do everything types can do, so why bother with all the ceremony?" 

My view: Nah not really.

Sure you can fake type safety with tests by enforcing invariants like ensuring `amount`, a `number` in the second example above, is nonnegative. That isn't *actual*
type safety though. It's just moving type enforcement from the interface to the implementation, which has disastrous consequences. Like all tests, "type tests" depend on your discipline. 
You may not write any at all because of deadlines, or you may write bad ones that don't add value. 

>>> Some might say types demand discipline too. If your types are loose, you don't reap the benefits. That depends on how strongly typed the language is and how effective you are at maximizing the power of its type system. But intentionally widening types is more sabotage than lack of discipline.

You've also shifted type guarantees right, from development time to runtime, and delayed feedback as a result. This makes you slower.

You know what else makes you slower? You've chosen a manual process over automation. You've sacrificed tooling support and implicit documentation for the chance to waste time 
doing extra work types do more reliably and cheaply. That's particularly weird since one of the primary objections to types is extra work.

In the end, substituting types with tests in your code is like substituting [Chris Hemsworth with his brother Liam](https://www.eonline.com/news/1341657/liam-hemsworth-trolls-perfect-brother-chris-hemsworth-in-marvelous-birthday-tribute)
in the cast of your movie. You could do worse but look at how much you've lost in the process. Use types to automate API integrity and tests to verify API behavior *together* to build the most reliable and maintainable code in the shortest amount of time.





