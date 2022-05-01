import {Page} from "../components/Page";
import Hero from "../components/about/Hero";
import dynamic from 'next/dynamic'
import {NextSeo} from "next-seo";
import {LocalBusinessJsonLd} from "../components/LocalBusinessJsonLd";

const CallToAction = dynamic(() => import("../components/CallToAction"))
const Clients = dynamic(() => import("../components/Clients"))
const Diversity = dynamic(() => import("../components/about/Diversity"))
const Vidya = dynamic(() => import("../components/about/Vidya"))
const Offerings = dynamic(() => import("../components/about/Offerings"))
const Testimonials = dynamic(() => import("../components/home/Testimonials"))
const Certifications = dynamic(() => import("../components/Certifications"))

const About = () => {
    const title = "Vidya | About"
    const description = "Learn about what we do at Vidya and why we do it."
    const url = `${process.env.basePath}/about`
    const imageUrl = `${process.env.basePath}/img/vidya.png`
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
                            url: imageUrl,
                            width: 1085,
                            height: 503,
                            alt: title,
                        }
                    ],
                    description: description,
                    url: url,
                    type: 'company',
                }}
            />
            <LocalBusinessJsonLd />
            <Page>
                <Hero/>
                <Offerings/>
                <Diversity/>
                <Testimonials />
                <Clients/>
                <Certifications />
                <Vidya/>
                <CallToAction/>
            </Page>
        </>
    )
}

export default About