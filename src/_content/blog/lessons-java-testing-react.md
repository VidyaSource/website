---
author: "Neil Chaudhuri"
title: "Lessons from Java for Testing in React"
description: "See how years of testing in Java have taught us lessons you can apply to improve your testing in React."
image: "/img/blog/react.png"
date: 2018-10-21
gist: true
tags:
- React
- JavaScript
- Java
- TypeScript
- Elm
- Webpack
- RxJS
- ImmutableJS
- JUnit
categories: 
- Agile
- Software Engineering
- Programming
- Testing
- Continuous Integration
aliases:
- /blog/2018/10/21/lessons-from-java-for-testing-in-react/

---

Have you found that your code has a lot of bugs even though you've invested in maintaining 90% code coverage? Have you also
found that your tests break so often that you don't want to write any more?

I have. With multiple clients.

Part of the problem is [code coverage is a misleading indicator of quality](http://blog.codepipes.com/testing/software-testing-antipatterns.html#anti-pattern-6---paying-excessive-attention-to-test-coverage). 
Even worse, you are writing tests that don't test anything except the implementation details of your code. That's almost worse than writing no tests
at all.

This has really hit me as I learn to write tests for [React](/tags/react). My career has been built primarily on [Java](/tags/java), 
[Scala](/tags/scala), [Ruby](/tags/ruby), and [Python](/tags/python)--*i.e.* backend development.
Over the years I have written a lot of [JavaScript](/tags/javascript) too, but we are taking it to the next level and enduring some growing pains as 
we migrate the front end of a [Scala application we built for a client](/blog/2018/08/10/welcoming-ninaday/) to React 
(with all the trimmings--[Webpack](/tags/webpack), [TypeScript](/tags/typescript), [RxJS](/tags/rxjs), [Immutable.js](/tags/immutablejs), *etc.*). 
React is spearheaded by Facebook and fortified by a vibrant community, so I assumed a consensus on patterns and practices. 

Nope!

*How do you reuse code in React?*
React developers will endorse anything from  [mixins to higher-order components to render props](https://www.richardkotze.com/coding/hoc-vs-render-props-react).

*How do you manage complex state in React?*
React developers will endorse anything from 
[Flux to Redux to MobX](https://codeburst.io/mobx-vs-redux-with-react-a-noobs-comparison-and-questions-382ba340be09) to 
simply [RxJS](https://news.ycombinator.com/item?id=15625858).

I've even seen things get contentious. We are approaching the point where magazines advise couples on first dates 
to avoid discussing politics, religion, and React state management preferences.

Testing in React is no different--no consensus on "best practices." Luckily though my experience testing on the server 
offers insight that significantly clarifies things for me.

## Kent Saves Us When Superman Can't

You will find that one consistent voice of reason emerging from the cacophony of React advice is 
[Kent C. Dodds](https://blog.kentcdodds.com/) (KCD), Paypal engineer and React expert. The Notorious KCD is 
the new "[King of All Media](https://en.wikipedia.org/wiki/Howard_Stern)" with great content on his blog, at conferences,
on podcasts, and all over social media. 

I have found KCD's insights particularly useful in the area of React testing, and I recently came across his 
[commentary on "shallow rendering,"](https://blog.kentcdodds.com/why-i-never-use-shallow-rendering-c08851a68bb7) a popular 
testing paradigm in the React community. Like pretty much everything else in React, shallow rendering is controversial, 
and KCD did not mince words in expressing his disdain for it. His take is a corollary of his even more controversial take that 
[most tests should be integration tests](https://blog.kentcdodds.com/write-tests-not-too-many-mostly-integration-5e8c7fff591c).

It turns out I agree with KCD on shallow rendering, but I come to the same conclusion via an entirely different rationale 
based on my experience with testing on the server. Please take a moment and read KCD's posts so you can understand shallow 
rendering, his sample code, and his rationale as it relates to the distinction between unit and integration testing.

Take your time. [I'll wait](https://www.youtube.com/watch?v=E3iVVCttwPw).

## Lessons from Java

As you see in his post, KCD's example focuses on a `HiddenMessage` component that contains a `Fade` component that in turn
contains a `CSSTransition` component. A test based on shallow rendering would essentially "turn off" `Fade` and 
`CSSTransition`, and KCD maintains that makes the test pointless because it yields both false positives and false negatives.
It does nothing to confirm the quality of `HiddenMessage`. Instead, he argues "unit testing" that only
renders the top-level component should be 
replaced with "integration testing" where the top-level component is rendered with [Jest](https://jestjs.io/en/)
mocks of its internal components.

I completely agree with KCD that shallow rendering is useless but for a completely different reason. We can look to Java
for insight. Here is an analogous implementation of `HiddenMessage` in Java.

~~~java 
public class HiddenMessage extends Component {
  private boolean show = false;
  private Fade fade;
  
  public HiddenMessage(Children children, Props props) {
    fade = new Fade(children, props);
  }
  
  public void toggle() {
    this.show = !this.show;
  }
  
  public String render() {
    return
      "<div>
        <button onClick={" + this.toggle() + ">Toggle</button>" + 
        fade.render() +
      "</div>";
  }
  
  public static class Fade extends Component {
    private CSSTransition cssTransition;
    
    public Fade(Children children, Props props) {
      cssTransition = new CssTransition(children, props, 1000, "fade");
    }
    
    public String render() {
      return cssTransition.render();
    } 
  }
  
  public static class CSSTransition extends Component {
    private Children children;
    private Props props;
    private int timeout;
    private String className;
    
    public CSSTransition(Children children, Props props, int timeout, String className) {
      this.children = children;
      this.props = props;
      this.timeout = timeout;
      this.className = className;
    }
    
    public String render() {
      return 
        "<CSSTransition" + " " +  props + " " + timeout + " " + className + ">" + children + "</CSSTransition>"
    }
  }
}
~~~

I would say this faithfully represents the relationship among the three components albeit with Java idioms. `Fade` and 
`CSSTransition` only exist within the context of `HiddenMessage`. Clients have no direct access to those internal components.
The components themselves are therefore defined as `private static` classes within `HiddenMessage`; instances are marked `private` 
within `HiddenMessage`. 

A quick aside: *I recognize that this makes for unorthodox Java code, but the goal here is to reflect the intent of the
React component `HiddenMessage` as accurately as possible in a "Java way."* 

Now look at this and imagine a test for `HiddenMessage` where `Fade` and `CSSTransition` are disabled into no-ops. All you do is render
a button that proves you can toggle a flag. [Who cares?](http://i.qkme.me/3q4n8o.jpg). 
There is so much more to `HiddenMessage` we never explore. Such a test offers no insight into 
whether `HiddenMessage` really works.
 
So yes, it is pretty clear shallow rendering is not helpful just as KCD argues.

But for him, this is proof that [Guillermo Rauch was right all along](https://twitter.com/rauchg/status/807626710350839808): 
"integration testing" beats "unit testing."

For me, the key insight I gleaned from looking at the Java analogue of `HiddenMessage` is not about the dichotomy 
between unit and integration testing, a 
[controversy fraught with baggage](https://stackoverflow.com/questions/4904096/whats-the-difference-between-unit-functional-acceptance-and-integration-test/4904533#4904533)
because no one can even agree on how we define those terms to begin the conversation, but about why we test at all. 

We write tests because we want to create something like a lab experiment--a controlled environment where we see how our code
behaves when it is exercised just as clients will in production. It is a precondition that your code is initialized to some "ready state"
so it can satisfy the public API contract it has with its clients. In Java, you typically accomplish that
with a constructor (that may throw `IllegalArgumentException` if necessary) into which mock or stub dependencies are injected 
in test code to achieve the control we need--though [some say that's a smell in itself](https://www.youtube.com/watch?v=EaxDl5NPuCA). 

In the Java version of `HiddenMessage`, you have to 
[work a little harder to mock the dependencies](https://stackoverflow.com/questions/36173947/mockito-mock-private-field-initialization) 
because they are private implementation details. Most Java developers would correctly find this awkward and smelly, but any
`HiddenMessage` test is worthless if it isn't supplied the tools it needs one way or another to satisfy its API contract. 
Shallow rendering fails because it eschews this basic concept--not because it proves
integration tests beat unit tests.

## So what now?

The whole point of mocks and stubs is to supply the code you're testing with dependencies it needs to fulfill its contract 
in a way that's deterministic so we have the control and predictability every experiment needs. Applying idioms from testing 
in Java can inspire you to consider any combination of these approaches for testing in React:

* Use Jest as KCD recommends to mock components and side effects like REST calls just as a Java 
developer uses Mockito.
* Use props to mimic constructor injection of mocked or stubbed dependencies. In fact, [render props](https://reactjs.org/docs/render-props.html), 
which are now *en vogue* for sharing React components, essentially enable constructor injection of components. You can supply
any component you want to a render prop in your test. 
* [Use the functional nature of JavaScript to your advantage](/blog/2018/09/18/the-business-case-for-functional-programming/) in testing.
For example, REST calls are the most common side effects in JavaScript programming, 
and using TypeScript you could have a function prop `fetch: (s: string) => Promise<string>` to represent a REST call returning JSON.
In your test, you supply a stubbed implementation like `(s: string) => { Promise.resolve({id: 5}) }` while your 
production code supplies a function with the same shape that makes real REST calls. This is analogous in Java to having a 
constructor parameter of type `Function<String, CompletableFuture<String>>` that you stub with 
`(s) -> CompletableFuture.completedFuture({id: 5})` in your [JUnit](/tags/junit) tests. In either case, no mocking library is needed.

Or...moving away from Java, stop being scared and 
[embrace the Haskell-like idioms in Elm](https://package.elm-lang.org/packages/ryanolsonx/elm-mock-http/latest/).

I prefer eschewing a third-party mocking library. For one thing, that's one less 
dependency. More importantly, it makes your tests more durable as you avoid expectations about the implementation details
of your component, which will change all the time. Focus on the intent of your code and its collaborators rather than the inner workings.

Don't mistake a preference for a rule though. Despite the [absolutist language](https://www.youtube.com/watch?v=wgpytjlW5wU) 
in many programming blog posts out there, each approach has pros and cons. Nothing is all good or all bad. Keep all
these options on the table--even the shallow rendering and [snapshot testing](https://jestjs.io/docs/en/snapshot-testing) that neither KCD nor I really likes, 
and choose the one that balances the time it takes to write a test with your level of confidence in the quality and 
durability of the outcome. You will likely find a blend of these approaches works best.


## Conclusion

It's great to see we have evolved from debating whether testing is necessary to debating how best to do it. As full stack
engineers--equally adept at building efficient services as elegant user interfaces--become more common, it makes sense
to leverage knowledge across domains. I'm no expert at testing in React, and I welcome the opportunity to integrate as much as I can from
experts like KCD with my own experience testing on the server in languages like Java where we have tackled many of the same
issues. I hope to see for myself which strategies work best to solve various problems in testing in React. 

There will always be debate. If nothing else, let's agree to focus on API contracts rather than implementation details and 
keep things simple so we don't lose as many weekends refactoring tests every time a client wants a new feature.

