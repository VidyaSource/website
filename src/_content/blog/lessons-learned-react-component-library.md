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
- Accessibility
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
guarantees they will be consistent with our brand and provide our users the best experience. Developers can feel confident they are using
components vetted with the UX team, which frees them up to work on the specific use cases of their services rather than cross-cutting concerns like
consistency with the design system.

The library also maximizes the likelihood that our UIs pass visual inspection by our UX team when it is time to deliver to our customer.
This is important as violations slow down our delivery cadence.

### Accessibility

Related to consistency is accessibility, which is a first-class priority for our component library. Accessibility, commonly known as #a11y, 
is more than just empowering the visually impaired. It means empowering people who experience difficulty with hearing, 
motion, dexterity, or anything else. It means empowering *everyone*.

The program is required by contract and 
[by law](https://www.access-board.gov/law/ra.html#section-508-federal-electronic-and-information-technology) to produce UIs that 
are accessible--specifically [508 compliance](https://www.section508.gov/tools/playbooks/technology-accessibility-playbook-intro/). 
That said, accessibility is far more than a professional obligation; it is a personal priority. It is very important to me that 
everything I build is intuitive and usable by everyone. 

I will elaborate on this shortly, but our component library is built for accessibility. Development teams
can trust the accessibility of the individual components, and as I said before, focus on their own use cases. Of course, the 
component library can only take them part of the way to full accessibility, but it's nice not to have to start from 0.

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

## Component Stack

As I mentioned, we have built our component library on React, which is what we recommended but is also, for our risk-averse 
government customer, the safe choice given its backing by Facebook, [its market penetration](https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-web-frameworks), 
and [its popularity](https://insights.stackoverflow.com/survey/2021#most-loved-dreaded-and-wanted-webframe-want).

But React is the easy part. Let's look at other parts of the component stack.

### TypeScript

When we started building the component library, I felt TypeScript is essential for two reasons. By enforcing type safety 
at build time, we catch bugs much faster, which from a project management standpoint is much cheaper. More importantly,
building our APIs in TypeScript is a huge help to library consumers on application development teams by facilitating type checking
on their end and code completion in their IDEs.

Let me also mention that some of our TypeScript APIs require [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) values
to promote accessibility if we can't derive them ourselves.

### Chakra UI

I mentioned earlier that our components are built on open source components, and most of them are built on 
[Chakra UI](https://chakra-ui.com/). There are many other open source component libraries out there, but Chakra UI
is my favorite by far. The primary reasons are its first-class commitment to accessibility and the intuitive APIs of its 
components built with TypeScript. As you can probably infer, Chakra UI is an inspiration to me when building our own 
component library on top of it.

Chakra UI also offers a powerful [theme customization API](https://chakra-ui.com/docs/theming/customize-theme) we leverage heavily
to apply the principles of our design system to Chakra components in dedicated theme files that separate the styling of *our* components from
their functionality. This separation of concerns makes it easier to reason about our code and makes the files themselves 
a lot lighter.

Chakra UI also comes with some helpful hooks like [useDisclosure](https://chakra-ui.com/docs/hooks/use-disclosure) that come in handy. 

## Engineering


### Component structure

react fc

use forward ref

### Vite

### Directory Structure

### TypeScript Config

### No Minifying

### Lint

eslint
a11y


### Storybook

interactive

tests

a11y

## Testing

### React Testing Library

### Manual review by UX team




## Engineering Workflow

teams channel

### UX team interaction

atoomic design

published to nexus and npm install

sem ver

### Developed first by teams




## Philosophy

### Dumb components

### Balancing flexibility with opinion





  




