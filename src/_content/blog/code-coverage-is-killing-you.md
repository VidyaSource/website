---

author: "Neil Chaudhuri"
title: "Code Coverage Is Killing You"
description: "Code coverage is intuitive but dangerous. There are quality metrics that are so much better."
image: "/img/blog/michael-scott.jpg"
date: 2019-02-10
tags:
- Scrum
- Kanban
- Selenium
categories: 
- Testing
- Programming
- Architecture
- Software Engineering
- Agile
- Continuous Delivery
- Continuous Integration
---

If you are a software engineer or run software projects, [code coverage](https://stackoverflow.com/questions/195008/what-is-code-coverage-and-how-do-you-measure-it) 
is probably very important to you. It's intuitive. Of course more tests produce better software! It's easy to calculate. Tools, 
automation, and stunning charts to impress the people who pay for the occasional pizza are all readily available. 

The problem is code coverage is killing you.

Don't get me wrong. You deserve credit for your agile commitment to quality and your investment 
in continuous integration and continuous delivery. 
But why does just about everything out there say 
100% code coverage is [at best unrealistic and at worst dangerous](https://softwareengineering.stackexchange.com/questions/1380/how-much-code-coverage-is-enough)?
How can achieving a perfect score on a great metric be a bad thing? But OK. What's the optimal number then? There
are a lot of heuristics, but [no one really knows](https://stackoverflow.com/questions/90002/what-is-a-reasonable-code-coverage-for-unit-tests-and-why). 

All of this uncertainty over an apparent no-brainer should give you pause, but it is important to understand the main reasons 
why code coverage is so flawed.

### Code coverage assumes all your code is equally vulnerable 

Let's say your code includes a credit card validator. There 
is an infinite number of ways a string can fail credit card validation, but you only need a few tests to achieve 100%
code coverage for it. Meanwhile other code may have far fewer failure scenarios. Ideally, 
that credit card validator should have hundreds of tests associated with it while other code has far fewer. Code coverage 
treats them all the same and only credits you for a small fraction of the tests necessary for your most vulnerable code, so you probably 
won't write any more than you have to. I believe that's what the kids call perverse incentives.

### Code coverage assumes all your code is equally valuable

Let's say your application also offers payment via money order.
Almost no one will use that option; the vast majority of customers will pay by credit card. Code coverage doesn't know the difference, so 
it considers credit card tests and money order tests equally important. That's bad. A bug with credit card payments
will cost you orders of magnitude more profit than a bug with money orders, but code coverage will never account for that.

### Code coverage demands ceremony that may not be necessary

Let's not lose sight of the goal, which is to gain as much
confidence as possible that your code works. Certainly that can come from tests, but it does not have to. For example, if you are building
a component library in React that will be consumed by application developers, it could very well be [Storybook](https://storybook.js.org/)
is all you need. After all, a button in your component library will have no functionality on its own. Its functionality will
come from the `onClick` event handler passed as a prop by the library consumer. All you care about is that clicking
the button does something. It's a waste of time to write a test for something so trivial just to check a coverage box
when Storybook gives you that for basically free.

### Code coverage tells you how much but not how well

This could be the worst of all. You are investing a lot of budget and schedule
in building a test suite that should raise the quality of your software, lower costs, and improve customer satisfaction. But 
while code coverage tells you how much you tested, it doesn't tell you how *well* you tested. You can write really poor tests
(*e.g.* tests that don't offer any challenging scenarios, tests that are flaky or slow, *etc.*)
that yield 100% coverage. In the end, those tests might actually be *counterproductive* because the investment could have gone 
elsewhere and yielded some value. 

Frankly, none of these concerns are debatable. The only real argument for code coverage is that for all its flaws it is still
the best we can do. Obviously I cannot speak to your specific project, but my extensive experience suggests that your best case
scenario--if you have a team of talented, disciplined engineers who have faced no deadline pressures to get features out fast--is 
that your dedication to high code coverage has improved quality 
but not nearly enough given how much you've spent trying. Instead, what's most likely is all your spending has produced mostly useless 
tests that exist to check a box rather than to improve quality, and your code is only barely better than with no tests at all.

The good news is we can do a lot better for a lot cheaper.

## Percentage Metrics

Experience has shown me there are a lot better metrics than code coverage. Here is a good list of percentage metrics inspired by 
[Kostis Kapelonis](http://blog.codepipes.com/testing/software-testing-antipatterns.html#anti-pattern-6---paying-excessive-attention-to-test-coverage).

***Percentage of Developers Writing Tests (Target: 100%)***. Everyone who writes code should write tests. 

***Percentage of Bugs Reproduced By Tests (Target: 100%)***. Every bug reported by testers or users should have at least one test associated with it.

***Percentage of Tests That Change (Target: 0%)***. Too often tests are coupled to implementation, so new requirements from the customer
lead to laborious updates to tests. That should stop. Shifting away from conventional, scenario-based testing to 
[property-based testing](/blog/2018/09/18/the-business-case-for-functional-programming/) where possible can help.

***Percentage of Consistent Tests (Target: 100%)***. Have you ever seen the same tests pass some days and fail others? That's not consistent, and
engineers typically respond by disabling or commenting out offending tests. Instead, rewrite these tests to be deterministic unit tests, or 
delete them entirely.


## Trending Metrics

There are also trends to watch.

***Low Code Quality in Tests***. Tests are code. Your test code should be a first-class citizen subject to the same quality checks as production code--
  no duplication, reusable functions, design patterns where useful, *etc.*

***Time to Write Tests***. Maybe technical debt in your tests is too high. Maybe the design 
is poor with too many dependencies to mock. Maybe it's hard to generate test data or scenarios. Taking too long to write tests
will manifest in diminishing velocity and more bugs. Better design and again 
[property-based testing](/blog/2018/09/18/the-business-case-for-functional-programming/) can help.  

***Time to Run Tests***. One of the core tenets of agile development is rapid feedback, which is impossible 
if your tests take forever. This might be controversial, but I would recommend favoring unit tests and functional tests 
over integration tests. Unit tests are fast (when written properly). Functional tests give you the most accurate view
on quality, and modern tools like [Cypress](https://www.cypress.io/) can overcome the slowness and flakiness of 
older tools like Selenium. You can also get a boost from your 
[tooling](https://engineering.linkedin.com/blog/2018/07/how-we-improved-build-time-by-400-percent).

Keep these trend lines as low and as level as possible.

The best part about all of these metrics is that they are easily derived from your engineering tools like JIRA and Git. Nothing 
special is required of you. Of course
you can always take the initiative to do some clever custom things like identifying particularly vulnerable and/or valuable parts
of the code base and ensuring there is some minimum but high number of tests. That would be coverage-ish but more targeted and robust.

In the end you should be able to look at every test in your code base and recognize how it gives you confidence that your code will work
in production and that no one will be working weekends. The siren song of code coverage is intoxicating, but you can do
so much better.





