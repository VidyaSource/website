---
title: "Making HealthCare.gov More Than 30% Faster for CMS"
seoTitle: "CMS HealthCare.gov Performance Modernization | Vidya"
client: "Centers for Medicare & Medicaid Services (CMS)"
sector: "Federal Government"
period: "3-year engagement"
tagline: "Working under Accenture Federal Services, Vidya rebuilt a Spring application as a Play Framework application in Scala and taught 20 Java engineers to maintain it."
description: "CMS saw HealthCare.gov performance rise more than 30% after Vidya's Java to Scala rebuild on AWS. A federal healthcare system modernization case study."
image: "/img/blog/health-care-gov.jpg"
tags:
- Modernization
- Government
- Architecture
- Java
- Scala
- Functional Programming
- Testing
order: 2
relatedPosts:
- scala-go
- business-case-for-functional-programming
- why-types-and-tests-are-both-essential-in-programming
technologies:
- Scala
- Java
- Play Framework
- Spring
- AWS
- Java Virtual Machine
- ScalaTest
- ScalaCheck
outcomes:
- metric: "More than 30% performance improvement"
  detail: "HealthCare.gov ran more than 30 percent faster after Vidya rebuilt the Spring application in Scala on Play Framework, letting CMS absorb the open enrollment surge on hardware it already owned."
- metric: "20+ Java developers mentored in Scala"
  detail: "Engineers on the client team learned the new language and its safety habits from the one person on the project who already knew them, so CMS kept the skills in house instead of renting them back every time the rules changed."
- metric: "Incomplete applications handled by design"
  detail: "Every eligibility formula had to state which inputs could be missing, so a partial record became a business decision made in minutes during development instead of a crash, a help desk call, and hours of engineer time reproducing it."
faqs:
- question: "What was Vidya's role in the HealthCare.gov modernization?"
  answer: "Vidya worked as a subcontractor to Accenture Federal Services, which held the prime relationship with the Centers for Medicare & Medicaid Services and carried the overall program. Vidya's scope covered a portion of the platform, where Vidya wrote production Scala services and mentored more than 20 Java developers. Vidya makes no claim on the parts of HealthCare.gov that other teams delivered."
- question: "How much did HealthCare.gov performance improve?"
  answer: "HealthCare.gov performance improved by more than 30 percent across the work Vidya's team delivered on the move from Java to Scala on AWS. Vidya cites that figure from its own engagement record rather than a published CMS benchmark. The gain came from how the code was written and not from new hardware, because Scala's Future let the checks an eligibility determination makes against outside systems run at the same time rather than one after another."
- question: "Would Vidya use Scala for this work today?"
  answer: "No. Vidya proposes other technologies for enterprise modernization. However, what carries forward is the discipline the language enforced. Vidya still writes business rules so the build rejects any combination the statute does not allow, still makes missing data impossible to overlook, still composes complex workflows from simple rules, and still runs API calls in parallel for better scalability. Simply put, use technologies that make it harder to write bugs. A program office should choose the programming ecosystem according to that principle. Ask us for suggestions."
- question: "How does Vidya approach high-traffic government website scaling?"
  answer: "Vidya measures the slowest thing an actual user waits on and fixes that one before anything else. On HealthCare.gov the busiest pages spent their time waiting on outside systems, so Vidya made those checks run at the same time and recovered the wait without asking CMS to buy capacity. Vidya then measures the result so the program office can show its stakeholders a before-and-after number, the way this work produced a figure above 30 percent."
---

## The Challenge

The Centers for Medicare & Medicaid Services (CMS) runs HealthCare.gov as the platform for the federal health insurance Marketplace, and every open enrollment season compresses a year of demand into a few weeks. An applicant who stalls on a plan comparison page may abandon the application and go without coverage for the year, and an inablilty to connect to partner APIs at the Social Security Administration or Internal Revenue Service could delay access to affordable coverage. CMS carried that seasonal surge on a conventional Java monolith running Spring, a common architecture but one that needed a boost.

While the scale and seasonal load challenges for HealthCare.gov are obvious, what is less obvious is the challenge in modeling the business rules of a complex law like the Affordable Care Act into code. There is a programming maxim, "Make impossible states impossible." The code required a programming language and coding techniques that provide a safety net preventing business rule violations that would either improperly grant eligibility to applicants to the wrong resources or unfairly deny eligibility to applicants who had earned the right benefits.  

