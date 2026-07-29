---
title: "Neustar Modernizes Telecom Billing Behind a REST API"
seoTitle: "Neustar API Modernization Case Study | Vidya"
client: "Neustar"
sector: "Commercial"
period: "2014-2017"
tagline: "Vidya spent three years inside the NexGen cloud group writing Java and Groovy services on Dropwizard, shipped to Amazon EC2 on a Scrum cadence."
description: "Neustar modernized legacy telecom billing into a Java REST API on Dropwizard and Amazon EC2. How Vidya handled a legacy API migration to REST."
image: "/img/blog/technology.jpg"
tags:
- Architecture
- Cloud
- Java
- Modernization
order: 4
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
- metric: "Billing became an HTTP service"
  detail: "Neustar's product teams called billing over REST endpoints on Dropwizard from any language and any platform in the NexGen cloud portfolio."
- metric: "Three years of continuous integration"
  detail: "Gradle automated the build and Jenkins verified every change from May 2014 forward, so Neustar's engineers caught a broken build within minutes of the commit that caused it."
- metric: "NexGen cloud portfolio gained a shared service"
  detail: "Neustar formed the NexGen group to expand its cloud offerings, and the billing API gave every new offering in that portfolio a metering and charging path it did not have to build itself."
excludedPosts:
- welcoming-neustar
faqs:
- question: "What did Vidya actually modernize at Neustar?"
  answer: "Vidya joined a team of senior engineers inside Neustar's NexGen group and rebuilt the company's billing capability as a REST API in Java and Groovy on Dropwizard, deployed to Amazon EC2. Gradle handled project automation and Jenkins handled continuous integration. The engagement ran roughly three years starting in May 2014."
- question: "How do you run a legacy API migration to REST without breaking downstream consumers?"
  answer: "Vidya publishes the new HTTP contract before the implementation moves, so consuming teams code against a stable surface while the legacy system still answers underneath. Reserving GET for reads keeps those calls idempotent and cacheable, which means a client can retry a failed request safely. Consumers then migrate on their own schedule, and no one has to survive a single cutover date."
- question: "Why Dropwizard instead of a full application server?"
  answer: "Dropwizard packages an HTTP service and its embedded server into a single executable JAR file. Neustar's team shipped one artifact to an Amazon EC2 instance and skipped the shared application server entirely, which removed a class of container configuration failures from the release path. Each service also owned its own runtime, so one team's upgrade never forced an upgrade on another team."
- question: "Does Vidya do telecom API platform modernization outside government work?"
  answer: "Yes. Neustar is Vidya's commercial API modernization reference, and Vidya has carried the same HTTP and contract discipline into federal programs including Consular Systems Modernization at the Department of State and HealthCare.gov at the Centers for Medicare and Medicaid Services."
---

## The Challenge

In 2014, every phone call, fax, and computer connection in North America depended on infrastructure Neustar ran. The company had rescued the ten-digit telephone numbering plan in 1998 with a solution the FCC mandated, and every telephone company on the continent held a physical interface into Neustar's directory system. Carriers treated that directory the way banks treat a settlement ledger. Neustar had earned the right to be boring.

Neustar's ambitions had moved past the directory by then. The company sold cloud services to enterprises and stood up a group called NexGen to expand that portfolio across new technologies and platforms. Billing stood in the way. Every cloud offering Neustar wanted to launch had to meter usage and charge for it, and the company's billing capability predated the portfolio it now had to serve.

Billing also tolerates less error than most software. A wrong charge lands on a carrier's accounts payable desk and turns into a dispute. A missed charge never comes back as revenue. Neustar needed an interface that teams across the company could call over plain HTTP, and it needed the existing billing behavior to survive the move intact.

## Vidya's Approach

Vidya joined the NexGen group as part of a team of senior engineers and built the billing capability as a REST API in Java and Groovy on [Dropwizard](https://www.dropwizard.io/). Dropwizard bundles an HTTP service and its embedded server into one executable JAR file, so the team shipped a single artifact to an Amazon EC2 instance instead of dropping a WAR into a shared application server. Neustar's operators gained a release path with one moving part.

Neustar's product teams would live with whatever REST design shipped, so Vidya weighed those decisions carefully. The team modeled billing as resources addressable by URL and reserved GET for reads, which preserves idempotency, keeps responses cacheable, and lets a client retry a failed call without charging anyone twice. Money got the same scrutiny as the URLs. Halfway through the engagement, in November 2014, Vidya published [Zero Tolerance](/blog/zero-tolerance-java) on why comparing two Java `BigDecimal` values for equality quietly returns the wrong answer. A billing service cannot ship that defect class. The same HTTP and correctness discipline still anchors Vidya's [software architecture](/consulting/software-architecture) practice.

Vidya accepted virtual machine deployment over containers, and the reasoning was calendar arithmetic. Docker had only reached version 1.0 in June 2014. Neustar's operations staff already ran Amazon EC2 fleets every day, and a revenue-bearing service is the wrong place to prove out an immature runtime. Gradle automated the build and Jenkins ran continuous integration on every change. A broken build surfaced within minutes of the commit that caused it, so Neustar's engineers kept their attention on billing rules while the release mechanics ran themselves.

Neustar's own engineers owned the number directory and the carrier interfaces into it, and Vidya's team never touched them. Vidya's scope stayed inside the NexGen group's cloud portfolio. That boundary is worth naming, because a national number portability directory and a billing API are different engineering problems with different consequences when they fail.

## What Changed

Neustar's product teams reached billing through an HTTP endpoint from any language and any platform in the cloud portfolio, which meant a new offering could meter and charge for usage without standing up a billing project of its own. The engagement ran about three years from May 2014, long enough for Vidya to carry the API past its first release and into the unglamorous work of keeping a revenue-bearing service healthy on Amazon EC2. Neustar got a billing capability its roadmap could depend on.

The sequence still holds for any legacy API migration to REST. Vidya makes the old capability callable over HTTP behind a contract the consuming teams can read, then keeps the deployable unit small enough for one team to own end-to-end. The legacy implementation moves behind that contract on a schedule the business picks. Organizations running a revenue system they are afraid to change can start that sequence inside a single quarter, and Vidya runs it today across commercial platforms and federal [legacy system modernization](/consulting/legacy-system-modernization) programs alike.
