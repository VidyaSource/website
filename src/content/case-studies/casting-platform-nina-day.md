---
title: "Nina Day Casts Global Brands from One Talent Database"
seoTitle: "Nina Day Casting Database Platform Case Study | Vidya"
client: "Nina Day"
sector: "Media & Advertising"
period: "Ongoing engagement"
tagline: "Vidya has run this platform for over a decade and rebuilt it once the agency's growth outgrew the first version, so a casting director finds the right face in a single sitting."
description: "Nina Day casts for Adidas, Chanel, and the United Nations on a talent database Vidya built in Scala, Play Framework, and MongoDB. A casting platform case study."
image: "/img/partners/ninaday-social.jpg"
tags:
- Architecture
- Modernization
- Partners
- Security
order: 8
relatedPosts:
- business-case-for-functional-programming
- talking-scala
technologies:
- Scala
- Play Framework
- MongoDB
- React
- TypeScript
- Alpakka
- Amazon S3
- Amazon CloudFront
- Cloudinary
- Flowplayer
- Ruby on Rails
- PostgreSQL
outcomes:
- metric: "13 years on one platform"
  detail: "Nina Day has retained Vidya on a monthly retainer for over a decade, through a full rebuild of the talent database as the agency's roster and media volume grew."
- metric: "Exceptional on quality and reliability"
  detail: "Nina Day's president rated Vidya Exceptional on quality, business relations, key personnel, and reliability on the past-performance questionnaire Vidya submitted for its GSA Multiple Award Schedule contract."
- metric: "Global brand roster"
  detail: "That client roster now reaches across advertising, luxury retail, and global institutions. The platform carries the search and presentation workload behind all of it."
- metric: "Talent maintain their own profiles"
  detail: "A secure profile lets talent upload their own headshots, reels, and resumes, so the roster stays current without the agency typing it in."
faqs:
- question: "What does a casting database platform actually have to do?"
  answer: "It has to hold rich talent attributes and large media in the same record, then return a shortlist fast enough to use inside a casting meeting. Nina Day's platform handles secure self-entry by talent, granular query across the roster, presentation building with drag-and-drop ordering, permissioned client galleries, and PDF export at the presentation, category, or individual level. Vidya built all of it on Play Framework in Scala with MongoDB."
- question: "What technology stack runs the Nina Day talent database?"
  answer: "Play Framework in Scala serves the application and MongoDB stores talent profiles, whose attributes differ from one performer to the next. The front end runs React and TypeScript. Amazon S3 holds the media behind Amazon CloudFront, with Cloudinary for image delivery and Flowplayer for video playback."
- question: "Does Vidya build talent management software for agencies?"
  answer: "Yes. Nina Day is Vidya's commercial reference for custom talent management software, and Vidya has run the platform as prime for over a decade. The same team also delivers commercial API and platform modernization, including the billing API Vidya built for Neustar."
- question: "How do you keep a custom media search platform fast when the assets are large?"
  answer: "Vidya separates the metadata path from the media path. Search hits MongoDB with indexing, paging, and Scala parallelism, while headshots and reels stream from object storage through a content delivery network close to the viewer. The Alpakka connector for Amazon S3 streams uploads asynchronously, which keeps the memory footprint per upload low even when several people upload reels at once."
---

## The Challenge

Nina Day casts models, actors, and musicians for advertising campaigns, film, and television out of New York. The agency wins work by finding the one right face before anyone else finds it. That search once ran through email attachments, shared folders, and a casting director's memory of who fit a similar brief two years earlier. Every new campaign started the hunt over.

The media made the problem heavier than a normal database problem. A single talent record carries headshots, a portfolio, a video reel, and a resume. Nina Day's clients open those files from wherever the campaign happens to live. A creative director who waits on a reel to buffer stops watching it.

Presentations carried the commercial risk. A brand client needs a curated gallery it can browse, mark up, and circulate internally. A casting agency can never let one client's shortlist reach another. Nina Day needed permissions, ordering, and an export its clients could forward to a colleague who never logs into the platform.

## Vidya's Approach

Vidya built the first talent database. Talent uploaded their own headshots, portfolios, reels, and resumes through a secure profile, which moved the data-entry cost onto the people who own the material. The platform stored that media in the cloud and served it from locations close to each viewer, so a client on another continent did not wait on a slow download. Nina Day's roster grew without the agency hiring anyone to maintain it.

As submission volume grew, the first version hit a wall. Processing images, handling video, and generating presentation PDFs all run long, and the original build let that heavy work hold up everything else. Vidya rebuilt the platform so those jobs run in the background without making anyone wait, and so a large upload no longer strains the system even when several people upload reels at once. The new design also fits the shape of casting data, where one performer's profile looks nothing like the next. A casting director now gets search results back in the time a search should take.

Nina Day's team lives in the browser all day, so the interface earned the same scrutiny as everything behind it. Vidya weighed the leading options and chose a foundation with a large, established community, because that let the team reuse proven building blocks instead of rewriting every screen from scratch. Vidya then layered in safeguards that catch whole categories of mistakes before they ever reach a user, so the screens the agency depends on stay predictable under daily use. That is the same tradeoff that runs through Vidya's [business case for functional programming](/blog/business-case-for-functional-programming) and its [software architecture](/consulting/software-architecture) practice. Vidya accepts a little more tooling in exchange for software that is harder to break.

The commercial value sits in the presentation layer. Nina Day's team defines categories, organizes talent inside them, and reorders each performer's files by drag and drop. Brand clients open only the presentations their permissions allow, select the talent they prefer, and generate a PDF of a full presentation, one category, or a single performer. The platform also rolls selections up by reviewer and surfaces where reviewers converged, so the agency walks into the callback meeting already knowing where the room agrees.

## What Changed

Nina Day's casting directors now run a query, assemble a presentation, and put it in front of a brand's creative team in one sitting. The agency's public client list runs through Adidas, Chanel, Nike, and the United Nations. It also represents photographers and directors including Martin Schoeller and Inez & Vinoodh. Nina Day won those accounts on its casting judgment. The platform absorbed the operational load that arrived with them, and a build for a New York agency still serves that roster today. Nina Day's directors still decide who has Blue Steel, and the platform gets them to that decision with the shortlist already built.

Vidya has supported the platform on a monthly retainer for over a decade. Nina Day rated the work Exceptional on quality, business relations, key personnel, and reliability when it completed a past-performance questionnaire for Vidya's GSA Multiple Award Schedule contract. Agencies sitting on a decade of talent assets in shared folders can reach the same place in stages. Vidya starts with the search and the media pipeline, because those two carry the entire casting workflow, and a first working search over an existing asset library lands inside a single quarter. Vidya runs that sequence today for commercial platforms like Nina Day and [Neustar](/case-studies/api-modernization-neustar), and for federal [legacy system modernization](/consulting/legacy-system-modernization) programs.
