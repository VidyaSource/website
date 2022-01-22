---
author: "Neil Chaudhuri"
title: "Secure Online Voting is Possible. This is How"
date: 2022-01-15
description: "If we overcome past mistakes, corruption, and bad faith, we can absolutely achieve secure online voting."
image: "/img/blog/vote.png"
tags: 
- TypeScript
- PWA
- Docker
- Kubernetes
- JavaScript
- OIDC
- React
- Svelte
- Spring Boot
- Remix Run
- FastAPI
- Kotlin
- Go
- Python
- SQL
- PostgreSQL
- EFK
- Splunk
categories:
- Government
- Big Data
- Programming
- Testing
- Security
- Cloud Computing
- Software Engineering
- Open Source
- Microservices
---

The right to vote is sacred. It's essential to live in a free society and to pick a winner on [The Voice](https://www.nbc.com/the-voice).
Unfortunately, the right to vote is under attack worldwide, and bad actors have used tech to do it. 
Russia [interfered with the Brexit referendum in the UK](https://www.nytimes.com/2017/11/15/world/europe/russia-brexit-twitter-facebook.html) 
and with elections there, Ukraine, France, and famously here in the United States, even still as I write this, by 
hacking voting machines and voter registration databases and manipulating social media. 
[Other foreign state actors are interfering in elections](https://www.theverge.com/2020/9/11/21431990/russian-chinese-iranian-hackers-target-us-2020-elections-trump-biden-campaigns) 
in similar if not quite as aggressive ways.

Meanwhile, within our own borders here at home, the state legislature in North Carolina used data science with 
"[surgical precision](https://www.nbcnews.com/politics/politics-news/north-carolina-judges-toss-maps-slam-gerrymandering-stinging-ruling-n1049411)"
to rig state elections at the expense of voters' constitutional rights. North Carolina is hardly alone. In 2018 in Georgia, the Secretary of State, 
who was running for governor, had the authority to oversee his own election, and he orchestrated a complex web of corruption that actually 
[encouraged security vulnerabilities and culminated with his own breathtaking wipe of election servers and backups](https://www.engadget.com/2018-11-09-how-brian-kemp-hacked-georgias-election.html).

If accountability bothers these politicians so much, they should work in meteorology or sports talk radio. 

Even worse, the courts, 
including [the Fifth Circuit Court of Appeals in Texas](https://dfw.cbslocal.com/2020/10/13/reinstates-texas-order-limiti-mail-in-ballot-drop-off-locations-1-county/)
and the [Supreme Court](https://www.cnn.com/2021/07/02/politics/john-roberts-voting-rights-act/index.html),
have refused to remain above politics as the judiciary should and have chosen instead to legitimize these bad actors.

We can't forget criminal mercenaries either as we also saw when 
[Microsoft took down Trickbot](https://blogs.microsoft.com/on-the-issues/2020/10/12/trickbot-ransomware-cyberthreat-us-elections/),
in their attempt to infect voting infrastructure with ransomware.

The goals vary. To sow chaos. To sow mistrust of the electoral process. To override the will of voters. To preserve power structures.
To change American policy objectives. To make money.

Regardless of the purpose of these attacks on the right to vote, they're shameful, and systemic flaws make it all possible: 

* Lack of transparency as manufacturers with troubling conflicts of interest produce closed, proprietary voting machines 
* Lack of knowledge or interest in modern software architecture patterns, engineering best practices, UX strategies, modern technologies, accessibility, and good security hygiene
* Lack of training for staff in using and maintaining the available voting technology
* Lack of funding for officials acting in good faith to build robust voting infrastructure
* Lack of access controls to prevent officials acting in *bad* faith from exercising undue influence over the infrastructure for nefarious purposes

And many others. You can [read about the threats to and core values of a secure online voting platform](https://www.nap.edu/catalog/25120/securing-the-vote-protecting-american-democracy) 
defined by a panel of experts.

Because of these systemic problems, the high stakes involved in electing officials who will be making life and death decisions in the era of COVID,
the breathtaking incompetence and embarrassing failure of "modern" voting apps
like the [IowaReporterApp](https://www.vox.com/recode/2020/2/7/21125078/iowa-caucus-2016-mobile-app-2020), and the fear of relentless
attacks from around the nation and the world, we are in a place now where the consensus is that the only secure way to vote 
is with paper ballots. To say nothing of the vulnerabilities associated with paper ballots. Or the matter of voter access 
to those paper ballots, which itself is fraught with bad faith arguments and [racism](/blog/black-lives-matter/).

It's easy, if profoundly disappointing, to see how we got here, but it really doesn't have to be this way.

# Features of Modern Voting

There is an old joke: 

*I told the doctor it hurts when I do that. He said "Then don't do that!"*

In order to build a modern voting solution, we need to look at the problems with existing voting solutions and "not do them."
I believe secure online voting must have several critical features.

### Open Source (as much as possible)

This is absolutely crucial. The core of the solution must be open-source. Period. 
Every line of code needs to be available for all stakeholders—media, 
elected officials, election attorneys, security analysts, and most importantly voters—to have confidence in the security 
and integrity of the software and therefore in the outcomes of elections. 

We will see shortly that it may be necessary to incorporate some commercial solutions that are closed-source, but those should 
be on the margins. There should be no core functionality that isn't available for all to see.

Another reason to value open source is that a mission as important as this demands diverse experiences and perspectives—on
voting experiences, past software failures, [biases](/blog/vidya/technology/black-lives-matter/), 
architectural patterns, tech stacks, potential vulnerabilities, and whatever else we need to understand to build 
the best online voting platform possible.

### Zero Trust

Every state election system in America is perimeter-based. It's all about firewalls. Perimeter-based security is flawed 
because once intruders get in, which as we've seen time and time again isn't exactly impossible, there is no stopping them. 
Instead, we need a Zero Trust approach to security. I will let 
[Chris Gerritz](https://www.scmagazine.com/home/opinion/executive-insight/what-is-the-zero-trust-framework-in-cybersecurity-and-5-considerations-for-building-a-zero-trust-it-environment/) 
explain what this means:

> Rather than defending only a single, enterprise-wide perimeter, the Zero Trust approach moves this perimeter to every network, system, user, and devices within and outside the organization. This movement is enabled by strong identities, multi-factor authentication, trusted endpoints, network segmentation, access controls, and user attribution to compartmentalize and regulate access to sensitive data and systems.

Think of Zero Trust like a secure hotel. You need your key to get in the building, to get through front desk security, 
to take the elevator to your floor and only your floor, and finally to enter your room or the gym or the pool. Even inside 
your room, you need to be authenticated to access WiFi or use the safe.

Advancements in technology make Zero Trust possible, and a modern voting solution will enforce Zero Trust to ensure
that every interaction with every component of the architecture demands authentication and a thorough vetting of 
privileges and integrity.

### Transparent and Auditable

While the source code will be fully transparent to give everyone confidence in the integrity and fairness
of election outcomes, we also need that transparency to extend to the runtime operation of the software. We need to 
know the health of the system and to know every single thing that happens throughout the architecture—and who did it. 
This means continuous monitoring throughout the stack, elegant visualizations of the telemetry, and if we can manage it, 
anomaly detection through analytics. This level of auditability is necessary for Zero Trust.

### Immutable and Append-Only

I have [written](/blog/business-case-for-functional-programming/) and [spoken](/blog/talking-trends-at-tech-talk-dc/)
a great deal about the value of immutable data, and I think it is essential for secure online voting. The software
should not permit updates or deletes. Rather, any change to the data—a newly registered voter, a new address for an existing voter,
and certainly every vote—should be represented in immutable, append-only fashion. As part of the 
auditability of the software, we should be able to replay every event to recreate state at any point
in the process.

### Client Device and Application Deployment Agnostic

A modern voting solution needs to give voters the freedom to access their ballots 
on a wide array of devices and to give state government officials the freedom to deploy on premise or in the cloud.
The software needs to be agnostic to these possibilities, and this will force compromises in the implementation. It may 
not always be possible to apply the "coolest" solution if it couples the software too tightly to a particular vendor 
or feature.

### Usable

This might seem obvious, but secure online voting demands all stakeholders consider it intuitive. This manifests in
several ways. User interfaces need to reflect modern UX principles so that voters, poll workers, and state officials across age, 
education level, ability, and other factors find the software intuitive.

I also believe giving voters the opportunity to cast their ballots from wherever they wish is a form of usability.
It's not just about comfort either. Because of the relentless media obsession with conflict, everyone tends to focus on candidates, 
but what about referendums, state constitutional amendments, and bond issues? These can be complex. I know from experience 
that it's helpful to research these comfortably from your home rather than under pressue within the space and time constraints of a traditional voting booth. 

Part and parcel with usability is performance. Monitoring will help uncover issues with performance, but a modern online
voting system needs to be architected for performance. Performance issues will not only be annoying, but they could 
also undermine confidence in the integrity of the vote. 

### Simple

To achieve all of this, there will be a lot going on in a secure online voting platform—user interfaces, APIs, encryption,
databases, multifactor authentication, monitoring. It will be tempting to add complexity to integrate it all, and we 
need to resist the temptation to overengineer. Otherwise, the application will become unsustainable for mainainers
and, much worse, unusable for voters and others, which will bring
us right back to the status quo of a voting platform that diminishes the confidence we have in the integrity of our elections.

---

This is a lot, and in order to achieve it, a secure voting platform needs to be engineered with a continuous deployment 
model that automates testing (for functionality, security, performance, accessibility), static analysis, and deployment.
We need a process that solves for the key metrics for software delivery performance that Google describes in their 
[State of DevOps](https://services.google.com/fh/files/misc/state-of-devops-2019.pdf) report: deployment frequency, 
lead time for changes, time to restore service, and change failure rate.

The good news is that a secure online voting solution doesn't have steep demands for scalability or performance. It's not 
like there will be tens of thousands of votes per second. This isn't [The Masked Singer](https://www.fox.com/the-masked-singer/).

Even if there were one instance of the platform for the entire United States, that's about 150 million voters.
That's not a lot. And because in America every state runs its own platform, for better or worse, you'd have at most one 
instance of the platform for each [state and inhabited territory](https://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States). 
California is the largest state by population, and a statewide election there will have around 30 million voters.
As software scale goes, 30 million over the course of several weeks 
(as the concept of "Election Day" thankfully grows more and more quaint) really isn't that much.
Now maybe, hopefully even, great voting software will raise those numbers, but as it stands now, this makes things a lot easier. We can 
focus on user experience, data integrity, and platform security and worry a bit less about performance at scale.

Another bit of good news? The UI is simple. It's just boring forms!

## What Might the Tech Stack Look Like?

I'm not exactly sure, and there are a lot of great options. But I do have some ideas I would like to run by you. 

### The user interface: Remix Run PWA

[Remix Run](https://remix.run/) is a new open source web framework from the creators of React Router that provides
abstractions over core web fundamentals to build a resilient experience. In fact, it's that resiliency that makes Remix
a compelling choice for a voting application. It's lightweight because it relies on core browser APIs and HTTP, and forms
still work without any JavaScript because HTTP supports form submission on its own.

Certainly a front end in Rails or another robust monolithic framework would be effective as would
alternatives like [Next.js](https://nextjs.org/) or [SvelteKit](https://kit.svelte.dev/), but I find it hard to resist Remix's 
lean philosophy. As part of the trend towards more SSR at the edge, Remix Run even offers templates for a variety of 
deployment platforms like Cloudflare, Fly.io, Netlify, and Vercel, and that list will only grow. Although edge 
functionality isn't essential for voting software that applies across such little territory (a single state), the deployment flexibility 
is essential, and every millisecond helps. 

In addition, I think it is important that the front end is deployed as a [Progressive Web App](/blog/vidya-reloaded/).
This offers a lot of benefits, but primarily for this purpose, it is critical that the front end is always available 
and as functional as possible regardless of connectivity, which absurdly remains a problem in the richest country in the world. 

This is orthogonal to the choice for UI or PWAs, but the voting application needs to have 
[Cross-Site Request Forgery](https://owasp.org/www-community/attacks/csrf) protections and a strong 
[Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) as well.

By the way, it might be interesting down the road to think of voice interfaces allowing people to vote with Google Assistant,
Alexa, or Siri if privacy concerns can be addressed. One challenge at a time though.

### Database: PostgreSQL. With a twist

The backbone of this architecture is the [event sourcing](https://martinfowler.com/eaaDev/EventSourcing.html) architecture 
based on an immutable, append-only data store representing every single mutation to the data on the platform in order to
ensure full replayability and traceability. This is particularly valuable for [risk-limiting audits](https://en.wikipedia.org/wiki/Risk-limiting_audit) 
conducted after elections to verify the outcomes. How can we do this with PostgreSQL?

Easy. Revoke UPDATE and DELETE privileges!

Anything more than PostgreSQL, which is straightforward to deploy and agnostic of environment, would be overkill given the small scale—particularly 
if someone deploys the online voting platform for a small election below the state level with just a few thousand or even a few hundred voters.

We could store votes in a single table where a simple [GROUP BY](https://www.sqltutorial.org/sql-group-by/) will aggregate election results. 
That's easy. We can also store temporal and location data so we can run some basic secondary queries like measuring voter activity
by precinct or time of day or day of week or whatever else you want to know. Changes to voter information, a popular action for bad actors, would also be 
tracked as immutable events, and voters would be notified as they happen.

So immutable PostgreSQL it is. It's easy to connect to PostgreSQL from the UI with [Prisma](https://www.prisma.io/). 

By the way, what about blockchain? [No. Just. No.](/blog/pop-goes-the-blockchain/)

### Deployment: Somewhere easy

I have no particular preference for where we deploy this online voting platform, but it needs to be somewhere offering 
good DX and resiliency. To me, this implies any of the out-of-the-box deployment targets for Remix Run,
but it could be AWS, Heroku, or many other cloud providers. There could also be a combination like Remix Run on Cloudflare and 
PostgreSQL, SMTP, and other infrastructure on Supabase. It all depends on what's simple, cost effective, and meets the needs
of voters and staff.

### Monitoring, Auditing, Disaster Recovery, and High Availability: It depends

An online voting platform will come under attack from the most sophisticated hackers in the world, and its single most important
requirement is that it always maintains the confidence of voters. In order to face these challenges, we need
monitoring, auditing, disaster recovery, and high availability.

These are cross-cutting concerns that apply to any non-trivial deployment, but they are undeniably essential here. It's hard
to identify particular solutions because they are a function of the deployment platform, but suffice to say that any platform
that cannot meet the needs of a mission-critical system like anomaly detection and alerting is a nonstarter.

In the end, we need to be able to understand who, what, where, when, and how for every single event on the platform.

### Authentication and Authorization: A blend of open-source and proprietary solutions

It goes without saying that the most important piece of online voting is security. The challenge isn't just technical though:

* It needs to be simple to implement and maintain yet all but impregnable
* It needs to be simple to use by all voters regardless their age, ability, tech savvy, and other factors
* It must withstand independent audit by a trusted partner

This is where the top minds in infosec will be invaluable. I am nowhere near that class, but let me throw out some ideas.

In the interest of Zero Trust, the connections to the server, the database, and any other infrastructure like SMTP servers
and caches will be authenticated over TLS, and all data at rest will be encrypted. This of course implies encryption key 
storage like that provided by HashiCorp Vault and similar products.

Voters would have a choice of authentication methods:

* Username/password (12-64 characters with mixed case, numbers, and special characters required) and their choice of MFA methods (*e.g.* authenticator app, physical key) along with the usual Forgot Password, Change Password flows
* OpenID integration with Google

There will always be voters who feel comfortable voting in the traditional way—showing up to their local polling places on Election Day and
casting ballots. Polling places would simply be equipped with computers from which voters cast their ballots by setting up accounts
and logging in through the browser to our secure online voting platform, and staff would assist in the process. If it were up to me, the government would provide
funding for physical keys, and every voter who shows up in person on Election Day who wants one would get one and would be 
shown how to use it.

The database could associate random tokens to users, analogous to an access key for a cloud API, which for voters would have
a quota limit of one for the duration of eligible voting. These tokens would be encrypted
and rotated on a periodic basis, and they would represent voters in their interactions with the APIs to cast votes and staff
in all other API calls.

Finally, securing the entire DevSecOps pipeline means implementing a host of measures like keeping secrets out of code and configuration,
managing access control and limiting permissions throughout the pipeline, signing changes to version control with PGP, 
using key management mechanisms appropriate for the deployment platform, and much more.

And of course there are automated security tests in CI and full audits by security professionals to vet the entire 
architecture.

---

This entire stack, and really the whole architecture, is just an idea. It is all subject to change.

## Outstanding Questions

Even if the architecture and technology stack are perfect, there are difficult questions that remain across not only 
technology but also law, finance, politics, and even philosophy. Here are some of them:

* Every state has its own election laws, technology infrastructure, and budget. What kinds of legal, privacy, and technical challenges are there to migrating voter registration data to a new system? Is there even a need if the application can represent registered voters some other way? 
* Corrupt officials do not want anything that will make voting easier, but would even *honest* officials consider it? 
* What's to stop government officials who are authorized users acting in bad faith from compromising the platform in some way?
* While the platform would be built for resilience, what kinds of contingency plans would be in place just in case the platform went down for an extended period?
* If we use PostgreSQL as an immutable, append-only store to provide a replayable log of all data mutations, we will eventually hit its limits. What's the retention period for the data? If it is even necessary to retire the data to some kind of data lake after the retention period, where would that be? How would that work?
* To what extent can we preserve the notion of a "secret ballot" where only voters themselves know their selections? Or should a modern voting platform recognize the very concept of a secret ballot as an [anachronism that is pointless at best and harmful at worst](https://www.washingtonpost.com/posteverything/wp/2017/01/06/want-to-improve-democracy-abolish-the-secret-ballot/) and function accordingly?
* Would machine learning serve a purpose here? If so, what's the simplest and most effective way to implement it?
* Would there be an audience for making non-PII data available via APIs for data analytics by independent organizations? If so, how would we do that?

The beauty of open source is the diversity of thought and creative energy that converges to solve interesting, hard problems
like these. 

It will take a historical effort to build a secure online voting platform that allows all registered voters to make their voices
heard and gives them the confidence that their votes count and that winners are legitimate. If you find improving access to voting, guaranteeing the integrity
of elections, promoting social justice, and solving interesting problems as important and as compelling as I do, please 
[get in touch](/contact) so we can collaborate on something that could transform society for the better.
