---

author: "Neil Chaudhuri"
title: "You Know What Really Grinds My Gears?"
description: "When it comes to software projects and technology, I have a list of pet peeves. Here are a few."
banner: "img/banners/grindsgears.jpg"
date: 2014-02-08
tags:
- Scrum
- Java
- JavaScript
- HTML
- CSS
- ORM
- JDBC
- MapReduce
- Cryptography
- Hibernate
- JUnit
- Django
- Rails
categories: 
- Programming
- Architecture
- Testing
- Software Engineering
- Agile
aliases:
- /blog/Programming/Java/JavaScript/Web/HTML/CSS/Projects/Scrum/Architecture/2014/02/08/you-know-what-really-grinds-my-gears
---

There is an episode of *[Family Guy](http://www.fox.com/family-guy/)* where Peter Griffin gets a segment on the [Quahog 5 News](http://familyguy.wikia.com/wiki/Quahog_5_News) called
[“What Really Grinds My Gears](http://video.adultswim.com/family-guy/peters-grinding-gears.html)." During the segment, he opines on
random things that bother him in his own hilarious and offensive way.

When it comes to software projects and technology, I have my own list of pet peeves that continues to grow. While not
quite as hilarious though potentially just as offensive to some, here are a few.




<br>
### JAVA and SCRUM

Stop yelling at me! [Java](/tags/java) is the most popular programming language in the world. [Scrum](/tags/scrum)
is the most popular agile framework
in the world. So why do so many people, including software engineers who should know better, still fail to understand that neither is an acronym? If I ran
[Stack Overflow](http://stackoverflow.com/), I would impose a lifetime ban on anyone who uses all caps for Java and Scrum.

<br>
### J2EE

Speaking of Java, enough already with calling the Java Platform, Enterprise Edition “J2EE.” J2EE hasn’t been a thing
[since May 2006](http://en.wikipedia.org/wiki/Java_Platform,_Enterprise_Edition)! That’s the same year [the first
Blu-Ray movies were sold](http://en.wikipedia.org/wiki/Blu-ray_Disc#Launch_and_sales_developments). Some people even
[still liked Barry Bonds](http://sports.espn.go.com/mlb/news/story?id=2452099) as he broke [Babe Ruth](http://www.baberuth.com/)’s home run record.
There is no excuse for anyone--especially software engineers--to use *J2EE* anymore.

Of course there are still Java Enterprise API’s, but the platform has been officially known as
[Java EE](http://www.oracle.com/technetwork/java/javaee/overview/index.html) for eight years. If you must, you can even
use *JEE*. Either way, just stop with J2EE. If you can come to terms with
[P. Diddy](http://en.wikipedia.org/wiki/Sean_Combs#2001.E2.80.932004:_.22P._Diddy.22_and_The_Saga_Continues) and
[Snoop Lion](http://en.wikipedia.org/wiki/Snoop_Dogg#2012.E2.80.93present:_Snoop_Lion.2C_and_Reincarnated), you can come
to terms with Java EE.

<br>
### ”A code”

*[Morse](http://en.wikipedia.org/wiki/Morse_code)* is a code. *[Da Vinci](http://www.imdb.com/title/tt0382625/)* is a
code. Thanks to *[How I Met Your Mother](http://www.imdb.com/title/tt0460649/)*, even
*[Bro](http://how-i-met-your-mother.wikia.com/wiki/The_Bro_Code)* is a code.

But software engineers just write *code.* That’s it. So many of them on Stack Overflow and elsewhere begin their questions
with “I wrote *a code* and…”  This offense would also earn a lifetime ban from me. If you really want to write “a code,”
get into [cryptography](http://en.wikipedia.org/wiki/Cryptography). Programming is just code.

<br>
### Referring to HTML and CSS “code”

Speaking of code…

As described in the Vidya tutorial [Web Design 101](/tutorial/Web/HTML/CSS/JavaScript/2013/10/26/web-design-101), HTML
and CSS are two pillars of the web. They are powerful technologies that have changed our daily lives. Neither,
particularly CSS, is easy to master.

But HTML and CSS are *not* code.

*Code* refers to lines written in a programming language--like the third pillar of the web, [JavaScript](/tags/javascript)--that do stuff.
HTML, [as the M conveys](http://en.wikipedia.org/wiki/HTML), is *markup* that provides structure to a web page; CSS is a
list of rules with unique syntax that provide *style*. But neither actually *does* anything. So refer to *HTML markup* and
*CSS styles*. Calling either *code* is simply an insult to real code everywhere.

<br>
### ”I believe in the right tool for the job”
### “I believe we should keep things simple”

If a politician says, “I believe in a robust economy and a stout national defense,” he or she has provided you with an empty,
meaningless platitude no one can possibly argue with, which is probably the point. But as you know, it’s the details that matter.

”I believe in the right tool for the job” and “I believe we should keep things simple” are the equivalent in software projects.

No one actively seeks out the *wrong* tool for the job. No one tries to use [JUnit](http://junit.org/) to run a
[MapReduce job](http://hadoop.apache.org/docs/stable1/mapred_tutorial.html). Still, people can reasonably disagree over
the merits of particular technologies for solving particular problems. If you are building a non-trivial web application,
should you use [Rails](http://rubyonrails.org/), [Django](https://www.djangoproject.com/), or [Grails](http://grails.org/)?
All three are preeminent tools, but which is the “right tool for the job”? How do you know?

Similarly, no one wants to add complexity to a project, but people can reasonably disagree over what constitutes complexity.
On a Java project talking to a relational database, is it simpler to access the database with pure
[JDBC](http://www.oracle.com/technetwork/java/javase/jdbc/index.html) but manage transactions and write all the tedious
[object-relational mapping (ORM)](http://hibernate.org/orm/what-is-an-orm/) yourself? Or to add
[Hibernate](http://hibernate.org/orm/) as a dependency to your build file, learn it, and configure it but let it handle
the responsibility for transaction management and ORM for you?

Not so obvious, is it? This is why anyone who uses these platitudes on a software project must be compelled to explain
a *specific* course of action and the rationale for it.

<br>
### Managers who want to see the metrics for unit tests

As I wrote in [my first column for *Government Computing News*](http://gcn.com/Articles/2013/12/10/software-testing.aspx?Page=1),
unit tests are *by* developers *for* developers. Unit tests are essential for helping developers confirm their code works
as expected. Unit tests also help developers refine the design of their code. There is an inflection point though where
unit tests start to bring diminishing returns.

A common theme of the TV classic *[The Wire](http://www.imdb.com/title/tt0306414/)* is that senior management in various
[Baltimore](http://www.baltimorecity.gov/) institutions demand their people achieve useless performance metrics that ultimately prove counterproductive to their missions. Just
like the police officers, teachers, and others in *The Wire*, software engineers are motivated to “[juke the stats](http://www.youtube.com/watch?v=_ogxZxu6cjM)"
to appease managers who demand endless unit testing because of cool things they heard at conferences.
So developers write prolific tests that don’t actually test anything but produce a high number of
passing results that make these micromanagers happy. The insidious result is that the applications decay more and more while
they appear healthier and healthier. Everyone, including the managers, will have
[lots of ‘splainin to do](http://www.urbandictionary.com/define.php?term=%27splainin%27%20to%20do) at release time.

Smarter managers will instead trust their engineers to do what they know best and look instead at
*[acceptance](http://www.extremeprogramming.org/rules/functionaltests.html)* test results and
[code coverage](http://stackoverflow.com/questions/195008/what-is-code-coverage-and-how-do-you-measure-it) reports.
Just stay away from anything related to unit tests.

<br>
So there you have it. All these things really grind my gears. And there are more...
