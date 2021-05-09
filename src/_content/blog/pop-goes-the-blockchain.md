---
author: "Neil Chaudhuri"
title: "POP Goes the Blockchain"
date: 2018-03-11T13:31:40-04:00
description: "Blockchain has great potential, but there are significant obstacles in its path to world domination."
image: "/img/blog/blockchain.jpeg"
tags: 
- Cryptography
- Go
- Java
- Kotlin
- Bitcoin
- Solidity
categories:
- Blockchain 
- Big Data
- Government
- Programming
- Testing
- Security
- Cloud Computing
- Software Engineering
- Open Source
- Microservices
aliases:
- /blog/2018/03/11/pop-goes-the-blockchain/
---

[Blockchain](/categories/blockchain). 

I can probably stop here. Merely having the word on the Vidya site will increase blog readership more than if I posted a deleted scene from 
[Black Panther](https://www.youtube.com/watch?v=xjDjIWPwcPU).

There are already thousands of thought pieces explaining Blockchain, how it will revolutionize commerce, how it will
transform the Internet. There is even a company whose decision to add *Blockchain* to its name led to a [600% stock surge
and a financial windfall for its CEO](https://www.cnbc.com/2018/01/02/ceo-of-soaring-blockchain-stock-sells-about-870000-worth-of-the-shares.html)!

And after all that and an entire decade of obsession with Bitcoin, almost no one knows what blockchain is and why it matters. 
I won't be able to fix that today, but that isn't my goal. My goal is to help you understand why y'all need to slow your roll. 
Blockchain has great potential, but there are significant obstacles to address if it is to emerge from basements and 
garages to prove it is ready for prime time after all these years. 

Those obstacles are *Performance, Openness, and Privacy*. POP! Let's understand why Blockchain must address these concerns
to become mainstream and how they are a microcosm of critical paradoxes we continue to wrestle with as a society.

## A Brief Blockchain Explainer

A blockchain is an immutable, append-only list of transactions among parties on a peer-to-peer network of computers. While 
our ancestors conducted business by going to the bank or the post office, there is no central authority
on a blockchain, which means that incompetence or malice won't compromise everyone (Like what happened with, not
to call out anyone by name, but something that rhymes with [Requifax](https://www.cnbc.com/2017/09/07/credit-reporting-firm-equifax-says-cybersecurity-incident-could-potentially-affect-143-million-us-consumers.html)).

Parties conduct business directly with each other according to rules agreed upon by the network, and 
the transactions are recorded to varying levels of detail by everyone on the network 
([full nodes and light nodes](https://bitcoin.stackexchange.com/questions/48436/what-is-the-meaning-of-the-term-full-node)). 
Think of a transaction as a row on 
a spreadsheet. A block is a fixed amount of transactions--like a single worksheet while the blockchain is the entire Excel workbook. 

Central authority is replaced by computer science and computer hardware. When a block reaches capacity, 
"[miners](https://www.coindesk.com/information/how-bitcoin-mining-works/)" race to achieve consensus that all the transactions 
on that block are legitimate according to a 
[consensus protocol](https://www.coindesk.com/short-guide-blockchain-consensus-protocols/). In its most common form originated by Bitcoin, 
[proof-of-work](https://keepingstock.net/explaining-blockchain-how-proof-of-work-enables-trustless-consensus-2abed27f0845),
mining invests significant compute power in a cryptographic problem that's hard to solve but whose solution is easy to verify.
Whoever pulls it off first gains consensus from the blockchain, 
adds the block to the ledger, gets rewarded in some currency, and serves as the standard for each
new node to join. That solution is also integral to generating a 
[hash](https://en.wikipedia.org/wiki/Cryptographic_hash_function) of the block that is recorded by the *next* block,
which is a fancy way of saying that any attempt to tamper with the transactions will be easily detectable by everyone. This is
the foundation of security on Blockchain.     

Bitcoin made Blockchain famous, but Bitcoin represents one very narrow implementation of it. There
are *lots* of ways to implement a blockchain. Also, don't assume all transactions are financial. Companies are investing 
heavily in Blockchain [to manage their supply chains](https://www.forbes.com/sites/stevebanker/2018/02/22/the-growing-maturity-of-blockchain-for-supply-chain-management/#73677f5a11da),
where transactions are goods bought or shipped or sold. In an online voting blockchain, transactions 
could be votes. In biotech, transactions could be [genetic sequences](https://www.coindesk.com/intel-proposes-genetic-sequencing-system-on-a-blockchain/). 
In communities ravaged by war forcing refugees to seek asylum elsewhere, transactions could be 
[life events as proof of identity](https://www.wired.com/story/refugees-but-on-the-blockchain/).

You are only limited by your imagination.  

That was a lot, and even still I barely scratched the surface. If you want more, check out the work of Blockchain experts like 
[Preethi Kasireddy](https://twitter.com/iam_preethi), [Subhan Nadeem](https://twitter.com/subhannadeem19?lang=en),
and [Daniel van Flymen](https://twitter.com/van_flymen) along with [Blockchain podcasts from Software Engineering Daily](https://softwareengineeringdaily.com/?s=blockchain).

**So the ideas are transformative; the tech is cool; and big institutions in government and industry abuse our trust all the time. 
What's the problem?**

## Performance: Blockchains are slow and use a lot of energy

Absent an ostensibly responsible central authority, Blockchain combines [cryptography](/tags/cryptography/) and 
clever data structures like [Merkel trees](https://medium.com/@evankozliner/merkle-tree-introduction-4c44250e2da7) to build trust.
Blocks are deemed valid during the mining process by solving that complex cryptographic problem as proof-of-work. It takes time 
to solve these problems, which means that the mining process can be far slower than what users are used to in their daily 
interactions with the web. When you consider how many resources are out there dedicated to shedding every millisecond you can
off HTTP responses from a website, you realize how directly performance relates to revenue.  

Besides time, you need machines running at high intensity for a while to generate proof-of-work, and this demands more power
than a [time-traveling Delorean](https://www.youtube.com/watch?v=Nk5O6F3qwOE). In an era where even [China and India signed 
the Paris Climate Agreement](http://www.wired.co.uk/article/what-is-paris-agreement-on-climate-change), sustainability matters.
This means Blockchain will have to become much more efficient to make 
[Richard Hendriks's vision](https://www.youtube.com/watch?v=peDBpDXdzuA) a reality. 

(Watch [Silicon Valley](https://www.hbo.com/silicon-valley). Seriously.)

[Ethereum](https://www.ethereum.org/) addresses proof-of-work scalability with a consensus protocol called [proof-of-stake](https://hackernoon.com/what-is-proof-of-stake-8e0433018256),
but even if that helps, there are memory considerations. All nodes on a blockchain contain the entire ledger of transactions,
which can get into the terabytes for full nodes in a real-world application. Transactions are executed
by [smart contracts](https://blockgeeks.com/guides/smart-contracts/) written in the [Solidity](https://github.com/ethereum/solidity)
programming language. In order to keep matters between the parties involved, a smart contract needs to maintain state--
everything there is to know about how the contract is executed. You store that state 
in [memory on the Ethereum Virtual Machine using the Solidity API](https://solidity.readthedocs.io/en/latest/frequently-asked-questions.html#what-is-the-memory-keyword-what-does-it-do).
As contracts become more complex and store more data--and developers possibly mismanage memory like in the old C++ days--memory 
can be a concern along with compute.

## Openness: Blockchain lacks standards, needs tooling, and must avoid a class system

I am using the term *openness* as an umbrella for three ideas: defining open standards to support transactional 
integrity and interoperability among blockchains,
accessibility of blockchain development for software engineers via open and powerful tools, and maintaining parity 
among nodes on the blockchain to facilitate open competition among nodes.

#### Open standards

Every transformative technology emerges from open standards. The Internet has HTTP, SMTP, FTP, JSON, XML, and on and on; databases have SQL.
Blockchain needs the same to thrive. The problem is that both the community and the technology underlying Blockchain are antithetical
to centralized governance. It is a solvable paradox, but I question whether the community even sees this as a problem. The 
[Ethereum Foundation](https://www.ethereum.org/foundation) is a one small step in that direction. 

Once-powerful  companies like Oracle, IBM, and SAP--basically the [Celebrity Big Brother](https://www.cbs.com/shows/celebrity-big-brother/) 
of tech--are rushing to get back on
the A-list by embracing Blockchain and glossing over the closed nature of their proprietary, fragmented solutions. Once
upon a time, [Service-Oriented Architecture (SOA)](http://www.opengroup.org/soa/source-book/soa/p1.htm) was a legitimate, powerful
concept whose hype motivated vendors to sell overengineered solutions to doe-eyed customers desperate to appear visionary only
to find themselves locked into heavyweight, proprietary products. And SOA had far more standardization than Blockchain.
Today people are more scared to utter "SOA" than they are "[Voldemort](https://daviesnow.files.wordpress.com/2016/01/img_1031.png)" 
despite its vindication by modern [microservices](/categories/microservices) architectures.   

I worry the same fate could befall Blockchain.

#### Open tooling

Blockchain also needs to be open to developers to build mindshare and excitement--perhaps 
ultimately even create so many Blockchain developers they become cheap. This means as always
there needs to be tooling support for syntax checking and debugging along with automation of all the software engineering tasks 
we have come to appreciate over the last 
decade or so of [agile software development](/categories/agile/): [testing](/categories/testing/), 
[static analysis](https://www.owasp.org/index.php/Static_Code_Analysis), 
[continuous integration](/categories/continuous-delivery/), and [continuous delivery](/categories/continuous-delivery/). 
Blockchain tools are strewn about the landscape--[the MetaMask Chrome plugin](https://metamask.io/), the 
[Mist browser](https://github.com/ethereum/mist), an alpha-stage [Solidity plugin](https://github.com/intellij-solidity/intellij-solidity)
for IntelliJ, and various language-specific clients like [Go Ethereum](https://geth.ethereum.org/). Despite the passion
behind these initiatives, they are all very immature.

Given these barriers, it is no surprise that as of this moment there are over 1000 times more [Java](/tags/java) questions on 
[Stack Overflow](https://stackoverflow.com/)
than there are Blockchain questions. The comparison is flawed to be sure, but that many orders of magnitude illustrates the point
given that Bitcoin has been around for a decade.

#### Open competition

Just as centralized governance runs at odds with an architecture and community suspicious of centralization, so too 
should the possibility of the emergence of a class system among nodes in a blockchain. Given the resource-intensive nature
of proof-of-work, only  machines endowed with sufficient memory and processing power can act as miners. This could theoretically
(though improbably) lead to a [51% atack](https://www.investopedia.com/terms/1/51-attack.asp), and the few who can afford 
that kind of power will dominate. Meanwhile, 
only nodes endowed with sufficient collateral can place winning bets in proof-of-stake. This leads to a 
"[rich get richer](https://hackernoon.com/is-proof-of-stake-really-the-solution-2db68487f4ba)" scenario. In both cases,
you build a class system where certain nodes become dominant and potentially pernicious--analogous to 
the economic phenomenon Progressive- and New Deal-era
reforms in the United States were designed to address through the very centralized institutions whose failures
motivated the birth of Bitcoin.

All of this can lead you down the rabbit hole of pedantic economics debates on Facebook and Reddit that inevitably devolve into
[which user is most like Hitler](https://en.wikipedia.org/wiki/Godwin%27s_law). The point is Blockchain needs to 
devise a consensus protocol that balances decentralization with equality of opportunity if not necessarily in outcome.  


## Privacy

Security and privacy aren't the same; locking the door doesn't stop anyone from seeing what's inside. Blockchain
is similar. The clever computer science in place to *secure* transactions doesn't obfuscate them. Needless to say, Blockchain
is a nonstarter as a pervasive technology if it can't solve the privacy question.
 
Bitcoin is totally unencrypted; as there is a finite number of Bitcoins, it is necessary to trace a Bitcoin's history through
the blockchain. The flaws in its pseudonymity apparatus were exposed when 
[American federal agents 
traced Bitcoin transactions to the nefarious parties involved in illegal drug trafficking on Silk Road](https://www.wired.com/2015/01/prosecutors-trace-13-4-million-bitcoins-silk-road-ulbrichts-laptop/). 
(Note here again Blockchain lies at the center of a broader 
debate--in this case, the right to privacy vs. the empowerment of law enforcement). Similarly, everything about a smart
contract in Ethereum is public; you have to handle encryption yourself to hide the details from prying eyes.      

There are a lots of ideas out there for solving this problem with [Zcash](https://z.cash/) arguably the most promising.
Zcash is a cryptocurrency that offers privacy through even more clever cryptography 
in the form of [zero-knowledge proofs](https://en.wikipedia.org/wiki/Zero-knowledge_proof). Another compelling alternative
is [Corda](https://github.com/corda/corda), an [open-source](/categories/open-source/) "Blockchain for business" written
in [Kotlin](/tags/kotlin) that makes privacy (along with interoperability and [tooling](https://docs.corda.net/getting-set-up.html)) 
a first-class citizen. Various vendors offer proprietary solutions as well.

To echo a previous point, standards related to privacy would sure come in handy here. 

## ******


Blockchain has been around for a decade and only just now is emerging as a compelling solution for everything from
banking to health care to improving the taste of fat-free ranch dressing. Until Blockchain learns the lessons of the past and
resolves its own inherent paradoxes, we will not realize the true potential of this otherwise transformative technology
if enough early adopters get burned to turn off future ones.






  




