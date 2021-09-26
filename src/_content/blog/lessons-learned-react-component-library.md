---
author: "Neil Chaudhuri"
title: "Lessons Learned from Building a React Component Library with TypeScript"
date: 2021-09-28
description: "Building a component library "
image: "/img/blog/react.png"
tags: 
- React
- TypeScript
- Chakra UI
- Vite
- Jest
- React Testing Library
- Storybook
- Open source
---

Component libraries are all the rage. Shopify, Salesforce, IBM, and even the [United States government](https://designsystem.digital.gov/components/overview/)
have joined countless other organizations and businesses in building component libraries. They're the subject of blog posts,
podcasts, and YouTube tutorials. All that's left is a [Ken Burns documentary](https://kenburns.com/the-films/) on the subject.

In fact, I am a software architect and senior engineer, and I currently lead the development of our own React component library that will be the basis for all the UIs for a 
prominent US government agency.

So what's the big deal with component libraries?

## The Value of a Component Library

It doesn't start with a component library; it starts with a design system. The Nielsen Norman Group defines design systems 
[this way](https://www.nngroup.com/articles/design-systems-101/):

> A design system is a complete set of standards intended to manage design at scale using reusable components and patterns.

A design system enumerates the standards and practices that define the premier UX for consumers of your brand. It expresses
the nomenclature every team should use in communications to break down silos and avoid the impulse from [Conway's Law](https://www.melconway.com/Home/Conways_Law.html).
There are basic rules about colors, typography, spacing, and so on. All of these core principles become the basis for larger
components--explicit, intuitive ones like buttons and date pickers and subtler ones like grid systems.

All of this is independent of implementation details. These are concepts. You can choose to implement these concepts
and make them real for UI developers with whatever technology you choose.

For us, that's React. Our React components generate a lot of value for us.

### Consistency

Our component library enforces our design system across our development teams. Every UI using the components all but
guarantees they will be consistent with our brand and provide our users the best experience. 

### Reusability 

We have worked very hard to provide intuitive APIs for our components, but the task is trickier than you might think. The 
APIs need to impose enough opinion so that consumers don't violate the design system but allow enough freedom for the components
to support a wide range of use cases. For our `Button` component, that is easy enough. For layout components like 
`Card` and `Page`, it's tougher. The reusability that results has made individual teams and the entire program so much more productive.

### Encapsulation

There will be more about this shortly, but we do not build our components from scratch. Rather, we customize existing open source
components and map our APIs to theirs. This abstracts the implementation details of the component from our development teams.
For example, we use [react-datepicker](https://github.com/Hacker0x01/react-datepicker) as the basis for our own `DatePicker`,
but if we decide to swap it out for a different one, our consumers will be none the wiser.

## Components Stack



### React with TypeScript

react fc

use forward ref

provide intelisense

### Chakra UI


## Engineering

### Vite

### Directory Structure

### TypeScript Config

### No Minifying



## Testing

### Storybook

### React Testing Library




## Engineering Workflow

### UX team interaction

atoomic design

published to nexus and npm install

sem ver

### Developed first by teams




## Philosophy

### Dumb components

### Balancing flexibility with opinion





  




