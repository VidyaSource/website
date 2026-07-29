---
title: "Making HealthCare.gov More Than 30% Faster for CMS"
seoTitle: "CMS HealthCare.gov Performance Modernization | Vidya"
client: "Centers for Medicare & Medicaid Services (CMS)"
sector: "Federal Government"
period: "3-year engagement"
tagline: "Working under Accenture Federal Services, Vidya replaced Spring monolith code with Play Framework services in Scala and taught 20 Java engineers to maintain them."
description: "CMS saw HealthCare.gov performance rise more than 30% after Vidya's Java to Scala rebuild on AWS. A federal healthcare system modernization case study."
image: "/img/blog/health-care-gov.jpg"
tags:
- Modernization
- Government
- Architecture
- Java
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
  detail: "HealthCare.gov performance rose by more than 30 percent after Vidya's team replaced Java monolith code with Scala microservices running on AWS."
- metric: "20+ Java developers mentored in Scala"
  detail: "Engineers on the client team learned Scala, immutability, and composability from the one person on the project who already knew Scala and Play Framework."
- metric: "Java monolith split into Scala microservices"
  detail: "CMS traded a conventional Spring monolith for Play Framework microservices that a team releases and scales one at a time."
excludedPosts:
- welcoming-healthcare-gov
faqs:
- question: "What was Vidya's role in the HealthCare.gov modernization?"
  answer: "Vidya worked as a subcontractor to Accenture Federal Services, which held the prime relationship with the Centers for Medicare & Medicaid Services and carried the overall program. Vidya's scope covered a portion of the platform, where Neil Chaudhuri wrote production Scala services and mentored more than 20 Java developers. Vidya makes no claim on the parts of HealthCare.gov that other teams delivered."
- question: "How much did HealthCare.gov performance improve?"
  answer: "HealthCare.gov performance improved by more than 30 percent across the work Vidya's team delivered on the move from Java to Scala on AWS. Vidya cites that figure from its own engagement record rather than a published CMS benchmark. The migration paired the language change with a decomposition of the Spring monolith into Play Framework microservices."
- question: "Why does Vidya recommend Scala for a federal healthcare system modernization?"
  answer: "Scala runs on the Java Virtual Machine, so a program office migrates one service at a time while the remaining Java code keeps serving the public. The compiler enforces immutability and composition that a Java team otherwise defends with runtime checks and extra test cases. On HealthCare.gov, Vidya wrote reusable primitives that composed data from several microservices asynchronously and kept the concurrency plumbing out of business logic."
- question: "How does Vidya approach high-traffic government website scaling?"
  answer: "Vidya measures the busiest request path first and changes that one before anything else. Splitting a monolith into independently deployable services lets a program add capacity to the hot paths and leave the quiet ones alone. Vidya then instruments the result so the program office can show its stakeholders a before-and-after number, the way the HealthCare.gov work produced a figure above 30 percent."
---

## The Challenge

The Centers for Medicare & Medicaid Services (CMS) runs HealthCare.gov as the platform for the federal health insurance Marketplace, and every open enrollment season compresses a year of demand into a few weeks. An applicant who stalls on a plan comparison page may abandon the application and go without coverage for the year, and an inablilty to connect to partner APIs at the Social Security Administration or Internal Revenue Service could delay access to affordable coverage. CMS carried that seasonal surge on a conventional Java monolith running Spring, a common architecture but one that needed a boost.

While the scale and seasonal load challenges for HealthCare.gov are obvious, what is less obvious is the challenge in modeling the business rules of a complex law into code. There is a programming maxim, "Make impossible states impossible." The code required a programming language and coding techniques that provide a safety net preventing business rule violations that would either improperly grant eligibility to applicants to the wrong resources or unfairly deny eligibility to applicants who had earned the right benefits.  

Accenture Federal Services held the prime relationship with CMS and brought Vidya in as a subcontractor to transition a portion of the platform from Java to Scala. As a rare vendor with prior knowledge of Scala and Play Framework, Vidya found the challenge had two dimensions. It was far more than Scala development. It was mentorship for teams of Java engineers in the idioms, design decisions, and best practices in a completely different and quite challenging programming language. 

## Vidya's Approach

Vidya proposed Scala on the Java Virtual Machine. A greenfield runtime would have forced a flag day, and a flag day on a system with a statutory enrollment deadline carries risk no program office should accept. Scala let the new services and the surviving Java code share one platform while the team migrated capability by capability, and Play Framework microservices replaced monolith code paths on their own release schedule. CMS could then add capacity where enrollment traffic actually landed.

Vidya spent the type system deliberately. Scala's compiler catches at build time what a Java team pushes into runtime checks and test suites, so Vidya wrote reusable primitives that put the compiler in charge of the rules. One set of those primitives composed data from several microservices asynchronously and kept the concurrency plumbing out of business logic. Vidya makes the same argument in [the business case for functional programming](/blog/business-case-for-functional-programming) and in [why types and tests are both essential](/blog/why-types-and-tests-are-both-essential-in-programming), and this engagement is where the argument earned its keep.

Engineers on the client team learned Scala on a live federal system, a harder classroom than any training course. Neil Chaudhuri mentored more than 20 Java developers through the parts that trip newcomers, starting with an object model anchored by Any, AnyRef, and Nothing, then working up to immutability and composability. Some of them fought the functional idiom while an imperative answer sat in plain view, and Scala's Future proved a more confusing parallelism primitive than it should be. Those engineers came out able to extend the Scala architecture themselves.

One practice did not take. Vidya introduced ScalaCheck alongside ScalaTest to bring property-based testing to the project, a technique that generates hundreds of inputs against a stated invariant, and the team kept ScalaTest while largely leaving ScalaCheck alone. Vidya now lands property-based testing by proving it on one narrow, high-value module first and letting the generated failures make the case before a team commits to it broadly.

## What Changed

CMS came out of the engagement with a HealthCare.gov that performed more than 30 percent better than the Java monolith it replaced, and with services the program releases one at a time. That speed matters most in the weeks when high-traffic government website scaling stops being an architecture debate and becomes an enrollment deadline. Shoppers who load a plan comparison quickly stay in the funnel, and a program office that ships one service in isolation answers a policy change in days.

The pattern travels to any federal healthcare system modernization sitting on an aging Java estate. Vidya moves one service at a time onto a runtime the team already trusts. Vidya teaches the new idiom while the old system keeps serving the public, then measures the result before asking for the next increment. A program office ready to test that approach can name its single busiest service, and Vidya's [software modernization](/consulting/software-modernization) and [government modernization](/consulting/government-modernization) practices will deliver a measured before-and-after on that service inside one quarter.
