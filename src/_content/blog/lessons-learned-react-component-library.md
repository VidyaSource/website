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
prominent US government agency. I want to share with you my lessons learned from the ups and downs of the process.

So what's the big deal with component libraries?

## The Design System

It doesn't start with a component library; it starts with a design system. The Nielsen Norman Group defines design systems 
[this way](https://www.nngroup.com/articles/design-systems-101/):

> A design system is a complete set of standards intended to manage design at scale using reusable components and patterns.

A design system enumerates the standards and practices that define the premier UX for consumers of your brand. It expresses
the nomenclature every team should use in communications to break down silos and avoid the impulse from [Conway's Law](https://www.melconway.com/Home/Conways_Law.html).
There are basic rules about colors, typography, spacing, and so on. All of these core principles become the basis for larger
components--explicit, intuitive ones like buttons and date pickers and subtler ones like grid systems.

Our UX team develops and maintains our design system. Like software, it evolves; it's versioned; and it's collaborative. There are conversations
among the UX designers with me and other architects and engineers on the program about what makes sense, what is feasible.
Are nested dropdowns necessary? Do we have time to create our own perfect `Datepicker`? 
How do we feel about the concept of disabled buttons, and if we think they make sense, how
can we overcome common pitfalls like poor [contrast ratios](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)?

Stuff like that. We use the language of [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) as a common
nomenclature to describe the goals of the design system.

The challenge, and probably the hardest part of building a component library for us, is the tooling. Partly because of the preferences of the UX team and because 
of constraints on our development environment due to the sensitive nature of our work, we have not been able to 
streamline automation for versioning UX wireframes or translating them into artifacts engineers can use to build. As a result,
we work with wireframes that are cumbersome to understand. In order to even view them, we either need to install the tool on our 
machines, which takes more licenses and imposes a burden, or we need to wade through literally hundreds of static asset files and view them
with a browser plugin. Neither is an optimal experience. Beyond that, it's a manual process to track consistency between the design system and 
the component library as both evolve.

I never said it was pretty, but it isn't all bad either.

## The Value of a Component Library

The design system is a set of core principles independent of implementation details. You can choose to implement these principles
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
to promote accessibility if we can't derive them ourselves from other props.

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

If you use Chakra UI for your own component library, you will probably need some alias imports to deal with name collisions.
For example, we call our button components, to no one's surprise, `Button`, but so does Chakra UI. So we do this:

`import { Button as ChakraButton } from "@chakra-ui/react"`


## Engineering

Of course the fun part is building a React component library. This post is long enough, so I can't get into every detail. But
I do want to address some of the key aspects you might want to consider when you are building your own.

### Component structure

Our components in TypeScript take three forms.

The simplest components look like this:

~~~js
export const TimePicker = (p: TimePickerProps) => {
    ...
}
~~~

Our `TimePicker` component has no children, so it's as straightforward as it gets. It's just a function!

If the component has children, it still isn't too bad:

~~~js
export const Card: React.FC<CardProps> = p => {
    ...
}
~~~

The `FC` type (for `FunctionComponent`) includes a `children` prop implicitly. We don't necessarily need it. We could also
declare it just as we do `TimePicker` but explicitly add a `children` prop of type `ReactNode` to `CardProps`. I prefer `FC`
because it very clearly signifies the presence of `children` to library consumers and because the type parameter lets me enjoy
some type inference. Notice how I don't have to specify the type of `p` because it's implicit from the type parameter `CardProps`. 

Still, not too bad, right?

The last kind of component is a little complicated. It applies to form components. Our developers use [React Hook Form](https://react-hook-form.com/),
and like every other form library I've used, it uses `ref`s to communicate with form components. This means the components in our library
need to provide a way to accept a `ref` and delegate it to their children. 

Most React engineers don't know this because they don't have to, but React provides a function for exactly this purpose called 
`forwardRef`, and we use it like this:

~~~js
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(p, ref) {
    ...
}
~~~

Let me try to break this down.

So `forwardRef` is a [higher-order function](https://www.oreilly.com/library/view/functional-programming-in/9781492048633/ch04.html), 
a function that takes functions as parameters, as we have here with that `Button` function that renders the component, or returns a function.
With `forwardRef` development teams can pass refs to the form components in our library, which we pass along to our function parameter and
ultimately the rendered implementation. The type parameters to `forwardRef` help us get type safety and inference. The type
of `p` is `ButtonProps`, and the `ref` will be hooked onto a `HTMLButtonElement`.

In the end, it's a little complicated and a fair bit of ceremony, but the result is pretty simple--a form component that accepts
a `ref` from the caller so form libraries can work with it as needed.

Regardless of the way we design a particular component, we go out of our way to endow it with as little functionality as 
possible. Component APIs offer props that enable library consumers on the development teams to supply behavior. For an obvious
example, developers supply `onClick` behavior to the `Button` component. We have more complex components that need to maintain their own state,
but we try to minimize that where possible. This provides a clean separation of concerns, which makes testing our components much easier. 

### Directory Structure

When it comes to how you should lay out your source code, it comes down to your team's preference, but as I tweeted recently:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">There is a lot of commentary on how we should lay out source code in <a href="https://twitter.com/hashtag/React?src=hash&amp;ref_src=twsrc%5Etfw">#React</a>. If you take two &quot;things&quot; (functions, classes, <a href="https://twitter.com/hashtag/TypeScript?src=hash&amp;ref_src=twsrc%5Etfw">#TypeScript</a> interfaces, etc.), the higher the frequency that changing one changes the other, the closer they should be together</p>&mdash; Neil Chaudhuri (@RealNeilC) <a href="https://twitter.com/RealNeilC/status/1443309713584689154?ref_src=twsrc%5Etfw">September 29, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

But what does that really mean in practice?

Simple. When it comes to our component library, this means putting stuff dedicated to a particular component in the same 
directory and even in some cases the same file. This is how we do it at a high level.

<img alt="CRMSDC Leaders and Legends Badge" src="/img/blog/rcl-button.png" width="356px" height="206px" />

Our `Button.tsx` contains the `ButtonProps` interface, related types, and of course the component itself. Meanwhile, I love
how Chakra UI allows us to separate theming from behavior, so the colors, spacing, font family, icon sizes, focus behavior, and other button
details defined by our design system are in `ButtonTheme.ts`, a different file in the same directory.

Finally, although we could keep our tests and stories (more on these later) in the same directory, we prefer organizing them
in their own subdirectories. I guess I've seen too much Marie Kondo.

### TypeScript Config

I come from a background in [statically and strongly typed programming languages](https://stackoverflow.com/questions/2690544/what-is-the-difference-between-a-strongly-typed-language-and-a-statically-typed) 
like Java and Scala. While I understand longtime JavaScript engineers balk at types, I find types make me extremely productive. 
As a result, our TypeScript config is very strict. In particular from our `tsconfig.json`:

~~~json
{
...
  "compilerOptions": {
    ...
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitAny": true,
    ...
  },
...
}
~~~

As for building the library for application development teams, we scope our `tsconfig.json` this way:

~~~json
{
...
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "**/__stories__/*",
    "**/__test__/*"
  ],
...
}
~~~

All our components, stories, and tests are in the `src` directory, but we only want the components when we build the library. 
This is why we exclude the `__stories__` and `__test__` directories inside each component directory.

### Static Analysis and Code Formatting

Like everyone else, we rely on eslint and Prettier, and we don't do anything particularly special. Still, I do want to mention a couple of things.

First is `eslint-plugin-jsx-a11y`. We use [this eslint plugin](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
to automate verification of the accessibility of our component library. It checks the JSX of our components for obvious
violations. This is as far as we can go with automation, but we complement `eslint-plugin-jsx-a11y` with manual
auditing in Storybook I will discuss shortly.

There might be something gnawing at the experienced engineers reading this. In the `tsconfig.json` above, we exclude our 
stories and tests because they don't belong in the build. Still, you know we should
apply the same quality standards to story code and test code as we do to production code. Code is code.

To do this, we [extend](https://www.typescriptlang.org/tsconfig#extends) `tsconfig.json` in a file called `tsconfig.eslint.json`,
replacing the `exclude` field with an empty array, and configure `eslint` to use *that*. This tells `eslint` (and therefore Prettier)
to include *everything* in the `src` folder in its analysis with identical TypeScript configuration. This means, for example, we can't cheat
by using an implicit `any` in our stories or tests either.

### Builds

We run our builds with [Vite](https://vitejs.dev/). That may seem counterintuitive since Vite is the build tool for [Vue](https://vuejs.org/)
while our library is built with React, but Vite is actually agnostic. In fact, it amazed me how little configuration we needed.
It basically just worked. Our Vite config is almost identical to the [example in the documentation](https://vitejs.dev/guide/build.html#library-mode).
Just like the example, our build produces two bundle formats--`es` and `umd`--and it works fast.

As you may know, TypeScript features two phases, type checking and transpilation to JavaScript. Type checking by `tsc`,
the TypeScript compiler, is *very* slow, so while it is very important, you should do it rarely. We only do it via
the IDE in real time as we code or when we build the library for production--and break the build if type checking fails.

We have a dedicated `typecheck` script in our `package.json` that looks like this:

~~~json
{
  "scripts": {
    ...
    "typecheck": "tsc --p tsconfig.eslint.json --skipLibCheck --sourceRoot src --noEmit",
    ...
  }
}
~~~

Note that we use `tsconfig.eslint.json` to typecheck everything.

Meanwhile, transpiling your TypeScript source code to JavaScript is faster than type checking, but so is reading Tolstoy. Transpiling
with `tsc` or Babel is still not fast. However, the transpiler [esbuild](https://esbuild.github.io/) is written in Go, a language built for speed,
and Vite uses it under the hood. Because we are transpiling constantly to see what's happening in Storybook, its crucial that the process be fast. Thanks to esbuild,
Vite does exactly what we need.

Our production build includes [declaration files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html) 
for each component and an `index.d.ts` file enumerating all components. These improve DX by enabling developers' IDEs to perform
fast code completion.

One last thing to note about the build. Although Vite of course provides minifying and other production readiness capabilities,
we don't use them. We bundle the component library completely "raw." We find this helps developers debug their applications
and, in extremely rare instances, report bugs with specificity. When they run their own builds, their tooling will apply
minifying, tree shaking, and all the other processing for production on all their code and dependencies including our component library


### Storybook

interactive

tests

a11y


Manual review by UX team

## Testing

### React Testing Library



## Engineering Workflow

teams channel

### UX team interaction


published to nexus and npm install

sem ver

### Developed first by teams

encapsulation of theme values


## Philosophy

### Dumb components

### Balancing flexibility with opinion


semantic versioning

c1ds version

index.d.ts

typecheck script





  




