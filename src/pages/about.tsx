import {Page} from "../components/Page";
import Hero from "../components/about/Hero";
import dynamic from 'next/dynamic'

const CallToAction = dynamic(() => import("../components/CallToAction"))
const Clients = dynamic(() => import("../components/Clients"))
const Diversity = dynamic(() => import("../components/about/Diversity"))
const Vidya = dynamic(() => import("../components/about/Vidya"))
const Offerings = dynamic(() => import("../components/about/Offerings"))

const About = () => {
    return (
        <Page>
            <Hero />
            <Offerings />
            <Diversity />
            <Vidya />
            <Clients />
            <CallToAction />
        </Page>
    )
}

export default About