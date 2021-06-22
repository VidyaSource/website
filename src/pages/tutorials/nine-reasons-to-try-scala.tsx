import {Page} from "../../components/Page";
import {TutorialHeadElement} from "../../components/tutorials/TutorialHeadElement";
import {TutorialHeader} from "../../components/tutorials/TutorialHeader";
import {TutorialContent} from "../../components/tutorials/TutorialContent";
import {YouTubeVideo} from "../../components/YouTubeVideo";

export const Scala = () => {
    const name = "Nine Reasons to Try Scala"
    // @ts-ignore
    return (
        <Page headElement={<TutorialHeadElement title={`Vidya | ${name}`} />}>
            <TutorialHeader category="Scala" name={name} />
            <TutorialContent title={name}>
                <div>
                    This tutorial is for intermediate-level Java developers, and developers in other languages too, who are curious about what the big deal is with the Scala programming language. We will look at nine compelling features of Scala that will hopefully impress you and inspire you to explore both the language itself and its applications.

                    If you want to skip to sections that particularly interest you, here is where you should go:
                    <ol>
                        <li>Immutability (1:13)</li>
                        <li>Traits (2:52)</li>
                        <li>Case classes (5:59)</li>
                        <li>Extractors and pattern matching (7:22)</li>
                        <li>Option (8:36)</li>
                        <li>Implicit conversion (11:46)</li>
                        <li>Parallel collections (12:46)</li>
                        <li>Futures (13:32)</li>
                        <li>Popularity (15:22)</li>
                    </ol>
                    <div>
                        If you want to skip the video altogether, <a href="https://github.com/VidyaSource/nine-reasons-to-try-scala">the source is on GitHub</a>.
                    </div>
                    <div className="pt-16">
                        <YouTubeVideo id="rbZ6GzR8B7I" title="Nine Reasons to Try Scala" />
                    </div>
                </div>
            </TutorialContent>
        </Page>
    )
}

export default Scala
