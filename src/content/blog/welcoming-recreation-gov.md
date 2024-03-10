---

author: neil-chaudhuri
title: "Welcoming Recreation.gov"
description: "We are proud to have worked with Recreation.gov to help make our national treasures available to everyone."
image: "/img/blog/recreation.png"
date: 2019-05-24
tags:
- React
- Redux
- Go kit
- SRE
- Cassandra
- Golang
- AWS
- Jenkins
- Docker
- Kubernetes
categories: 
- Partners
- Programming
- Software Engineering
- Go
- JavaScript
- Testing
- DevOps
- Microservices
- REST
- Continuous Integration
- Continuous Delivery
aliases:
- /blog/2019/05/24/vidya/technology/welcoming-recreation-gov/
- /blog/2019/05/24/welcoming-recreation-gov/

---

Vidya is proud to have worked on the development of [Recreation.gov](https://www.recreation.gov/), a site built for the United
States government using leading-edge technologies and practices to make it easier to visit the nation's most 
beautiful landmarks and national parks including [the Grand Canyon](https://www.recreation.gov/camping/gateways/2733) and 
[Mount Whitney](https://www.recreation.gov/permits/233260). 

Often called the "Airbnb for Camping," Rec.gov (as it is colloquially known) allows users to reserve permits
to visit and/or stay overnight at federal lands, waterways, and monuments. There are even lotteries
for those permits that are particularly in-demand. 

In order to meet the demand of thousands of visitors, Rec.gov has been built with performance in mind. It utilizes what is probably
the most innovative customer-facing technology stack in the federal government: 

* Go kit, a microservices framework written in Go
* Custom React components along with Redux and [React Router](https://reacttraining.com/react-router/)
* Cassandra for storage although there are plans to move to [DynamoDB](https://aws.amazon.com/dynamodb/)
* AWS

The project itself takes something of a startup's view on quality by shifting the focus from functional testing to automation via a 
CI/CD pipeline powered by Jenkins to build the microservices
and perform basic [linting](https://github.com/golang/lint), Docker to build the images, 
and Kubernetes to orchestrate them. A dedicated [Site Reliability Engineering](https://landing.google.com/sre/) team manages
this pipeline, and their work is impressive. I have never been on a development effort that seemingly devotes more resources to 
continuous delivery than to feature development.  
 
It is rewarding to have learned so much about these emerging technologies and, even more importantly, to have helped make
the best of America available to everyone.
