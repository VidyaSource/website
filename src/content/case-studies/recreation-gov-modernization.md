---
title: "Tripling Reservations on Recreation.gov"
seoTitle: "Recreation.gov Microservices Modernization | Vidya"
client: "Recreation.gov"
sector: "Federal Government"
period: "Six-month engagement"
tagline: "Working under Booz Allen Hamilton, Vidya built Go microservices and React components on a platform that tripled reservations across the nation's parks, forests, and public lands."
description: "Recreation.gov tripled reservations on a Go and React microservices platform. A federal modernization case study on Vidya's engineering under Booz Allen Hamilton."
image: "/img/blog/recreation.png"
tags:
- Modernization
- Government
- Architecture
- Go
- React
- Cloud
- DevOps
order: 4
technologies:
- Go
- Go kit
- React
- Redux
- Cassandra
- AWS
- Docker
- Kubernetes
- Jenkins
outcomes:
- metric: "Reservations tripled"
  detail: "Recreation.gov tripled its reservations after the platform moved to a microservices architecture, so far more visitors claimed campsites, permits, and tours across federal parks, forests, and public lands."
- metric: "Large revenue increases for public lands"
  detail: "Recreation.gov turned that larger volume of reservations into large revenue increases for the federal land management agencies whose sites it serves, money that funds the upkeep of the places visitors came to see."
- metric: "A broken build caught in minutes"
  detail: "Recreation.gov ran every code change through an automated pipeline on Jenkins, Docker, and Kubernetes, watched by a dedicated Site Reliability Engineering team, so engineers caught a broken build within minutes instead of during a release."
relatedPosts:
- scala-go
- lessons-learned-react-component-library-typescript
- infrastructure-as-code-formae-pkl-aws
faqs:
- question: "What was Vidya's role in the Recreation.gov modernization?"
  answer: "Vidya worked as a subcontractor to Booz Allen Hamilton, the prime contractor on the Recreation One Stop (R1S) program. Vidya developed Go APIs and React components and modeled data in Cassandra on Amazon Web Services (AWS). Booz Allen Hamilton and the federal government led the program and own the overall outcome, and Vidya delivered a defined portion of the engineering underneath it."
- question: "What technology stack does Recreation.gov use?"
  answer: "Recreation.gov runs one of the more ambitious customer-facing stacks in the federal government. Go powers its microservices through the Go kit framework, React with Redux and React Router drives the interface, and Cassandra on AWS stores the data. Jenkins, Docker, and Kubernetes carry each code change to production under a dedicated Site Reliability Engineering team."
- question: "How did the modernization help Recreation.gov triple reservations?"
  answer: "Recreation.gov built its microservices architecture for performance first, because thousands of visitors compete at once for high-demand permits and lotteries at places like the Grand Canyon and Mount Whitney. A platform that stays fast and available under that load keeps people in the flow long enough to finish a booking. Recreation.gov tripled its reservations as it scaled, and Vidya cites that figure from its own engagement record for the portion it delivered rather than a published program benchmark."
- question: "How does Vidya approach high-traffic platform modernization?"
  answer: "Vidya decomposes the platform into small services that one team can own end to end, then puts continuous delivery underneath them so a change reaches production the day an engineer writes it. Vidya reserves the newest tooling for the places it earns its risk and leans on proven runtimes everywhere else. Vidya then measures the result the program office can show its stakeholders, the way this engagement produced a reservation figure that tripled."
---

## The Challenge

Recreation.gov is the federal government's single front door for booking the outdoors. A visitor reserves a campsite, claims a backcountry permit, books a tour, or enters a lottery for the most sought-after trips, all across the parks, forests, waterways, and monuments that federal land management agencies steward. The Recreation One Stop (R1S) program runs that platform for the public. People call it the "Airbnb for Camping," and the comparison sets the expectation that arrives with it.

That expectation is the hard part. Thousands of visitors converge on the same release window for a high-demand permit at the Grand Canyon or a summit lottery at Mount Whitney, and they arrive all at once. A platform that stalls under that surge loses the booking, and the visitor loses the trip. Recreation.gov needed an architecture built for performance and scale before it could be built for anything else.

Booz Allen Hamilton held the prime contract on the R1S program and brought Vidya in as a subcontractor. Vidya joined a team already committed to a modern, customer-facing stack, and Vidya's scope covered a defined portion of the engineering rather than the whole platform.

## Vidya's Approach

Vidya built for the surge from the first commit. Vidya developed Go APIs on the Go kit microservices framework, so each capability ran as a small service the platform could scale on its own rather than as one monolith that rose or fell together. Vidya modeled the data in Cassandra on AWS, a store designed to stay available and fast when write traffic spikes against it. A visitor racing thousands of others for the same permit feels that decision directly.

Vidya built the interface as custom React components with Redux and React Router, so the booking flow stayed responsive while the services behind it did the heavy work. The front end and the services met at clear REST API contracts, which let the interface team and the API team move on separate schedules without waiting on each other. That separation matters most in the weeks before a marquee lottery opens, when both sides ship changes under a fixed public deadline.

Recreation.gov treated delivery itself as an engineering product, and Vidya worked inside that discipline. Every code change ran through an automated pipeline that built the Go services on Jenkins, packaged them as Docker images, and let Kubernetes orchestrate them, all under a dedicated Site Reliability Engineering team. A broken build surfaced within minutes of the change that caused it. The program invested more in continuous delivery than many efforts spend on features, and that investment kept a public, revenue-bearing platform releasing safely while demand climbed.

## What Changed

Recreation.gov tripled its reservations as the modernized platform scaled to meet demand, and more visitors reached the campsites, permits, and tours they came for. That larger volume of reservations turned into large revenue increases for the federal land management agencies whose sites the platform serves, money that funds the upkeep of the places people booked. A visitor who once bounced off a stalled page now finishes the reservation, and every booking completed online is one the agencies never work by hand.

The method carries to any high-traffic platform a program office is afraid to change under load. Vidya decomposes the system into small services one team can own, puts continuous delivery beneath them so a change ships the day it is written, and measures the result the office can take to its stakeholders. Name the single busiest booking or transaction flow your platform runs, and Vidya will return a target microservices architecture and a service-by-service migration plan for it within one quarter.
