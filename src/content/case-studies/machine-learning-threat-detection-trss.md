---
title: "TRSS Turns Threat Detection Into a Named Product Line"
seoTitle: "TRSS Machine Learning Threat Detection Case Study | Vidya"
client: "Thomson Reuters Special Services (TRSS)"
sector: "National Security & Federal Law Enforcement"
period: "Multi-year engagement"
tagline: "TRSS analysts now open a dashboard to a threat score already computed, and the platform Vidya rebuilt grew into a product line the company still sells."
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
  detail: "TRSS reported sales growth above 12% year over year as the threat-detection model improved after Vidya rebuilt the platform."
- metric: "Scores ready before the analyst asks"
  detail: "An analyst opens the dashboard to an answer already waiting, because Vidya's platform scores each threat continuously as new data arrives and saves the finished result instead of computing it on the spot."
faqs:
- question: "What did Vidya actually build for Thomson Reuters Special Services, and what did TRSS own?"
  answer: "Vidya re-architected the TRSS threat-detection application into a streaming machine learning pipeline that scores threats before an analyst asks. Vidya did this work as part of a team of senior engineers on the application. The pipeline normalized data from multiple social media and online APIs and published it to Apache Kafka. A model on Apache Spark applied natural language processing to that stream and saved each threat score for the interface to serve. Vidya's team built the ingestion pipeline, the machine learning plumbing, and the interface. TRSS analysts owned the tradecraft, the proprietary record sources, and the definition of a threat."
- question: "Did Vidya's work make a measurable business difference for TRSS?"
  answer: "Vidya's rebuild helped turn TRSS threat detection into a product line the company still sells. TRSS reported sales growth above 12% year over year as the threat-detection model improved after Vidya rebuilt the platform. TRSS sells RAPID® today as real-time risk scoring and fraud identification with entity and network analysis. That product carries years of TRSS investment beyond anything a single engagement contributed."
- question: "Can Vidya keep a real-time risk scoring or fraud detection platform fast under heavy data load?"
  answer: "Vidya keeps a risk scoring platform fast by moving the analytical work off the request path. On the TRSS platform, Vidya normalized every incoming feed into one message format and published it to a Kafka topic. The model scored that stream continuously. The user interface read the finished result from a materialized view. Response time then depended on a lookup rather than on how much data arrived that morning."
- question: "Why did Vidya choose Kafka and Spark for TRSS instead of a Lambda Architecture with Hadoop?"
  answer: "Vidya chose the design that kept the scoring rules in one place, even though that meant changing course from its own published plan. Vidya first published a plan to evolve the platform toward Nathan Marz's Lambda Architecture with Hadoop and Elasticsearch. Lambda asks a team to maintain a batch layer and a speed layer that each implement the same scoring rules. TRSS engineers would have carried that duplication for the life of the product. Kafka and Spark gave them one code path. The cost was that recomputing history meant replaying the log."
- question: "Has Vidya built big data risk scoring platforms for federal agencies?"
  answer: "Yes, Vidya has carried the event-driven data architecture from its TRSS work into federal programs. The TRSS engagement is Vidya's machine learning threat-detection reference. Vidya also architected the predictive analytics platform on Azure Databricks under Consular Systems Modernization at the Department of State. Vidya holds GSA MAS contract 47QTCA24D0069 for that work."
---

## The Challenge

Thomson Reuters Special Services sold threat detection to a customer set spanning the Department of Defense, the Intelligence Community, federal law enforcement, and corporate security teams. Its software analyzed billions of public and proprietary records and turned them into intelligence an analyst could act on the same day. Vidya joined a team of senior engineers on that application, a web platform that answered an analyst's questions out of a single database. Every hour the software spent catching up to a feed was an hour a customer spent making decisions without it.

Performance governed every decision. Analysts asked questions about people and networks under time pressure, and every answer came out of a database that had to do the analytical work while the analyst waited. Vidya's team tuned that database and the application hard, and the work bought real headroom. The design still tied every answer to the moment someone asked for it.

That ceiling had a commercial consequence. TRSS sold this platform to commercial and government customers, so the volume of social media and online feeds the application could absorb set a practical limit on what the company could sell.

## Vidya's Approach

Vidya moved the analytical work off the moment of the question. Instead of a database computing a score while an analyst waited, the new design scored each subject continuously as fresh data arrived and saved the finished result for the interface to read. The platform pulled from many social media and online feeds, folded them into one common format, and let a machine learning model score that stream around the clock. By the time an analyst opened the dashboard, the answer was already there.

Vidya had announced a different plan early on and then walked away from it. The first roadmap would have split the scoring rules across two separate systems, one for live data and one for history, and TRSS engineers would have maintained both copies for the life of the product. The design Vidya shipped kept the scoring rules in one place instead. The tradeoff was that rebuilding history meant replaying the stream rather than rerunning a batch job, and on a platform whose value comes from freshness, that landed on the right side of the trade.

The engineering choices underneath all of this served one business need: a threat score a customer can trust. Vidya built the platform so the same input always produces the same score, every time it runs. That consistency is what lets TRSS defend a score when a customer asks how the system reached it, and it is what keeps a result explainable a year after the fact. Vidya had argued for this discipline publicly in [Java Is Dysfunctional With Big Data](/blog/java-is-dysfunctional-with-big-data/) and returned to it years later in [The Business Case for Functional Programming](/blog/business-case-for-functional-programming/). The same reasoning still shapes how Vidya approaches [AI consulting](/consulting/ai-consulting/) engagements.

One boundary deserves naming. Vidya's team built the ingestion pipeline, the machine learning plumbing, and the interface that surfaced scores. TRSS analysts owned the tradecraft, the proprietary record sources, and the definition of what counts as a threat. The product TRSS sells today carries years of TRSS investment beyond anything a single engagement contributed.

## What Changed

TRSS analysts stopped waiting on a database to compute an answer and started reading a score the system had already produced. TRSS reported sales growth above 12% year over year as the model improved. The threat-detection platform Vidya helped build grew into a core TRSS business offering, and the company sells RAPID® today as real-time risk scoring and fraud identification with entity and network analysis, inside its Fraud Detection & Program Integrity and Risk Detection capability areas alongside Thomson Reuters CLEAR®.

The move generalizes to any risk scoring platform that still makes users wait while it does the math. Organizations in that position gain a system that scores continuously in the background and an interface that simply reads the finished answer. Their scoring rules then live in exactly one place, which is what keeps a score explainable a year later. Vidya delivers that first working version within a quarter, and the [software architecture](/consulting/software-architecture/) practice that grew out of this work carries the pattern into federal and commercial programs today.
