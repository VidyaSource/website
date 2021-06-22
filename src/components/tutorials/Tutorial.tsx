import {Page} from "../Page";
import {TutorialHeadElement} from "./TutorialHeadElement";
import {TutorialHeader} from "./TutorialHeader";
import {TutorialContent} from "./TutorialContent";
import {YouTubeVideo} from "../YouTubeVideo";
import {FC} from "react";

interface TutorialProps {
    title: string
    subtitle?: string
    github: string
    youTubeId: string
}

export const Tutorial: FC<TutorialProps> = (p) => {
    return (
        <Page headElement={<TutorialHeadElement title={`Vidya | ${p.title}`} />}>
            <TutorialHeader title={p.title} subtitle={p.subtitle}/>
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