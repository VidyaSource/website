---

author: "Neil Chaudhuri"
title: "Clowns to the Left of Me, Jokers to the Right"
description: "The caricature of the TSA Randomizer was ripe for mockery, but the reality is complicated."
banner: "img/banners/stuck.jpg"
date: 2016-04-25
tags:
- Scrum
- iOS
categories: 
- Government
- Agile
- Project Management
- Software Engineering
- Testing
- Mobile
- Security
- Accessibility
aliases:
- /blog/Agile/Scrum/Projects/Testing/Mobile/iOs/2016/04/25/clowns-to-the-left-of-me-jokers-to-the-right
---

[News broke recently](http://gizmodo.com/tsas-1-4-million-app-takes-about-10-minutes-to-build-1769084655) that the 
Transportation Security Administration (TSA) contracted the development of an iPad app called the 
[Randomizer](https://www.youtube.com/watch?v=P_KmFJ2gGzw) that eliminates any hint of profiling by airport security by simply 
directing travelers according to an arrow onscreen that randomly points left or right. That's it.

No, really. An arrow that points left or right. At random. Over and over.

The cost? $1.4 million.

Yes, that's dollars.

Naturally, the Internet sprung into outrage. “OMG! $1.4 million?!!! For *THAT*???”
I get it. That cost is absurd for what amounts to nothing more than a dream job for [Two-Face](http://batman.wikia.com/wiki/Two-Face).

The reaction was predictable. Add four cups of a smug Internet eager for an easy target, two cups of implicit 
assumption of widespread government waste, one cup of pervasive TSA resentment for making you take off your shoes when you're running late, 
two tablespoons of a technology  
everyone can understand, and one teaspoon of government contracting complexity, and you have a recipe for perfect Internet 
outrage. The app was [so simple](https://www.youtube.com/watch?v=6GEpqmPL3bg) and the story so easy that 
*[The Late Show with Stephen Colbert](https://grabien.com/file.php?id=86239)* and 
*[The Daily Show with Trevor Noah](http://www.cc.com/video-clips/e42km1/the-daily-show-with-trevor-noah-the-tsa-s-randomizer-app)* 
did bits on it. When it comes to public embarrassment, there’s bad, and then there’s late-night-talk-show-bit bad. 

Of course the truth is a lot more complicated. The first shoe to drop was that journalists completely misunderstood the contract. TSA 
clarified that the $1.4 million figure refers to the *entire* contract vehicle. The amount dedicated to the Randomizer itself 
was a mere $47,400.

But isn't that still *way* too much for an app that randomly points left or right?

Yes, but not by much and not for the reasons you might think.

In TSA’s defense, simple software development is still software development. This means you still need all the proper 
software engineering you always do, and that costs money. You still need project management software, version control, 
testing for functionality and performance and 
[security](https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10) (however few or trivial those tests are), 
continuous integration and delivery, and so on. None of that is free. Then factor in government staff like the 
[Product Owner](https://playbook.cio.gov/#play6), who is critical, and you start to see why the cost makes more sense.

Simply put, a huge problem with the Internet outrage over the Randomizer is that people, many of whom should know better, 
[can't distinguish programming from software engineering](/blog/Programming/Testing/Projects/Agile/2016/04/02/the-art-of-software-engineering).

Remember also that government isn’t a business. Despite the political rhetoric, it’s not supposed to be. Of course 
government needs to be efficient with resources and accountable to the people just as business needs to be efficient with 
resources and accountable to shareholders, but government has responsibilities far beyond that. There are safety, 
[accessibility](http://www.section508.gov/), and security regulations mandated by law. There are other legal requirements 
to promote small business and minority- and woman-owned business. These considerations still apply even when development 
is trivial like the Randomizer.

But having said all that, TSA could certainly have done better. There were several cost-saving measures at their disposal:

* Explore [GitHub](https://github.com/) for an existing open-source Randomizer or something close.
* Develop the Randomizer in-house. It's simple enough. 
* Post the desired Randomizer features on the reverse-auction 
[Micro-purchase Platform](https://18f.gsa.gov/2016/01/07/announcing-the-18f-micro-purchase-platform/) created by 
[18F](https://18f.gsa.gov/) to give developers the opportunity to deliver a working Randomizer app and to set the price. 
Then select the best bid according to both price and conformance to the specification.

If TSA had pursued any of these options, the Randomizer definitely would’ve been cheaper.     

I discussed the Randomizer with [Frank McNally](https://twitter.com/NecessitysChild), Director of Learning & Content 
Development at [Public Spend Forum](http://publicspendforum.net/). He and I have worked together to 
[revolutionize government contracting of digital services](/blog/Projects/Agile/Scrum/Programming/Testing/2015/10/24/all-we-do-is-win-win-win) 
and maximize value for American taxpayers, and he reminded me that the flawed government contracting model is likely responsible 
for inflating the cost of the Randomizer. Large vendors sink their teeth into government agencies through multiple-award 
contract vehicles and enterprise support contracts. As a result, decision makers in government lump every development 
need that comes along--no matter how trivial--into that contract model by default. After all, that’s what they paid 
for. Meanwhile, vendors are all too happy to grab that work and add their typically unnecessary overhead, and you get an inflated 
cost to procure even a simple app like the Randomizer.

So as giddy as the media, the Internet, and late night talk show hosts were to uncover this latest apparent insanity in government 
spending, it turns out what actually happened is a lot more complicated. Instead of mocking a caricature of the problem,
how about we understand it and solve it instead?

