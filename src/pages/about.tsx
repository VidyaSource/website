import {Page} from "../components/Page";
import Hero from "../components/about/Hero";
import {AboutHeadElement} from "../components/about/AboutHeadElement";
import dynamic from 'next/dynamic'

const CallToAction = dynamic(() => import("../components/CallToAction"), { ssr: false })
const Clients = dynamic(() => import("../components/Clients"), { ssr: false })
const Diversity = dynamic(() => import("../components/about/Diversity"), { ssr: false })
const Vidya = dynamic(() => import("../components/about/Vidya"), { ssr: false })
const Offerings = dynamic(() => import("../components/about/Offerings"), { ssr: false })

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