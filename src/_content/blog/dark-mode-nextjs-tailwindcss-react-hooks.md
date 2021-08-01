---
title: "Dark Mode in Next.js using Tailwind CSS and React Hooks"
author: "Neil Chaudhuri"
date: 2021-08-04T17:38:04-04:00
description: "Use the power of Tailwind CSS and React Hooks to build Dark Mode into your Next.js site."
image: "/img/blog/moon.jpg"
categories:
- Mobile
- Accessibility
- Open Source
tags:
- NextJS
- Tailwind CSS
- JavaScript
- TypeScript
- React
---

It's quite possible that while waiting for the ads on Hulu to end
you stumbled upon the [option to set your phone's theme to Dark Mode](https://www.theverge.com/2019/3/22/18270975/how-to-dark-mode-iphone-android-mac-windows-xbox-ps4-nintendo-switch).
Dark Mode is becoming a staple of user interfaces on the web and mobile devices for [several reasons](https://www.forbes.com/uk/advisor/mobile-phones/what-is-dark-mode-and-should-you-be-using-it/)--
primarily to ease the strain on your eyes and to reduce battery consumption. 

At Vidya we pride ourselves on embracing emerging technologies and helping our clients leverage them to realize their
potential. When it came time to give our website a fresh new look, we figured adding a toggle-able Dark Mode option would be consistent with 
that mission. This website you're reading right now supports Dark Mode. Just look at the top of the page.

The site is built in [TypeScript](https://www.typescriptlang.org/) with [React](https://reactjs.org/), the most popular JavaScript library in the world, using [Next.js](https://nextjs.org/), one
of the most popular React frameworks in the world and the building block for full-stack "meta" frameworks like [RedwoodJS](https://redwoodjs.com/) and 
[Blitz](https://blitzjs.com/). The user interface itself is crafted with the ever popular [Tailwind CSS](https://tailwindcss.com/),
a powerful "utility-first" library that lets you compose your styles into higher-level abstractions that you apply across your user interface
to give a consistent look and feel.

If you would like to implement Dark Mode on a Next.js site using TailwindCSS, let me show you how. It involves three key pieces:

* Tailwind's `dark` class
* The `Script` tag that we got in Next.js 11
* Understanding, like really understanding, React's `useEffect` and `useContext` hooks

## Activating Tailwind's Dark Mode Support

Tailwind CSS offers [two ways to set Dark Mode](https://tailwindcss.com/docs/dark-mode). If you are content to default to system settings, then all
you need to do is confirm your `tailwind.config.js` file has the `media` setting, which uses the `prefers-color-scheme` [CSS media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme):

~~~js
// tailwind.config.js
module.exports = {
  darkMode: 'media',
}
~~~

But since we want more control to let the users of our Vidya website decide which look they prefer, we need the `class` setting instead:

~~~js
// tailwind.config.js
module.exports = {
  darkMode: 'class',
}
~~~

Now you need to handle variants like [the TVA in Loki](https://www.gamesradar.com/loki-lady-loki-kid-loki-king-loki-disney-plus/).
[Variants in Tailwind](https://tailwindcss.com/docs/configuring-variants) define the ways in which you want to apply different styles.
For example, if we want to set a red background on a link hover, we apply the `hover` variant on the `bg` plugin: `<a className="hover:bg-red">`.

As an aside, the CSS equivalent would be this for our shade of red:

~~~css
a:hover {
  background-color: #9C4D61;
}
~~~

We will do similar to apply `dark` variants of our branding scheme throughout our interface. For example, here is a simplified
version of our `contact-us` class composing numerous Tailwind utilities in Next.js's `globals.css` file:

~~~css
.contact-us {
        @apply dark:text-red dark:hover:text-blue bg-red dark:bg-red-light hover:bg-blue-dark dark:hover:bg-blue-light;
}
~~~

Note that you always put `dark` first when you have multiple variants like `dark:hover:bg-blue-light`.

This is where you will spend most of your time. Mostly because you want to put together a Dark Mode color palette that is usable 
and accessible and consistent with your branding and because you want to be thorough in applying it to all your elements.

Just remember to [extract components](https://tailwindcss.com/docs/extracting-components) as we did above to keep things maintainable, consistent, and organized.

Because we are relying on the Tailwind `class` setting for Dark Mode, we need to figure out a way to hook the `dark` class onto the
root element of the page like this:

~~~html
<html lang="en" class="dark">
...
</html>
~~~

And we need to be able to do it on demand. This is where our code comes into play.

## The Script Tag

If you've built a website with a lot of client side domain functionality, GDPR or other consent management, Google Analytics, social media, or ads, you already know that managing JavaScript 
execution has always been awkward. Where do you put this script on the page relative to that one? Do you put this script at the top of the `head` element 
or at the bottom of the `body` element? It's actually easier figuring out where to seat everyone at your wedding.

In v11.0.0, Next.js introduced the `Script` [tag](https://nextjs.org/docs/basic-features/script) tag, and it makes all this
a lot better. You can put the `Script` tag anywhere, and you apply one of three strategies to let Next.js know when it 
should execute.

We need to execute a script to assess the user's Dark Mode preference and apply it. For this script to work, 
it must execute before the browser paints the page, so it has to block interactivity. This 
contradicts everything you've ever read about script optimization. Conventional guidance dictates scripts should run in an
asynchronous, parallel fashion in order to maximize [Web Vitals](https://web.dev/vitals/) and get the user up and running as soon 
as possible. That general guidance is accurate, but we need to make an exception for this particular script. It must 
execute quickly, or we will lose customers.

Our strategy for implementing Dark Mode will factor in potential user preferences specific to the Vidya website set in `localStorage`,
a [key-value store available in modern browsers](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage),
and/or system settings that the browser will tell us with `prefers-color-scheme`. The algorithm goes like this:

*If the user previously visited the Vidya website and indicated a preference for Dark Mode OR if there is no preference established
and system settings are set for Dark Mode, then activate Dark Mode by attaching the dark class attribute to the root. Otherwise, 
apply Light Mode by removing any dark class attribute.*

Here is the script:

~~~js
if (localStorage.getItem('vidyaDarkMode') === 'true' || (!('vidyaDarkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}
~~~

That's a straightforward conditional and DOM manipulation. That should be fast. Phew!

And here is how we execute it before browser paint with Next.js's `Script` tag inside our `_app.tsx`:

~~~js
<Script strategy="beforeInteractive" src="/scripts/darkMode.js"/>
~~~

The `beforeInteractive` strategy is the key. This tells Next.js to block everything until the script is finished. Again, 
you need to use this strategy very carefully, but there is no way around it in this instance.

So thanks to Tailwind CSS and Next.js, we can successfully apply Dark Mode based on user preferences one way or another.
The last step is to give the user a chance to switch modes on the website.