Accenture Federal Services held the prime relationship with CMS and brought Vidya in as a subcontractor to transition a portion of the platform from Java to Scala. As a rare vendor with prior knowledge of Scala and Play Framework, Vidya found the challenge had two dimensions. It was far more than Scala development. It was mentorship for teams of Java engineers in the idioms, design decisions, and best practices in a completely different and quite challenging programming language. 

## Vidya's Approach

Scala runs on the Java Virtual Machine, so a Play Framework application keeps the runtime. However, Vidya transformed the programming model with a new language and a new way of thinking about building products.

HealthCare.gov applicants seeking affordable health insurance are all different. The Affordable Care Act's formulas take income, household size, prior coverage, and so much other data as inputs, but not all applicants have all that data. Missing input is an ordinary business case rather than a malfunction. The legacy Java code had no way to distinguish valid missing values from invalid gaps, so a gap in someone's record traveled quietly through the system until a later calculation reached for it and the application broke.

Every one of those failures billed CMS three times over. The applicant abandoned the session or called for help. A caseworker then spent time on a problem the software should have handled. An engineer spent hours recreating a crash that left almost no trace of which record caused it. Scala has a language feature called `Option`, which forces developers to account for data that may or not be there, and Vidya made sure all the teams knew how to use it.  
Each eligibility formula now states which of its inputs can be absent. The build fails when any version of the code ignores one. A gap in a wage record now forces a business decision while someone is writing the code, where the fix costs minutes. This shifted quality left and prevented an entire class of Java bugs that have literally cost [billions over decades](https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare/). Vidya argued this in [Know Your Options](/blog/know-your-options-scala-java) years before the engagement, and HealthCare.gov is where the argument stopped being theoretical.

Eligibility is HealthCare.gov is a function of formulas and algorithms, and CMS carries the consequence whenever code combines them into a result the statute does not allow. Vidya modeled each rule so that it declares up front what it depends on and how it can fail, which lets the build reject any combination the law does not permit. That is what "make impossible states impossible" means in practice. Write code that makes it impossible to break business rules. A rule violation caught during development costs an afternoon of engineering time. The same violation reaching an applicant costs a wrong determination, an appeal, and a program office explaining itself to an oversight body.

Open enrollment hands CMS a fixed deadline and a traffic spike. A single eligibility determination has to check several outside systems. The Java code asked them one at a time, so the applicant absorbed every wait end to end. Vidya used a Scala language feature called `Future`, which lets those checks run at the same time across processors to make the most of CMS servers. Scalability improvements allowed CMS to handle the enrollment surge without buying more servers to do it, and Vidya covers this technique in [Nine Reasons to Try Scala](/tutorials/nine-reasons-to-try-scala).

Engineers on the client team learned all of this on a live federal system, a harder classroom than any training course. The challenge was especially difficult because the safety and scalability features in Scala come at a price, a complex language that redefines the mental model and common paradigms in Java. V
idya mentored more than 20 Java developers through a new design strategy that involved writing values that no other part of the system can quietly change and building complex business rules from simple onesones. With time, those engineers were able to extend and maintain the code themselves.


## What Changed

As a result of Vidya's contribution, HealthCare.gov that ran more than 30 percent faster than the legacy Java application it replaced on infrastructure its operations staff already supported. That margin matters most in the weeks when scaling a high-traffic government website stops being an architecture debate and turns into an enrollment deadline. A shopper who loads a plan comparison quickly stays in the flow and finishes the application, and every application converted online is one that never reaches a call center.

The subtler result is fewer bugs because the platform makes it harder to write bugs. Eligibility logic that once depended on a developer remembering to check for a missing value now fails to build when a 
case goes unhandled, so someone solves it at a desk in minutes rather than through an outage, a help desk queue, and a late night of debugging in the middle of open enrollment. Business rules are expressed
with language features rather than clever programming. Maybe most importantly, former Java engineers walked away able to understand and extend the code without Vidya in the room.

The approach represents our modernization strategy. A program office ready to test that can name its single busiest workflow, and Vidya's [legacy system modernization](/consulting/legacy-system-modernization) and [government modernization](/consulting/government-modernization) practices will deliver a measured before-and-after on that workflow inside one quarter.
