---
author: neil-chaudhuri
title: "Beyond GitHub Culture: Why Your Team Should Reconsider Pull Requests"
description: "Pull requests make sense in open-source but might be slowing your internal team down. Explore some more efficient alternatives."
image: "/img/blog/pair-programming.webp"
date: 2025-06-09
tags:
- Agile
- AI
- Open Source
- Software Engineering
- Programming
- Testing
- Continuous Integration
- DevSecOps
---
Someone on LinkedIn was lamenting how the pull request (PR) and code review policies of product teams often slow them down. This reminded me of the old Henny Youngman joke: 
"The patient says, 'Doctor, it hurts when I do that.' The doctor says, 'Then don't do that!'" 

Maybe if PRs hurt, don't do them?

To understand the problem with PRs, we need to talk about gates and waterfall software development. 

## A short history lesson

In the old days before TikTok and wifi, teams used to develop software using a method called "waterfall," which was based on construction—the way you erect buildings. When applied to software, waterfall 
began with lengthy, meticulous planning by systems engineers in an attempt to gather every possible requirement and anticipate every possible risk. After months or even years, they'd finish and reach the first gate. They would toss 
the deliverable, a requirements book the size of a Tolstoy novel, over to the development team. They'd write a bunch of code, maybe test it on their machines, and hit the next gate. They would toss
their code to the Quality Assurance (QA) team to test. Because project managers wouldn't stand for idling, the developers would of course keep working, layering new code on the previous, likely buggy 
code while the testers tested the batch they just got. The testers would finish, find a bunch of bugs, hit the next gate, and toss their findings back to the developers, who would fix them. This
took longer than it had to because all the new code added since made it harder to debug the problems with the original code. Anyway, this would go back and forth
until eventually the code was good enough to real the final gate. The operations team would take the code and deploy it, probably several years after the initial requirements gathering.

At this point, I have no doubt you are curled up in a fetal position under a weighted blanket listening to ASMR. Waterfall was a terrible way to build software for a million reasons. 
The biggest one might be all those gates and handoffs from one team to the next. They make batches bigger and feedback
slower, which is the worst thing you can do in a creative field demanding a lot of experimentation and fast feedback like software engineering.

Agile and DevSecOps recognized these problems and saved us. But not completely.

## The problem with PRs

Fast forward to today. 

Many of us who write code for a living were weaned on GitHub and open-source where PRs and code reviews are second nature. But think about what PRs really are.

PRs are modern gates, and gates, past and present, slow you down. You need to wait for a reviewer to find the time amidst their other duties to review your code. There will be a back and forth 
over the comments. Meanwhile, others on your team are submitting PRs from their own branches, which could very easily conflict with your pending PR. Things can get really messy
with merge conflicts, especially since most teams lack the discipline to keep PRs small enough to complete in a day or less.

On the other hand, while software engineering is a creative endeavor where we should avoid gates, it is also about tradeoffs. Rather than wallow in dogma, we must always be 
willing to bend our rules when it's to our advantage. PRs are gates that slow you down, but they're necessary in open-source because open-source is a low-trust environment. You can't let just 
anyone submit the untested code they wrote while watching [Rick and Morty](https://www.adultswim.com/videos/rick-and-morty) to the code base and disrupt everyone else.

The problem is most organizations have not thought about whether we have to pay the same price in a *high*-trust environment like our own product teams inside the business. 
The answer is probably not. In fact, [DORA has found that the most productive teams use a Trunk-Based Development approach](https://dora.dev/capabilities/trunk-based-development/), 
where developers make changes to the code base (often labeled "main" or "trunk") 
directly by leveraging [branch by abstraction, feature flags, and dark launches](https://www.youtube.com/watch?v=pXovk-5J0Lg) 
that Dave Farley and Martin Fowler have promoted for years. Meanwhile, reviews are done as you build through test and static analysis automation and maybe pair programming.

## Pair programming

Pair programming may not come naturally (It doesn't for me!), and there are always factors to consider like how often to pair, how long to pair in one sitting, and most importantly, 
how to accommodate teammates who are self-conscious, neurodivergent, or however uncomfortable. Still, if you are willing to take the time to ask Stack Overflow or Reddit or AI 
for help, maybe consider asking your teammate next door to sit with you for a few minutes instead. There are [considerable benefits](https://martinfowler.com/articles/exploring-gen-ai/05-not-your-pair-programmer.html). 
You both can also add AI to help with your review. Whichever approach you take to pair programming, if you don't love it, then you don't love it. 

In the end, please at least consider the possibility that what works best in the Wild West of open-source may not be what works best in your organization. At a time
when tech obsesses over productivity and AI, it's long past time to consider new ways of working that make us better.