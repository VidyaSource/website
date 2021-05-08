---

author: "Neil Chaudhuri"
title: "Welcoming Nina Day"
description: "We are lucky to be working with Nina Day, a casting and creative agency serving Fortune 500 clients worldwide."
image: "/img/partners/ninaday-social.jpg"
date: 2018-08-10
tags:
- Scala
- REST
- AWS
- NoSQL
- DevOps
- SBT
- React
- JavaScript
- Ruby on Rails
- PostgreSQL
- Akka
- Play Framework
- MongoDB
- Bootstrap
categories: 
- Partners
- Programming
- Architecture
- Software Engineering
- Security

---

Vidya is proud to be working with [Nina Day](http://ninaday.com/), a casting and creative agency based in New York City serving a wide array of clients 
worldwide. Nina Day finds the best talent--models, actors, musicians, and many others--for ads for Fortune 500 companies, 
TV and movies, and special campaigns like the [United Nations He for She campaign](http://ninaday.com/portfolio/he-for-she/) promoting 
[gender equality worldwide](http://www.heforshe.org/).

As you might imagine, a world class casting company needs a talent database, and we have built one for Nina Day. It's a
web application deployed with SSL/TLS that provides a host of features including the following:

* Secure self-entry for talent
* High-performance upload of talent assets--images, videos, resumes, *etc.*--to the cloud and subsequent download and streaming
* The ability to create presentations for clients by defining categories, organizing talent within categories, and organizing
files by drag-and-drop for each talent
* Fast, dynamic query capability for finding the right talent for mass export to presentations and/or broadcast E-mail
* The ability for clients to view presentations (where they have permissions) and select the talent they prefer after viewing 
images and videos and generating PDFs for the presentation, a category, or individual talent
* The ability to view selections by user along with common selections made by multiple users and generate PDFs of those as well

    
The Nina Day talent database began as a [Ruby on Rails](/tags/ruby-on-rails) web application with primarily a JQuery and 
[Bootstrap](/tags/bootstrap) frontend and a [PostgreSQL](/tags/postgresql)
and Amazon S3 backend with CloudFront CDN for worldwide distribution of images and videos.

Over time though, we found that this architecture couldn't scale as needed--particularly with regard to long-running background work 
that takes place with tasks like image and video processing and PDF generation. Enter [Play Framework](/tags/play-framework) in 
[Scala](/tags/scala). We migrated the talent database to Play with a [MongoDB](/tags/mongodb) backend for a more
flexible schema--not to mention that a document-based database is a natural fit for the data model. 

Play and Scala are built for performance, and they have made the database so much faster. We also use [akka-s3](https://developer.lightbend.com/docs/alpakka/current/s3.html)
from the [Alpakka](https://developer.lightbend.com/docs/alpakka/current/) project for asynchronous streaming to S3. This 
has proven very helpful for reducing the memory footprint and speeding things up as well.  

Some things stayed the same like S3 and CloudFront--albeit with a new key structure--and the JQuery/Bootstrap front end. That's changing 
somewhat as we are currently migrating the user interface to a more modern stack with [Webpack](/tags/webpack) and [React](/tags/react).
We spent some time assessing the suitability of React, [Elm](http://elm-lang.org/), and [Vue](https://vuejs.org/) for the talent
database UI, and as compelling as we find Elm in particular, we decided on React because of the established community 
and consequently the availability of components that easily replicate existing functionality. Besides, we have also 
integrated [TypeScript](https://www.typescriptlang.org/), [RxJS](https://rxjs-dev.firebaseapp.com/), and 
[Immutable](http://facebook.github.io/immutable-js/) to provide a fair bit of the 
[type safety](https://stackoverflow.com/questions/260626/what-is-type-safe?answertab=votes#tab-top), 
[immutability](https://stackoverflow.com/questions/12207757/why-do-immutable-objects-enable-functional-programming?answertab=votes#tab-top), and 
[functional reactive programming](https://medium.freecodecamp.org/functional-reactive-programming-frp-imperative-vs-declarative-vs-reactive-style-84878272c77f) 
that make Elm so cool.

We are lucky to be working with Nina Day to use so many powerful, modern technologies to build software that is clean, fast, and
secure for our client and theirs worldwide. 
