---

author: "Neil Chaudhuri"
title: "ScrumMaster++"
description: "A ScrumMaster with technical skills can use them without compromising the Scrum process."
image: "/img/blog/settings.jpeg"
date: 2017-02-18
tags:
- Scrum
- Java
- Scala
- Ruby
- Go
- DevOps
- Technical Debt
- Gradle
- SBT
- ScalaCheck
- Docker
- Vagrant
- Ansible
- Kubernetes
- React
- Angular
categories: 
- Agile
- Project Management
- Software Engineering
- Programming
- Functional Programming
- Testing
- Continuous Delivery
aliases:
- /blog/Projects/Agile/Scrum/Programming/Java/Scala/Ruby/Testing/2017/02/18/scrummaster-plus-plus
- /blog/scrummaster-plus-plus

---

Anyone with a basic knowledge of [Scrum](/tags/scrum), and certainly everyone who has taken 
[Agile Software Project Management With Scrum](/course/agile-software-project-management-with-scrum),
knows the role of the ScrumMaster--to be a [servant leader](http://www.inc.com/peter-economy/7-secrets-of-servant-leadership-that-will-lead-you-to-success.html),
to act as guardian of the Scrum process, to remove obstacles for the
delivery team, to negotiate any tension between the [Product Owner](https://www.mountaingoatsoftware.com/agile/scrum/roles/product-owner) 
and the delivery team, to encourage the team to [self-organize](https://hbr.org/2004/09/get-self-organized) and be 
[cross-functional](http://www.quickbase.com/blog/5-great-reasons-to-have-cross-functional-teams), and
[so on](http://www.scrumguides.org/scrum-guide.html#team-sm). These are so well understood they're almost clichés. 
The difficulty is learning how these abstract ideas apply to day-to-day software engineering.

For example, a common question is "Does Scrum permit a ScrumMaster with a technical background to help deliver features for the team he 
or she leads?" While this is a common practice and some teams have made it work, the general consensus answer is "No" or at least "Not ideally."
The primary reason is that a ScrumMaster can't be an honest broker when resolving disagreements between the Product Owner and 
delivery team if he or she is writing code as a member of that delivery team. No one likes a conflict of interest, right?

However, there are other ways that a ScrumMaster with technical skills can apply them to provide significant value to the project and 
dramatically increase [velocity](https://www.mountaingoatsoftware.com/blog/know-exactly-what-velocity-means-to-your-scrum-team)
without compromising credibility or the Scrum process. 



## Pay Down Technical Debt

[Technical debt](https://www.agilealliance.org/introduction-to-the-technical-debt-concept/) might be the biggest obstacle to
productivity. Every development team remembers when either a lack of time or experience produced 
suboptimal design. In my own experience, I've known exactly where the biggest debt is, and it nags at me that I don't have the time 
to tackle it. A technical ScrumMaster can [branch off trunk](http://guides.beanstalkapp.com/version-control/intro-to-version-control.html)
and begin to address technical debt. For example, address all those 
[TODOs](http://stackoverflow.com/questions/335378/how-do-you-flag-code-so-that-you-can-come-back-later-and-work-on-it) 
in the code. Turn all those repeated code blocks into functions to stay [DRY](https://dzone.com/articles/next-level-dont-repeat). 
Extract hardcoded values into configuration. Address all those compiler warnings and significant 
[static analysis](https://www.owasp.org/index.php/Static_Code_Analysis) errors.

Particularly savvy ScrumMasters can do even more. If the code base uses an object-oriented language, look for opportunities
for abstractions that can be expressed through [design patterns](http://www.blackwasp.co.uk/gofpatterns.aspx) or cleaner code 
utilizing [concepts like encapsulation and the SOLID principles](http://www.codemag.com/article/1001061). If the language 
is functional, make sure functions are as [pure](https://www.sitepoint.com/functional-programming-pure-functions/) as possible
by limiting side effects. Utilize structures like [monads](http://stackoverflow.com/questions/44965/what-is-a-monad) and techniques like 
[currying](http://stackoverflow.com/questions/36314/what-is-currying) and [type classing](http://danielwestheide.com/blog/2013/02/06/the-neophytes-guide-to-scala-part-12-type-classes.html)
to maximize composability and reusability. 

In the end, your team will thank you if you've promoted loose coupling by paying enough technical debt that the next
big change doesn't force everyone to work the weekend.

## Speed Things Up

In their seminal book *Lean Software Development*, authors Mary and Tom Poppendieck describe seven principles--the first of 
which is [Eliminate Waste](http://www.allaboutagile.com/lean-principles-1-eliminate-waste/). There are many forms 
of waste, but none is more frustrating for developers than waiting. Any good ScrumMaster will work to eliminate bureaucratic waste
and will make sure the development team gets the answers it needs quickly, but a technically skilled ScrumMaster can do even more.

In particular, speed up the build. There are a lot of ways to do this. First, maximize the value from your build tool. For example,
[Gradle](https://gradle.org/) features a [Daemon](https://docs.gradle.org/current/userguide/gradle_daemon.html#sec:why_the_daemon) 
(enabled by default in version 3.x) that offers tremendous performance improvements. Gradle also lets you run tests 
and, as an incubating feature, 
even [subprojects](https://docs.gradle.org/current/userguide/multi_project_builds.html#sec:parallel_execution) in parallel. 
Meanwhile, [SBT](http://www.scala-sbt.org/index.html) was built from the ground up 
to [run tasks in parallel](http://www.scala-sbt.org/0.13/docs/Parallel-Execution.html).

Of course, these enhancements can only take you so far if the tasks executed by the build tool are inherently slow and/or unparallelizable. The biggest culprit
is typically the test bed. Speed up the tests by applying the [xUnit Test Patterns](http://xunitpatterns.com/Slow%20Tests.html) 
defined by [Gerard Meszaros](https://www.linkedin.com/in/gerardmeszaros/). Make sure unit tests really are unit tests where every dependency is "[doubled](http://xunitpatterns.com/Test%20Double.html)" 
(*i.e* mocked, stubbed, dummied, or faked). Also make sure that all tests, especially the integration tests where setup is expensive,
share [test fixtures](https://github.com/junit-team/junit4/wiki/test-fixtures) by using the test framework to group tests 
into suites and/or using the facilities of the language--like with superclasses in [Ruby](/tags/ruby) or 
[Java](/tags/java) or [traits](http://alvinalexander.com/scala/scala-trait-examples) or the 
[Loan Pattern](http://stackoverflow.com/questions/20762240/loaner-pattern-in-scala) in Scala.

Then separate unit tests from integration tests so that only the former run with each commit 
while the latter run less frequently. Remember that only a representative subset of the tests--rather than 
*all* of them--needs to be run with each commit as long as *all of them run regularly and often* in 
[continuous integration](https://www.martinfowler.com/articles/continuousIntegration.html) (CI). Every testing framework
from [RSpec](http://stackoverflow.com/questions/10029250/organizing-rspec-2-tests-into-unit-and-integration-categories-in-rails) 
to [JUnit](https://github.com/junit-team/junit4/wiki/categories) to 
[ScalaTest](http://www.scalatest.org/user_guide/tagging_your_tests) to [Go's testing package](https://golang.org/pkg/testing/) 
provides ways to organize and categorize your tests. This adds a lot of value and fits perfectly in the skill set
of a technically savvy ScrumMaster.
 
You can also speed up the build by removing tasks like documentation generation and static analysis from 
developer and per-commit builds. Static analysis should only run daily in CI; documentation weekly.

Beyond the build, look for ways to automate any manual tasks that are part of the development team's workflow. Consult 
with the software engineers to identify where these opportunities for automation may reside.

## Improve the Process

A technically skilled ScrumMaster can also improve the software engineering process. For example, you can use 
[Angular](/tags/angular) or [React](/tags/react) to make [REST](/tags/rest) calls to the APIs for your 
project management, source control, CI, and systems monitoring tools to produce a dashboard that
presents all their data individually *and* mashed up to help identify the root causes of events. After all, a time series 
on this dashboard could show that a surge in bugs coincides with the absence of the Product Owner
or a spike in technical debt when new engineers joined the team. That's valuable information.

New development tools can also improve the process. A savvy ScrumMaster on a Scala project could introduce 
[ScalaCheck](https://www.scalacheck.org/) to improve the robustness of the tests and to enable
developers to write more tests faster. 

Developers hate writing documentation, and as a result documentation is almost never current. That same ScrumMaster could also 
improve documentation by introducing [tut](https://github.com/tpolecat/tut) so the Scala developers can write documentation 
that is compiled--thus always current--and run as part of CI. The fact it's code makes writing tut 
documentation almost fun. Similarly [Swagger](http://swagger.io/), a tool that generates REST API documentation, runs off the existing REST endpoints 
in the code so that the documentation stays current. Introducing automation like tut and Swagger--along with manually editing the source code 
to keep the method-level documentation in, for example, [Javadoc](http://www.oracle.com/technetwork/articles/java/index-137868.html),
[RDoc](https://rdoc.github.io/rdoc/), or
[Scaladoc](http://docs.scala-lang.org/style/scaladoc.html) current--will make developers much happier and more productive;
and the documentation much better.

Another area where a technical ScrumMaster can really help the delivery team is with [IDE](http://www.webopedia.com/TERM/I/integrated_development_environment.html) integration. Most software
engineers don't enjoy context switching away from their IDEs
to other tools, especially to perform tasks that they--right or wrong--don't enjoy or consider meaningless to their work like updating the project
management tool with their hours or updating the status of an issue in the bug tracker. I think any ScrumMaster should shoulder as 
much of that administrative burden as possible, but a ScrumMaster with development experience can 
do even more to fill that gap by leveraging integrations with leading software engineering tools most IDEs offer 
out of the box. If you enable developers to view the project management tool, source control, the CI dashboard, the bug tracker, the continuous monitoring dashboard,
and other tools without having to context switch away from their IDEs, you will ease their administrative burden and maintain
the productivity that [context switching always compromises](https://www.quora.com/Elon-Musk-What-does-My-context-switching-penalty-is-high-and-my-process-isolation-is-not-what-it-used-to-be-mean).

One last really important area where a technically skilled ScrumMaster can dramatically improve the process is in 
[DevOps](https://continuousdelivery.com/). It demands a lot of work and an organizational commitment to build a mature
DevOps practice, but you can still take incremental steps to lead your team there. Augment your CI pipeline with
[infrastructure as code](https://www.thoughtworks.com/insights/blog/infrastructure-code-reason-smile) to create a 
continuous delivery (CD) pipeline. Learn how tools like [Vagrant](https://www.vagrantup.com/), [Ansible](https://www.ansible.com/), 
[Docker](https://www.docker.com/), and [Kubernetes](https://kubernetes.io/) can dramatically increase your velocity. It
will likely take more than the efforts of one ambitious ScrumMaster to build a robust CD pipeline for the team, but
you will be surprised at how much more productive everyone will be with just a little hard work applying your skills 
to DevOps. You will also likely impress the Product Owner, who will be happy to devote sprint [capacity](http://softwareengineering.stackexchange.com/questions/264426/scrum-capacity-vs-velocity-when-planning-a-sprint) 
towards continuous delivery in the future.


This is a long post, but these are just a few of the ways a technical ScrumMaster can add significant value to the team, the product, and the process.
Of course discipline is critical to make sure that changes to the code don't break the tests and that they seamlessly merge with the 
new features built by the developers on the more conventional Scrum path, but never doubt that a ScrumMaster can 
apply technicals skills in a manner entirely consistent with the Scrum process.

 
 


 

