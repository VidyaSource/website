import {Page} from "../Page";
import {TutorialHeader} from "./TutorialHeader";
import {TutorialContent} from "./TutorialContent";
import {YouTubeVideo} from "../YouTubeVideo";
import {NextSeo, VideoJsonLd} from "next-seo";
import {useRouter} from "next/router";
import {Image} from "../Image";
import {FC} from "react";
import Link from "next/link"

interface TutorialProps {
    metaDescription: string
    title: string
    subtitle?: string
    github: string
    youTubeId: string
    tags: string[]
    uploadDate: Date
    thumbnail: Image
}

export const Tutorial: FC<TutorialProps> = (p) => {
    const router = useRouter()
    const title = `Vidya | ${p.title}`
    const fullTitle = `${title}${p.subtitle ? `: ${p.subtitle}` : ``}`
    const videoUrl = `https://www.youtube.com/embed/${p.youTubeId}`
    const thumbnailUrl = `${process.env.basePath}${p.thumbnail.url}`
    return (
        <>
            <NextSeo
                title={fullTitle}
                description={p.metaDescription}
                canonical={`${process.env.basePath}${router.pathname}`}
                additionalMetaTags={[
                    {
                        property: 'twitter:player',
                        content: videoUrl
                    },
                    {
                        property: 'twitter:player:stream',
                        content: videoUrl
                    },
                    {
                        property: 'twitter:player:stream:content_type',
                        content: "video/mp4"
                    },
                    {
                        property: 'twitter:player:width',
                        content: "1280"
                    },
                    {
                        property: 'twitter:player:height',
                        content: "720"
                    }
                ]}
                twitter={{
                    cardType: "player",
                }}
                openGraph={{
                    title: fullTitle,
                    images: [
                        {
                            url: thumbnailUrl,
                            width: p.thumbnail.width,
                            height: p.thumbnail.height,
                            alt: title,
                        }
                    ],
                    videos: [
                        {
                            url: videoUrl,
                            width: 1920,
                            height: 1080,
                            alt: title,
                            type: "video/mp4",
                            secureUrl: videoUrl
                        }
                    ],
                    description: p.metaDescription,
                    url: videoUrl,
                    type: 'video',
                    video: {
                        tags: p.tags,
                    },
                }}
            />
            <VideoJsonLd
                name={fullTitle}
                thumbnailUrls={[thumbnailUrl]}
                uploadDate={p.uploadDate.toISOString()}
                description={p.metaDescription}
                contentUrl={videoUrl}
                embedUrl={videoUrl}
            />
            <Page>
                <TutorialHeader title={p.title} subtitle={p.subtitle}/>
                <TutorialContent>
                    <div>
                        <div>
                            {p.children}
                        </div>
                        <div className="py-12">
                            If you want to skip the video altogether, <Link href={p.github}><a>the source is on GitHub</a></Link>.
                        </div>
                        <div className="pb-12">
                            <YouTubeVideo id={p.youTubeId} title={p.title}/>
                        </div>
                    </div>
                </TutorialContent>
            </Page>
        </>
    )
}