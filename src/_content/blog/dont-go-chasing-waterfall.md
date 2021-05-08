---

author: "Neil Chaudhuri"
title: "Don't Go Chasing Waterfall"
description: "Michael Daconta happily blames agile software development for the problems on the health care website. He's wrong. And yes, the title is a TLC reference."
image: "/img/waterfall.jpg"
aliases: 
 - /blog/Projects/Agile/Scrum/Architecture/2013/11/11/dont-go-chasing-waterfall
date: 2013-11-11
tags: 
- Scrum
- Jenkins
categories: 
- Agile
- Government
- Project Management
- Software Engineering
- Testing
- Continuous Integration
---

As someone who spends a lot of time thinking about technology and software project management (and the possibility of a
[Ghostbusters sequel](http://www.huffingtonpost.com/2013/11/07/ghostbusters-3-emma-stone-jonah-hill_n_4232686.html) but
that’s beside the point), I have been really frustrated by the poor quality of reporting by the media on the failures of
[HealthCare.gov](https://www.healthcare.gov/). The flawed coverage has shifted from the enormous functionality and
scalability problems to the blame game--contractors, government officials, the federal contracting process,
[waterfall software development](http://www.washingtonpost.com/blogs/wonkblog/wp/2013/10/21/the-way-government-does-tech-is-outdated-and-risky/),
and now apparently, agile software development as well.

I contributed to a [GAO report](http://www.gao.gov/products/GAO-12-681) on applying agile methods in the federal
government. Check it out if for no other reason than to double its readership. And someone is going to try to blame
agile methods for this mess? Oh. [It’s on now](http://www.youtube.com/watch?v=uvqJ1mTkEuY).

[Michael Daconta](http://www.linkedin.com/profile/view?id=713784) recently published an
[article](http://gcn.com/blogs/reality-check/2013/11/healthcare-agile.aspx) on GCN, the leading online publication for
American public sector IT. Despite patronizing praise for some agile practices, it’s pretty clear the accomplished Mr. Daconta
is the epitome of the traditional waterfall executive. More than that, his hostility to agile software development is a
preexisting condition (See what I did there?). He is eager to embrace the failure of the allegedly agile HealthCare.gov
contractors who developed the front end and the “data services hub” as vindication. In his zeal
to proclaim “I told you so” to what he perceives to be haters in the media, Daconta’s piece ranges from simplistic to
inaccurate.

Let’s explore Mr. Daconta’s reasoning in detail.

> I have seen some of the developer documentation, and it clearly discusses sprints, user stories and incremental testing — all of which are hallmarks of an agile process....The reality is that the developers did use agile, and the project failed miserably.


Maybe the developers actually had a to-do list comprised of what they called “user stories” that were addressed during
"sprints," and maybe some kind of testing happened. Calling this agile is like calling me a [CrossFit](http://www.crossfit.com/)
enthusiast because I did some pushups and [burpees](http://www.outsideonline.com/fitness/outside-fitness-center/Why-You-Need-to-Be-Doing-Burpees.html) yesterday.

Let’s assume these teams were attempting Scrum since sprints and user stories are both Scrum-specific
rather than generically agile. It is true Scrum has a to-do list called a backlog, features characterized as
[user stories](http://www.mountaingoatsoftware.com/agile/user-stories) delivered in sprints, and
“incremental testing.” A real Scrum effort by the HealthCare.gov teams would have these characteristics:

 - The consistent and immediate availability of a [Product Owner](http://www.mountaingoatsoftware.com/agile/scrum/product-owner)--
 a single person or more likely in this case a team of subject-matter experts in the government and private health insurance
 companies--available to answer domain-specific questions about the features to be delivered
 
 - Not just the mere existence of a backlog but a backlog comprised of
 [appropriately sized](http://www.mountaingoatsoftware.com/blog/how-can-we-get-the-best-estimates-of-story-size) user
 stories prioritized by the Product Owner so the most important features get done first
  
 - A Sprint Planning Meeting at the beginning of each sprint where the team commits to the  features they can deliver in
 the sprint and breaks them down into tasks estimated in hours

 - Daily standups where everyone on the team takes 15 minutes to catch up on status and, more importantly, lets everyone know what's
  getting in the way of progress
  
 - A suite of fully automatable unit and integration tests for developers to feel confident their code does what they
 think it should do
  
 - A suite of fully automatable *acceptance* tests created by developers and testers with the Product Owner to verify the
 application works--correctly, securely, and at scale
  
 - A [continuous integration](/categories/continuous-integration) infrastructure using [Jenkins](http://jenkins-ci.org/)
 or similar to build the application and run all these automated tests multiple times a day--including running all the
 unit tests anytime someone checks anything into [version control](http://git-scm.com/video/what-is-version-control)
  
 - Information radiators like [burndown charts](http://www.scrumalliance.org/community/articles/2013/august/burn-down-chart-%E2%80%93-an-effective-planning-and-tracki)
 and [velocity](http://www.scrumalliance.org/community/articles/2007/march/glossary-of-scrum-terms#1110) charts posted on the walls to enable
 everyone to assess project status at a glance and motivate course corrections as needed

 - A meeting held a few times per week among the different teams called a [Scrum of Scrums](http://www.scrumalliance.org/community/articles/2007/may/advice-on-conducting-the-scrum-of-scrums-meeting)
 so they can take a half hour to coordinate interface details among themselves

 - A demo at the end of the sprint--best given by the Product Owner--of the software completed during the sprint to
 anyone who wants to see it. I imagine a few people might care about the progress made on the public face of the President’s signature
 domestic achievement.
  
 - A Retrospective at the end of the sprint for the team to assess possibilities for process improvement
  
 - Most importantly, **the software is production-quality at the end of every sprint.**

That’s a lot of stuff.

All of these must be true, or really close to it, for development to be truly agile. But I am willing to bet Mr. Daconta
one year of insurance premiums for a gold plan on the federal health care exchange that almost none of these happened
with the development on HealthCare.gov.

> 
I am currently involved in a Defense-related big data project where we are analyzing and decomposing customer requirements into system requirements....This will take a few months, but when it is done we will know exactly what we have to build….A complex back-end data services hub — a piece of software with zero actual, living, breathing end-users — has to be described in terms of “user” stories. Does something sound off-key to you?....Yes, I’m sure you can bend and twist user stories to address non-user based functionality, but should you?


I cannot believe that someone in 2013 would be proud of taking “a few months” to create a PDF and not write
one line of code a client can use. Worse yet is Mr. Daconta’s naive understanding of how user stories work.
He insists *user* must imply a human being when in fact the user of a feature could be another component in the system.
Every non-trivial system has a lot of backend interactions going on, and agile methodologies have long taken that into
account. After all, a big-data professional like Mr. Daconta should know that Salesforce.com famously adopted Scrum
throughout its organization [very successfully](http://www.forbes.com/sites/stevedenning/2011/04/18/six-common-mistakes-that-salesforce-com-didnt-make/).
Does he really think everything Salesforce does is end-user-facing?

In the case of HealthCare.gov, let me make up a reasonable user story where the user isn’t a human being:

*As the Subsidy Eligibility Component, I need to access IRS data to verify the income information provided by the applicant.*

That’s a big story that would need to be broken down into smaller component stories, but you get the idea.
The Subsidy Eligibility Component--something I made up--is a piece of software that’s going to do a calculation based
on business rules defined by the [Affordable Care Act](http://en.wikipedia.org/wiki/Patient_Protection_and_Affordable_Care_Act#Public_policy).
It demands the development of a feature that enables access to
IRS data to do that calculation. The Subsidy Eligibility Component is the “user” of this feature. Does that really blow your mind?

But OK. Let’s say this whole users-not-always-humans thing is just way too weird. In his wonderful book
*[Succeeding with Agile](http://www.mountaingoatsoftware.com/books/succeeding-with-agile-software-development-using-scrum)*,
agile guru Mike Cohn points out something that even agile practitioners forget. Scrum doesn’t *make you* define
features as user stories. If you’re doing Scrum but a user story feels unnatural for a feature that humans never see, that's cool.
You can try an alternative. Cohn suggests the syntax they use in another agile methodology called
[Feature-Driven Development](http://en.wikipedia.org/wiki/Feature-driven_development):

*\<action\>\<result\>\<object\>*

In our case, the feature would simply become

*Verify the income of the applicant.*

Now was that so hard?

> 
For the state of Florida, I led a team in designing and developing a data integration hub that recently successfully passed its first milestone. The software design document was reviewed by the customer, Gartner, and the key software infrastructure vendor….In contrast...we see a site that failed a test of 200 to 300 people  when it was supposedly designed for 50,000 simultaneous users...Where are the design and architecture documents that show how the system was built to be scalable? Oh, agile processes don’t like design documents


Personally, I find nothing to brag about until working software
goes live and clients are happy using it. But Mr. Daconta’s [argument from authority](http://en.wikipedia.org/wiki/Argument_from_authority)
aside, he makes the same old facile claim [UML](http://en.wikipedia.org/wiki/Unified_Modeling_Language)-lovin’ waterfall
disciples have made forever. To say agile processes don’t care for design documents is simply, unequivocally wrong.

We believe instead that you should only do the *bare minimum design necessary* for you to get started delivering value,
which is working, production-quality software. This could be as little as some drawings on a whiteboard created by the
team with the Product Owner. These drawings could even join the other information radiators on the wall for all to see.

Lightweight documentation is superior to heavy, UML-infected documentation for several reasons:

 - We consider time and money to be finite resources, so we don’t want to waste them on stuff that generates no
value to the client.

 - We know from experience that circumstances--realization that a technology we chose is in fact unsuitable,
changes in priorities, external pressure of some kind, etc.--will eventually demand a change in the design. Why would
you spend say...oh, I don’t know...a few months and a lot of taxpayer money to develop a document that is going to be
obsolete in less time than it took to create it?

 - Every developer knows *the best documentation is code*--namely unit and integration tests. Aside from, you know, testing
the code, tests convey exactly how the code works and fits together. They are also guaranteed to be current because they pass;
if they don't, you have bigger problems. When I join a project, studying and running the tests helps me get up to speed much
faster than reading stacks of boring, obsolete PDF's.

 - I can never remember when to use arrows and when to use diamonds in a UML class diagram. Or why anyone cares.

If a client demands a rigorous design document upfront, as many government clients naively do, then create one because
it is generating value--not for the software but for satisfying a contractual milestone. We can just drop a stack of PDF’s on their doorstep with
what agile legend [Martin Fowler](http://martinfowler.com/) once called
"*[The Almighty Thud](http://martinfowler.com/distributedComputing/thud.html)*.” Just know a heavyweight design document does nothing to help
developers. In fact, it hurts developers by robbing them of the resources they need to do great things.

Besides, Mr. Daconta should be aware that agile methodologies came along precisely because people were confused back in the
day about why so many projects fail when they are documented so thoroughly. To suggest absence of documentation led to
the problems with HealthCare.gov is to cling to an ideology and ignore a history of data to the contrary.

> 
In examining some of the Business Service Description (BSD) documents, we see that key interfaces (like verify income and verify citizenship) were designed as synchronous instead of asynchronous interfaces….Frankly, for a site like this that requires high levels of reliability and scalability, a synchronous API design for the data hub is inexcusable.


[Huh?](http://www.youtube.com/watch?v=tpsEdM74maA) I thought there were no design documents. Now Mr. Daconta uses some to
cite another problem.

Anyway, Mr. Daconta actually gets this one exactly right. So much is going on that all the operations on HealthCare.gov need to be [asynchronous and
non-blocking](http://stackoverflow.com/questions/7931537/whats-the-difference-between-asynchronous-non-blocking-event-base-architectu)
for the application to perform at scale.

But what the heck does this have to do with agile?

There is nothing--not waterfall, not agile, not UML, not [gluten-free](http://www.fda.gov/ForConsumers/ConsumerUpdates/ucm363069.htm),
not [Pilates](http://en.wikipedia.org/wiki/Pilates)--
that will save overwhelmed developers from making bad technical decisions.

However, being agile will help you “fail fast.” Remember all that automated testing that happens in an agile project?
You are encouraged to experiment because the tests will fail *immediately* if you take the wrong path. If the
HealthCare.gov developers who claimed to be agile actually were, their tests would’ve exposed the limits of a
synchronous design. It would be a setback, but because sprints are so short, it's only a few weeks at
worst--far preferable to what’s happened since.

On a waterfall project, you test everything some time down the road--in theory. What happens in reality is that everyone
starts freaking out about how much work is left with the deadline fast approaching and so much time lost to generating UML.
People scramble around the clock
just to code *something* and claim all the features are delivered as contractually mandated. The testing that was planned
never happens.

Sound familiar, [Secretary Sibelius](http://www.hhs.gov/secretary/about/biography/)?

The developers of the front end and the data services hub of HealthCare.gov did something that is very common. They ran
a waterfall project cloaked in agile terminology and token application of some agile ideas. It is hard for me not
to blame a seasoned, successful professional like Mr. Daconta for being as easily fooled by a weak disguise
as [Lois Lane](http://en.wikipedia.org/wiki/Lois_Lane).

Michael Daconta clearly has accomplished a great deal in public sector IT, but his agenda-driven, simplistic analysis
of why supposedly agile teams failed on HealthCare.gov is beneath a senior executive of his stature. His analysis
betrays something between confident ignorance and callous disregard for facts.

The problems with the implementation of HealthCare.gov are complex, and they will be debated for a long time to come.
But there is one thing I know for sure.

If you are looking for a solution to the problems that have plagued public-sector IT for decades, and now most famously
HealthCare.gov, [don’t go chasing waterfall](http://www.youtube.com/watch?v=8WEtxJ4-sh4).














