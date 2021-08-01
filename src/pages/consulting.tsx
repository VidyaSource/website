import {Page} from "../components/Page";
import {Architecture} from "../components/consulting/Architecture"
import dynamic from 'next/dynamic'
import {NextSeo, ProductJsonLd} from "next-seo";
import {useRouter} from "next/router";

const Communications = dynamic(() => import("../components/consulting/Communications"))
const CallToAction = dynamic(() => import("../components/CallToAction"))

const Consulting = () => {
    const router = useRouter()
    const title = "Vidya | Consulting"
    const description = "Trust Vidya to bring the experience and skill to solve your software architecture, software development, and technology communications challenges."
    const url = `${process.env.basePath}${router.pathname}`
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    title: title,
                    images: [
                        {
                            url: `${process.env.basePath}/img/consulting/development.jpg`,
                            width: 3394,
                            height: 4243,
                            alt: title,
                        }
                    ],
                    description: description,
                    url: url,
                    type: 'product',
                }}
            />
            <ProductJsonLd productName="Vidya Consulting"
                           description={description}
                           slogan="Build Faster. Build Better."
                           brand="Vidya"
                           aggregateRating={{
                               ratingValue: "5",
                               reviewCount: "2"
                           }}
                           reviews={[
                               {
                                   reviewRating: {
                                       ratingValue: "5",
                                       bestRating: "5"
                                   },
                                   author: {
                                       type: "Person",
                                       name: "Lauren Tindall"
                                   }
                               },
                               {
                                   reviewRating: {
                                       ratingValue: "5",
                                       bestRating: "5"
                                   },
                                   author: {
                                       type: "Person",
                                       name: "Michael Zeitlin"
                                   }
                               }
                           ]}
            />
            <Page>
                <Architecture/>
                <Communications/>
                <CallToAction/>
            </Page>
        </>
    )
}

export default Consulting