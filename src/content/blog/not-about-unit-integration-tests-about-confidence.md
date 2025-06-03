---
author: neil-chaudhuri
title: "It's Not About Unit Or Integration Tests. It's About Confidence"
description: "Forget traditional testing categories and focus on what builds confidence. Use AI to generate test data efficiently."
image: "/img/blog/testing-microscope.jpg"
date: 2025-05-30
tags:
- Agile
- Java
- Spring Boot
- Software Engineering
- Programming
- Testing
- Continuous Integration
- JUnit
---

If you write Java code, you probably know Dan Vega. His talks and YouTube channel have helped countless Java engineers get better. Dan recently offered
some pointers for dealing with the challenges of integrating with a new API in your Spring Boot application. I found one of them particularly 
important.

> Always test your JSON deserialization separately before diving into HTTP calls

I couldn't agree more, but I think this is really one example of a broader point about testing your code efficiently.

I have never cared for the "unit test" vs "integration test" distinction. For one thing, it's been like 20 years and we still can't agree on how to define them. 
But more importantly, I don't love defining a test by its architecture. What matters is its purpose. In other words, we should always be asking two important questions:

* What is the thing I am worried about that this test helps me figure out?
* What is the simplest and fastest way I can figure it out?

In Dan's example, there is an issue with how the Spring Boot code processes the response from that new API call. There are multiple possible reasons that can happen. 
The first one is this: Does the shape of my data model (probably a JavaBean or Record) match the shape of the JSON response? Or more simply, am I actually 
getting back what I expect to be getting back? It's a deserialization question.

There are a lot of ways to test this. Many devs would test against the real API. That incorporates the network when you don't need it and makes the test complicated to set up, 
slow to run, and unpredictable because you have introduced network side effects. You may also have to contend with rate limits on the API. Other devs might be a little more clever 
and use [Testcontainers MockServer](https://testcontainers.com/modules/mockserver/) to mock the API, but even that's overkill. After all, you don't need infrastructure of any kind. All you need is JSON. 
Use AI to model as many stub API responses as you want. The best way would be model them on an OpenAPI spec if the API makes one available. If not, prompt your AI 
with the expected JSON shape to generate test inputs. This allows your tests to be simple, concise, [pure functions](https://docs.scala-lang.org/scala3/book/fp-pure-functions.html) using the bare minimum to verify your deserialization strategy. 

That will very likely be the problem. If it isn't, then you can move on to other possible causes. Think about what those might be. For example, maybe HTTP headers are causing Spring Boot not 
to activate JSON deserialization. No matter what, lazy load complexity as you go. Spring Boot offers [HTTP mocking](https://spring.io/guides/gs/testing-web). If you feel like you need a network and real HTTP, upgrade your test
to use Testcontainers. If all else fails, then you can test against the real API, but I would personally prefer to improve observability to look for the problem. Then when you
have a suspect in the case, write a test for your theory. 

By the way, these ideas go beyond Spring Boot and even Java. They apply to any problem in any stack. Identify the core concern you want to test and do it with as little ceremony as possible.

And please forget about [code coverage](/blog/code-coverage-is-killing-you/). Unless you have a boss who doesn't know any better. 

