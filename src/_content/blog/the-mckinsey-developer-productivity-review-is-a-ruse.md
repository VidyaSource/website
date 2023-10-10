---
author: "Neil Chaudhuri (He/Him)"
title: "The McKinsey Developer Productivity Review Is a Ruse"
date: 2023-10-07T13:31:40-04:00
description: "The McKinsey Developer Productivity Review is just their latest debacle. Your organization can do so much better."
image: "/img/blog/mckinsey.jpg"
categories:
- Leadership
- Government
- Programming
- Testing
- Security
- Cloud Computing
- Software Engineering
- Architecture
---

There is a popular debate on Tech Twitter that rears its head every few weeks but has become particularly salient recently in the industry writ large. 

No, not the one about whether HTML is a programming language. And not the one about whether Tailwind CSS is good. Not the one about whether microservices are a disaster.
Not the one about whether you need to hustle and grind to have a career in tech. Not even the one about whether you need a computer science
degree to excel in tech.

(We sure do have a lot of unnecessary, dumb whack-a-mole arguments in tech, don't we?)

It's the one about whether, and how, you can measure the productivity of individual software developers on the teams in an organization.
It's become important lately since the job market in tech has faced upheaval coming out of the pandemic and since famous CEOs have
brazenly made it clear they think very little of the tech workforce—from Elon Musk's mission to fire anyone who isn't 
"[extremely hardcore](https://www.theregister.com/2022/11/16/musk_twitter_ultimatum/)" 
to Mark Zuckerberg's "[year of efficiency](https://www.reuters.com/technology/meta-lays-off-tech-teams-battering-employee-morale-2023-04-19/)."

McKinsey recently released a report called 
*[Yes, you can measure software developer productivity](https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/yes-you-can-measure-software-developer-productivity)*.
As the title suggests, the authors affirmatively declare that you *can* measure individual productivity and offer a framework for doing so.

The truth is you can't measure individual productivity. I will explain why and why McKinsey would be especially motivated 
right now to offer tech managers this fiction.

## Who is McKinsey anyway?

McKinsey is a management consultant company. In theory, they help managers become better managers. McKinsey is like [The Bobs in Office Space](https://www.youtube.com/watch?v=j_1lIFRdnhA)
with the wealthy, elite academic pedigree of ["the kids" in Succession](https://succession.fandom.com/wiki/Roy_family).

Management consulting isn't a bad idea. We have all known managers who...aren't great. They can use help. The problem is McKinsey 
[gets a lot wrong](https://x.com/TrungTPhan/status/1688583089323438080?s=20) and, even worse, has [sold its "expertise" 
to the worst clients and themselves have done legally dubious things](https://fortune.com/2023/06/21/mckinsey-hiring-ethics-salary/).

Now their ethical and moral lapses, and even their long track record of really bad predictions, don't necessarily mean 
McKinsey's analysis of software development productivity is wrong, but they do provide context for why McKinsey would choose
to tackle the issue at all.

## What's in it for McKinsey ?

With all the problems in the world, why would McKinsey spend time analyzing the feasibility of measuring individual software development productivity?

I am a retail investor, and one thing I have learned is Big Tech does not optimize for profit *per se* but for share price. You 
may know Big Tech stocks took a big hit coming out of the pandemic for a lot of reasons, and there are two things Wall Street 
wants to see from companies in trouble that they want to see succeed: layoffs and buybacks (companies using
their cash on hand to buy their own stock). Sadly as you probably know, Big Tech engaged in mass layoffs. In waves! Lest you 
think it was because of a lack of profit to pay people, [they had the money for buybacks](https://finance.yahoo.com/news/tech-giants-embrace-stock-buybacks-120012389.html).

Predictably, their stock went up.

The good news for software engineers is The Street now wants to see Big Tech investing in AI, so they are hiring again. Like I said,
they are not concerned about the numbers on a balance sheet. Just stock price.

So what does all this have to do with McKinsey? They are a firm that has no ethical compunctions about contributing to 
mass layoffs, and they know there are deep pockets out there willing to pay them large consulting fees for a framework that makes layoffs look
like the result of a rigorous academic analysis rather than a cynical ploy for the next shareholder call. It's a whole lot of bad faith.

## What does McKinsey get wrong about measuring the productivity of individual developers?

Long story short, McKinsey does not understand how software development works in the real world because they're consultants not 
engineers. I recommend you check out [Daniel Terhorst-North's post](https://dannorth.net/mckinsey-review/) also critical of McKinsey's report for a detailed analysis, but
let me add some thoughts.

### McKinsey thinks code is all that matters so the best engineers churn out the most code

It's true that we sell products and products are made of code, but you and I know code is the easy part. So much so
that Generative AI can write a lot of it. The hard work is understanding your customers, learning the business domain, reviewing code because not all code is good code,
experimenting with new tech, manually verifying accessibility, cleaning up technical debt, integrating with legacy systems, writing tests, 
automating cloud deployments, mentoring inexperienced engineers, writing documentation, creating a design system,
and lots of other things essential to mature software delivery. 

Put more simply, McKinsey thinks of code like Pez coming out of a dispenser, which is the what people who don't build software think
building software is like. The reality is it's not about code; it's about features that users will enjoy. Code is only 
a small part of that. Maybe even the easiest!

### That Outer Loop/Inner Loop Dichotomy is Nonsense

McKinsey distinguishes "Outer Loop" activities from "Inner Loop" activities where the latter is for them where the predictive work is.
As you'd expect, the Inner Loop is churning out code. They suggest teams should aim for 70% in the Inner Loop. Where does
that number come from? Who knows? They made it up like a middle schooler who forgot oral reports are due.

It's also telling they put "Security and Compliance" in the Outer Loop category. It's that kind of mentality that causes so many large 
companies who should know better to suffer embarrassing breaches that compromise our data. In fact, all the Outer Loop activities
are important because they are critical to feature delivery, which is what matters.


### "Contribution Analysis" and "Talent Capability Score" Have No Basis in Research

Based on the book of the same name, [Moneyball](https://en.wikipedia.org/wiki/Moneyball_(film)) is the true story of the Oakland Athletics, a baseball team that lacked the resources to sign expensive
players and devised a data-driven approach to assemble cheap, undervalued players into a very good team that could challenge 
rich teams who could afford the most expensive players. That team was at the vanguard of the analytics movement that is now commonplace
in baseball, and one of the key objectives of this approach is to isolate the value of a particular player from the rest of the team.
It's a nice idea, but it's really hard and not necessarily always successful. In fact, there is a modern statistic called Wins Above 
Replacement (WAR) that purports to measure how much better one player is than a player you can find anywhere, but 
[there are three variations on WAR](https://www.mlb.com/glossary/advanced-stats/wins-above-replacement) because the three references
don't agree on how to calculate it.

Measuring the productivity of an individual in the context of a team is all but impossible.

It's even harder in software development where so many different activities go into delivering a feature from talking to users
to building design systems to setting up automated deployments to observability and instrumentation to compliance with laws and
regulations and on and on. McKinsey's perspective on productivity as lines of code and PRs submitted is reductive and naive.

But it gets worse.

Let's imagine a developer who is struggling. After all, that happens. No matter your line of work, we all have Imposter Syndrome
and other crises of confidence. If it persists, that isn't the developer's fault. It's the fault of organizational leadership to
create the conditions necessary for [flow state](https://leaddev.com/culture-engagement-motivation/why-flow-matters-more-passion).

In fact, this leads to the biggest problem I have with the McKinsey report.  

The authors have the nerve to pay lip service to the [DORA metrics](https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance)  
and the [SPACE framework](https://queue.acm.org/detail.cfm?id=3454124), both pioneered by the legendary Dr. Nicole Forsgren
and her colleagues on the basis of years of research, only to make up Contribution Analysis and Talent Capability Score and 
70% Inner Loop activity as if they offer the same academic rigor. This is how you know all of this is bad faith. McKinsey 
hasn't created a framework to measure developer productivity. McKinsey created a framework for tech CEOs to rationalize layoffs
to juice stock prices.

It's an insult to the tech industry and to our intelligence. The good news is there is Dr. Forsgren show us the right way we can improve 
as software organizations.

## Forget McKinsey. Give Yourself SPACE

In his seminal book *Lean Startup*, author Eric Ries introduces the concept of the Minimal Viable Product (MVP):
"[the] version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort."

While tech has taken the MVP to mean an alpha or beta version of a product, Ries means something different—a cheap, lightweight
form of the product that helps you validate or reject your assumptions about what customers want before you invest time or money into building it.

>>> In the book, Ries makes it clear the product doesn't have to be tech. He gives an example of a laundry service in India that uses a prop washing machine on a truck as its MVP.

As you build your product, you need to continuously validate you are giving customers and other stakeholders what they want. This is *building the right thing*.
You also need to establish a culture of teamwork, psychological safety, flow state, and commitment to quality to promote a delivery pipeline that gets 
your product to users with the efficiency (the **_E_** in SPACE related to all the other dimensions) they demand. This is *building the thing right*.

With SPACE and the DORA metrics, Dr. Forsgren and her teams have given us the blueprint to accomplish both.

There are many ways to achieve the goals SPACE and DORA lay out, and how you get there depends on the nature and culture of your organization.
For example, a 100% remote workforce of experienced engineers may have different ways of working than a hybrid workforce
of various experience levels engaging with contractors around the world. You need to figure out what works best for
everyone to encourage diversity in all its forms to deliver the best work, but if you maintain the research-driven SPACE and DORA as your
guide and ignore bad faith ruses from companies like McKinsey, you will succeed.




