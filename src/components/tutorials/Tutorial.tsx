import {Page} from "../Page";
import {TutorialHeadElement} from "./TutorialHeadElement";
import {TutorialHeader} from "./TutorialHeader";
import {TutorialContent} from "./TutorialContent";
import {YouTubeVideo} from "../YouTubeVideo";
import {FC} from "react";

interface TutorialProps {
    title: string
    github: string
    youTubeId: string
}

export const Tutorial: FC<TutorialProps> = (p) => {
    const title = "Starting with Data: Using Python and D3 to Visualize JSON from the Donors Choose REST API"
    // @ts-ignore
    return (
        <Page headElement={<TutorialHeadElement title={`Vidya | ${p.title}`} />}>
            <TutorialHeader title={p.title} />
            <TutorialContent>
                <div>
                    <div>
                        {p.children}
                    </div>
                    <div className="py-12">
                        If you want to skip the video altogether, <a href={p.github}>the source is on GitHub</a>.
                    </div>
                    <div className="pb-12">
                        <YouTubeVideo id={p.youTubeId} title={p.title} />
                    </div>
                </div>
            </TutorialContent>
        </Page>
    )
}