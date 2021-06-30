import {Page} from "../components/Page";
import Hero from "../components/about/Hero";
import {AboutHeadElement} from "../components/about/AboutHeadElement";
import dynamic from 'next/dynamic'

const CallToAction = dynamic(() => import("../components/CallToAction"))
const Clients = dynamic(() => import("../components/Clients"))
const Diversity = dynamic(() => import("../components/about/Diversity"))
const Vidya = dynamic(() => import("../components/about/Vidya"))
const Offerings = dynamic(() => import("../components/about/Offerings"))

const About = () => {
    return (
        <Page headElement={<AboutHeadElement title="Vidya | About" />}>
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