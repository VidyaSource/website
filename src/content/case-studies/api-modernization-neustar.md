---
title: "Neustar Modernizes Telecom Billing Behind a REST API"
seoTitle: "Neustar API Modernization Case Study | Vidya"
client: "Neustar"
sector: "Commercial"
period: "Three-year engagement"
tagline: "Every new cloud offering at Neustar could charge for usage without building billing of its own, on a shared service Vidya delivered over three years."
description: "Neustar modernized legacy telecom billing into a Java REST API on Dropwizard and Amazon EC2. How Vidya handled a legacy API migration to REST."
image: "/img/blog/technology.jpg"
tags:
- Architecture
- Cloud
- Java
- Modernization
order: 5
relatedPosts:
- zero-tolerance-java
technologies:
- Java
- Groovy
- REST
- Dropwizard
- Gradle
- Jenkins
- AWS
- Amazon EC2
outcomes:
- metric: "Billing became a service any team could call"
  detail: "Neustar's product teams metered and charged for usage by calling one billing service from any language and any platform in the NexGen cloud portfolio."
- metric: "A broken build caught in minutes"
  detail: "Every code change ran through an automated build and test, so Neustar's engineers caught a broken build within minutes of the change that caused it instead of during a release."
- metric: "NexGen cloud portfolio gained a shared service"
  detail: "Neustar formed the NexGen group to expand its cloud offerings, and the billing API gave every new offering in that portfolio a metering and charging path it did not have to build itself."
faqs:
- question: "What legacy system did Vidya modernize for Neustar, and how long did the work run?"
  answer: "Vidya turned Neustar's legacy billing capability into a shared REST service that any product team could call. The engagement ran roughly three years. Vidya joined a team of senior engineers inside Neustar's NexGen group and deployed the service to Amazon EC2. Every code change ran through an automated build and test, so engineers caught a broken build within minutes. Neustar's own engineers owned the number directory and its carrier interfaces. Vidya's scope stayed inside the NexGen cloud portfolio."
- question: "Can Vidya move a legacy API to REST without breaking the teams that depend on it?"
  answer: "Vidya moves a legacy API to REST without forcing consuming teams through a single cutover date. Vidya publishes the new HTTP contract before the implementation moves. Consuming teams build against that stable contract while the legacy system still answers underneath. Read requests stay idempotent and cacheable, so a client can safely retry a failed request. At Neustar, the team designed the billing service so a retry never charged anyone twice. Consumers then migrate on their own schedule."
- question: "How does Vidya keep releases simple for a service that other teams depend on?"
  answer: "Vidya keeps the release path short and gives it as few moving parts as possible. At Neustar, the team packaged the billing service and its embedded server into a single executable file. Operators shipped that one artifact to Amazon EC2 and skipped the shared application server. That removed a class of container configuration failures from the release path. Each service also owned its own runtime, so one team's upgrade never forced an upgrade on another team. Vidya chose a deployment approach Neustar's staff already ran every day instead of a container technology that had just shipped its first stable release."
- question: "Has Vidya done API modernization for commercial companies, or only for government agencies?"
  answer: "Vidya modernizes APIs for commercial companies as well as federal agencies. Neustar, a telecom infrastructure company, is Vidya's commercial API modernization reference. Vidya has carried the same HTTP and contract discipline into federal programs. These include Consular Systems Modernization at the Department of State and HealthCare.gov at the Centers for Medicare and Medicaid Services."
---

## The Challenge

Every phone call, fax, and computer connection in North America depended on infrastructure Neustar ran. The company had rescued the ten-digit telephone numbering plan with a solution the FCC mandated, and every telephone company on the continent held a physical interface into Neustar's directory system. Carriers treated that directory the way banks treat a settlement ledger. Neustar had earned the right to be boring.

Neustar's ambitions had moved past the directory by then. The company sold cloud services to enterprises and stood up a group called NexGen to expand that portfolio across new technologies and platforms. Billing stood in the way. Every cloud offering Neustar wanted to launch had to meter usage and charge for it, and the company's billing capability predated the portfolio it now had to serve.

Billing also tolerates less error than most software. A wrong charge lands on a carrier's accounts payable desk and turns into a dispute. A missed charge never comes back as revenue. Neustar needed an interface that teams across the company could call over plain HTTP, and it needed the existing billing behavior to survive the move intact.

## Vidya's Approach

Vidya joined the NexGen group as part of a team of senior engineers and rebuilt billing as a service any product could call over plain web requests. The team packaged that service so it shipped as a single self-contained unit rather than something an operator had to install into shared server software. Neustar's operators gained a release path with one moving part and one fewer class of failures on the way to production.

Neustar's product teams would depend on whatever design shipped for years, so Vidya weighed every decision with that in mind. The team designed the service so a client could safely retry a failed request without charging anyone twice, which matters most on the day a network hiccups in the middle of a transaction. Money got the same scrutiny. Halfway through the engagement, Vidya published [Zero Tolerance](/blog/zero-tolerance-java/) on a subtle way that routine money math in Java quietly returns the wrong answer. A billing service cannot ship a bug that charges the wrong amount. That same discipline still anchors Vidya's [software architecture](/consulting/software-architecture/) practice.

Vidya also chose the deployment approach Neustar's staff already ran every day rather than a container technology that had only just shipped its first stable release. A revenue-bearing service is the wrong place to prove out an immature runtime. Every code change then ran through an automated build and test, and a broken build surfaced within minutes of the change that caused it, so Neustar's engineers kept their attention on billing rules while the release mechanics ran themselves.

Neustar's own engineers owned the number directory and the carrier interfaces into it, and Vidya's team never touched them. Vidya's scope stayed inside the NexGen group's cloud portfolio. That boundary is worth naming, because a national number portability directory and a billing API are different engineering problems with different consequences when they fail.

## What Changed

Neustar's product teams reached billing with a plain web request from any language and any platform in the cloud portfolio, which meant a new offering could meter and charge for usage without standing up a billing project of its own. The engagement ran about three years, long enough for Vidya to carry the API past its first release and into the unglamorous work of keeping a revenue-bearing service healthy on Amazon EC2. Neustar got a billing capability its roadmap could depend on.

The sequence still holds for any team modernizing a system other groups depend on. Vidya makes the old capability callable behind a clear, stable interface the consuming teams can build against, then keeps each piece small enough for one team to own end to end. The legacy implementation moves behind that contract on a schedule the business picks. Organizations running a revenue system they are afraid to change can start that sequence inside a single quarter, and Vidya runs it today across commercial platforms and federal [legacy system modernization](/consulting/legacy-system-modernization/) programs alike.
