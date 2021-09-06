---
title: "Vidya Reloaded"
author: "Neil Chaudhuri"
date: 2017-09-10T17:38:04-04:00
description: "Our new website is a Progressive Web Application. Here's why that's cool."
image: "/img/blog/matrix.jpg"
categories:
- Mobile
- Accessibility
- Open Source
- Security
- Testing
tags:
- Go
- Java
- Hugo
- PWA
- JavaScript
- React
- VueJS
- Android
- iOS
---

Welcome to the first new post on our brand new website! Thank you for checking it out.

At Vidya we pride ourselves on embracing emerging technologies and helping our clients leverage them to realize their
potential. This website proves we practice what we preach. We built it with [Hugo](https://gohugo.io/),
a stunningly fast static-site generator built on Google's popular Go programming language, which continues
to shoot up the [Tiobe Index](https://www.tiobe.com/tiobe-index/go/). 

As great as Hugo and Go are, the really cool thing about our new website is that it is a Progressive Web Application (PWA).
The kids love PWAs. We identified PWAs as a "trend in software engineering" in our [last talk](/blog/speaking-at-code-writers-workshop-2017/).
Google, Twitter, Starbucks, Pinterest, Alibaba, Microsoft, and numerous other mom-and-pop shops have invested in PWAs, and a quick 
Google search will show you why. 
Henrik Joreteg's [ode to PWAs](https://joreteg.com/blog/betting-on-the-web) is very informative, but since 
his post is so long it might cause your mobile carrier to 
[throttle your data](https://www.engadget.com/2017/08/22/verizon-video-throttling-net-neutrality-unfair-to-customers/), 
here is an explanation that is less long. 

## PWAs are the future of the mobile web.

[Originating at Google](https://developers.google.com/web/progressive-web-apps/), PWAs are built like any other website (*i.e.* with HTML, CSS, and JavaScript), but they are endowed
with [service workers](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) that allow mobile users
with supporting browsers (more on this later) to enjoy a rich, native-app-like experience. Service workers use JavaScript `Promises` to 
enable push notifications and caching for rapid and offline access. They can access native hardware as well to varying degrees by browser. 

A PWA also enables mobile users to add a home screen icon like a native app. Henrik dismisses that as a "glorified bookmark," but I think 
that's cool. Eye candy or not, one day we will be able to set permissions for PWAs, view their battery consumption,
and do other things we take for granted with native apps. [WebAPKs](https://www.xda-developers.com/webapks-chrome-nightly-builds/)
are just starting to enable this on Android.

From a business perspective, [mobile traffic exceeded desktop traffic for the first time in late 2016](http://gs.statcounter.com/press/mobile-and-tablet-internet-usage-exceeds-desktop-for-first-time-worldwide),
so the speed and offline availability of PWAs are attractive. Mobile consumers are the most loyal but are also downloading fewer apps.
PWAs reconcile those trends by bringing customers to your business as directly as possible--without hops to an app store and waiting 
for downloads and installations--and improving their experience once they arrive. Consequently, businesses like [Alibaba](https://developers.google.com/web/showcase/2016/alibaba) are seeing huge increases in conversions through PWAs.

From a developer perspective, [Create React App](https://github.com/facebookincubator/create-react-app), which builds 
a scaffold for getting started with React, creates PWAs by default, so Facebook is on board. PWAs in Vue are
similarly made possible by the [vue-cli](https://github.com/vuejs/vue-cli). Developing a PWA also forces you to think about
security *from the start*. Service workers are very powerful, and [with great power comes great responsibility](https://www.youtube.com/watch?v=b23wrRfy7SM). 
A man-in-the-middle could 
use them [to do a lot of bad things](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers#you_need_https) to your PWA. 
PWAs therefore *require* HTTPS. Don't worry. Things work fine 
when you're developing on `localhost`. When it comes time to deploy to production, many leading hosts offer 
automated, one-click HTTPS. If they don't, you can use [Let's Encrypt](https://letsencrypt.org/) to create and deploy 
your own [TLS certificates](https://www.globalsign.com/en/blog/ssl-vs-tls-difference/) for free. Besides, PWA or not, [Google is making you move to HTTPS anyway](https://seo-hacker.com/google-adopt-https/).
Finally, you can test your PWA by using [Lighthouse](https://developers.google.com/web/tools/lighthouse/) either from the 
command line or as a Chrome plugin. Lighthouse grades your PWA on its speed, [configuration](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/),
security, and accessibility
with the help of [Axe](https://www.deque.com/products/axe/).
 
As you probably figured, it isn't all roses with PWAs, and it's primarily because of browser variability. Isn't it always?
Not every browser supports service workers--notably Safari. After all,
Apple makes a lot of money from its App Store, but they will come around. I mean [Microsoft Edge](https://www.thurrott.com/windows/windows-10/116101/microsoft-said-progressive-web-apps-build)
is about to roll out PWA support. Microsoft! Innovating in the browser! Still, even among progressive browsers, you have to be wary. Chrome gives
you access to the camera on the device; will Edge? You have to be mindful of what your [target browsers can do](https://whatwebcando.today/).
Also the tooling is in its infancy. The more complex your PWA (*e.g.* the more static assets to
cache and/or the more frequent your updates and pushes) the more you will need good tools to help. 

It always takes time to sort out browser issues. But just as browser applications all but overtook native desktop applications
from when [The Fresh Prince originally aired](https://www.thesun.co.uk/tvandshowbiz/4164081/the-fresh-prince-of-bel-air-to-return-with-will-smith-20-years-after-it-last-aired-according-to-jazzy-jeff/),
you can bet on the web to win once again and overtake native mobile applications as well.

We are excited that we could take a step toward that future with our new website. Please check it out and [let us know what you think](/contact/).


