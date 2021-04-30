---
title: "The Signal and the Noise"
date: 2017-11-05T11:31:39-05:00
description: "One senator made a great effort to hold social media accountable for 2016. We need more."
youtube: LCIGT4FWQ9Y
banner: "img/banners/frankenstretch.jpg"
draft: false
tags:
- Facebook
- Scala
categories: 
- Big Data
- Programming
- Social Media
---

Recently attorneys for Facebook, Twitter, and Google were called before the Senate Judiciary Committee to answer for the
role their companies played in amplifying the messages from Russian actors that influenced the 2016 American 
Presidential election. The details surrounding this issue have profound consequences for the nation politically, 
geopolitically, culturally, financially, legally, and technologically. Vidya is a technology company, so let's focus only on that last 
one and leave it to others to address the rest.

The most memorable part of the hearing was a heated exchange between [Senator Al Franken (D-Minnesota)](https://www.franken.senate.gov/)
and Facebook General Counsel Colin Stretch: 

{{< youtube LCIGT4FWQ9Y >}}

Senator Franken, who has not lost the sarcasm and timing that made him a great satirist, clearly was annoyed with 
Mr. Stretch for his refusal to accept the proposition that payment in foreign currency for ads pertaining to American elections
is a clear indicator of something nefarious. The reason? As Mr. Stretch put it:

> The currency signal...it's very easy to manipulate.....The reason I am hesitating on foreign currency is that it is 
relatively easy for bad actors to switch currencies. So it's a signal, but it's not enough.


It's interesting that Mr. Stretch (and his fellow witnesses) would use data science jargon like *signal* before
the committee. A signal is a dimension of your data set that offers predictive value for the outcome you're tracking. 
Everything else is *noise*. For example, if you are trying to predict who will win a game, the records of the teams 
is a reasonable signal; the lengths of the first names of the best players on each team, not so much. At a high level, 
data science is largely about separating signals from noise and then measuring the degrees to which each signal influences the outcome.
So according to Mr. Stretch, while the form of currency used to pay for an ad on Facebook is a signal, it is only 
definitive in combination with other signals and therefore shouldn't factor alone in any decisions by Facebook. 

That statement is true. It also avoids Senator Franken's question while leaving Facebook with wiggle room. This is [an attorney
who earns every penny](https://www.youtube.com/watch?v=ONKi-dShzSs).

Let's cut through the obfuscation because the core of this is really quite simple. It's true that bad actors 
can hide intent by choosing the appropriate currency for the country where they wish to advertise. As Mr. Stretch 
suggests, merely paying in dollars to advertise in an American election doesn't reveal much about the advertiser.

But what about *paying in rubles or won to advertise in an American election*? Senator Franken thinks rejecting those ads should
be a no-brainer. In fact, we could generalize his thinking beyond the United States with an algorithm expressed in trivial 
[Scala](/tags/scala)-ish pseudocode:

`if (ad currency == country currency) analyzeFurther() else NOPE!`

As it turns out, you don't even need data science to have rejected many ads on social media from the 2016 campaign season--just a raw comparison of data elements.
That may have been the source of Senator Franken's frustration. Of course if the condition is `true` (*e.g.* an 
American campaign ad is paid for with American currency), you need 
real analytics to refine a model that predicts whether the ad is funded by a bad actor, but *can't we at least reject 
outright all the obvious bad actors who don't even try to hide their intentions and can be identified with no analysis at all*? 

Mr. Stretch managed to [dodge, duck, dip, dive, and dodge](https://www.youtube.com/watch?v=GQqkQKde_kU) long enough to avoid
that question as Senator Franken ran out of time. No other senator followed up. It was a clever tactic by Mr. Stretch to 
use a particular scenario where currency is an inconclusive signal as cover for *all* cases and run out the clock. 
As a result Facebook and its brethren escaped the hearing without any commitment to rejecting political ads plainly 
funded by foreign currencies. None of these companies want to tell their shareholders they're abandoning significant revenue, 
and they don't want to say anything that could open them up to legal action. But as I said earlier, let's leave matters of 
finance and law to others.

Technology continues to move faster than the speed of law as its grip on every aspect of our lives grows tighter, but it 
remains a black box to the very people who need to understand it. Senator Franken made a valiant effort to hold social 
media accountable for their actions during the 2016 elections, but until politics and law make the effort to discern 
signals from the noise produced by large tech companies, their [unchecked influence will have continuously greater repercussions for 
all of us](https://www.youtube.com/watch?v=b23wrRfy7SM). 







