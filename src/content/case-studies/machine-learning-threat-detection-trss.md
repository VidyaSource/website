---
title: "TRSS Turns Threat Detection Into a Named Product Line"
seoTitle: "TRSS Machine Learning Threat Detection Case Study | Vidya"
client: "Thomson Reuters Special Services (TRSS)"
sector: "National Security & Federal Law Enforcement"
period: "2015-2018"
tagline: "Vidya moved risk scoring off the query path onto a streaming pipeline built with Kafka, Spark, and Scala, so an analyst opens a dashboard to a score already computed."
description: "Thomson Reuters Special Services grew threat detection into a product line. A machine learning threat detection case study on Kafka, Spark, and Scala."
image: "/img/blog/big-data.jpg"
tags:
- Machine Learning
- Data
- Architecture
- AI
order: 3
relatedPosts:
- java-is-dysfunctional-with-big-data
- business-case-for-functional-programming
technologies:
- Scala
- Python
- Apache Kafka
- Apache Spark
- Spark MLlib
- MongoDB
- Play Framework
- Spring Integration
- Akka
- Angular
- Microsoft Azure
outcomes:
- metric: "Threat detection became a TRSS product line"
  detail: "TRSS sells RAPID® today as real-time risk scoring and fraud identification with entity and network analysis, inside the Fraud Detection & Program Integrity and Risk Detection capability areas alongside Thomson Reuters CLEAR®."
- metric: "12% year-over-year sales growth"
  detail: "TRSS reported sales growth above 12% year over year as the threat-detection model improved after the re-architecture onto Kafka and Spark."
- metric: "Scores precomputed instead of queried"
  detail: "A Scala machine learning model consumed the Kafka stream and wrote a materialized view into MongoDB, so the Play Framework interface read a finished threat score rather than computing one while an analyst waited."
excludedPosts:
- welcoming-trss
faqs:
- question: "What did Vidya build for Thomson Reuters Special Services?"
  answer: "Vidya joined a team of senior engineers on the TRSS threat-detection application and re-architected it into a streaming machine learning pipeline. Spring Integration normalized data from multiple social media and online APIs and published it to Apache Kafka. A Scala model on Apache Spark and Spark MLlib applied natural language processing to that stream and wrote threat scores into MongoDB for the Play Framework interface to serve."
- question: "How does a real-time entity resolution and fraud detection pipeline stay fast under load?"
  answer: "The pipeline moves the analytical work off the request path. Vidya normalized every incoming feed into one message format, published it to a Kafka topic, and let the model score continuously against that stream. The user interface then reads a materialized view, which means response time depends on a lookup rather than on how much data arrived that morning."
- question: "Why Kafka and Spark instead of the Lambda Architecture with Hadoop?"
  answer: "Vidya published a plan in June 2015 to evolve the platform toward Nathan Marz's Lambda Architecture with Hadoop and Elasticsearch, then changed course. Lambda asks a team to maintain a batch layer and a speed layer that each implement the same scoring rules, and TRSS engineers would have carried that duplication for the life of the product. Kafka and Spark gave them one code path, at the cost of replaying the log to recompute history."
- question: "Does Vidya build big data risk scoring platforms for federal customers today?"
  answer: "Yes. The TRSS engagement is Vidya's machine learning threat-detection reference, and Vidya has carried the same event-driven data architecture into federal work, including the predictive analytics platform on Azure Databricks that Vidya architected under Consular Systems Modernization at the Department of State. Vidya holds GSA MAS contract 47QTCA24D0069 for that work."
---

## The Challenge

In 2015, Thomson Reuters Special Services sold threat detection to a customer set spanning the Department of Defense, the Intelligence Community, federal law enforcement, and corporate security teams. Its software analyzed billions of public and proprietary records and turned them into intelligence an analyst could act on the same day. Vidya joined a team of senior engineers on that application, a Play Framework web application in Scala that served an Angular interface over MongoDB. Every hour the software spent catching up to a feed was an hour a customer spent making decisions without it.

Performance governed every decision. Analysts asked questions about people and networks under time pressure, and the answers came out of a database that had to do the analytical work while the analyst waited. Vidya's team indexed aggressively and used Akka to keep the application concurrent and resilient under load. Those measures bought real headroom inside a design that still tied every answer to query time.

That ceiling had a commercial consequence. TRSS sold this platform to commercial and government customers, so the volume of social media and online feeds the application could absorb set a practical limit on what the company could sell.

## Vidya's Approach

Vidya re-architected the application into a streaming machine learning pipeline on Apache Kafka. Spring Integration consumed multiple social media APIs and webhooks, normalized their payloads into a single message format, and published to Kafka. A Scala model on Apache Spark and Spark MLlib read that stream, applied natural language processing to the content, and wrote a materialized view into MongoDB. The whole platform ran on Microsoft Azure, with Python working alongside Scala on the model side. Authorized TRSS users opened the Play Framework interface and saw a threat score the pipeline had already computed.

Vidya announced a different plan in June 2015 and then abandoned it. The original roadmap called for Nathan Marz's Lambda Architecture with Hadoop and Elasticsearch. Kafka and Spark won instead, because Lambda asks a team to maintain a batch layer and a speed layer that each implement the same scoring rules. TRSS engineers got one code path to reason about, and Vidya accepted that recomputing history now means replaying the log rather than rerunning a batch job. On a platform whose value comes from freshness, that trade favored the stream.

TRSS engineers inherited a pipeline that rests on the functional programming principles of composability and reproducibility. A pure transformation over an immutable message returns the same score every time it runs, and that property is what makes a threat score defensible when a customer asks how the system reached it. Neil Chaudhuri had already argued the case publicly in [Java Is Dysfunctional With Big Data](/blog/java-is-dysfunctional-with-big-data) and returned to it years later in [The Business Case for Functional Programming](/blog/business-case-for-functional-programming). The same reasoning still shapes how Vidya approaches [AI consulting](/consulting/ai-consulting) engagements.

One boundary deserves naming. Vidya's team built the ingestion pipeline, the machine learning plumbing, and the interface that surfaced scores. TRSS analysts owned the tradecraft, the proprietary record sources, and the definition of what counts as a threat. The product TRSS sells today carries years of TRSS investment beyond anything a single engagement contributed.

## What Changed

TRSS analysts stopped waiting on a database to compute an answer and started reading a score the pipeline had already produced. TRSS reported sales growth above 12% year over year as the model improved, and the engagement ran through September 2018. The threat-detection platform Vidya helped build grew into a core TRSS business offering, and the company sells RAPID® today as real-time risk scoring and fraud identification with entity and network analysis, inside its Fraud Detection & Program Integrity and Risk Detection capability areas alongside Thomson Reuters CLEAR®.

The move generalizes to any big data risk scoring platform stuck behind query-time computation. Organizations in that position gain one normalized event stream feeding the model and a materialized view the interface simply looks up. Their scoring rule then lives in exactly one place, which is what keeps a score explainable a year later. Vidya delivers that first stream within a quarter, and the [software architecture](/consulting/software-architecture) practice that grew out of this work carries the pattern into federal and commercial programs today.
