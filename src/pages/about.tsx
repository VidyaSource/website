import {Page} from "../components/Page";
import {Hero} from "../components/about/Hero";
import {AboutHeadElement} from "../components/about/AboutHeadElement";
import Vidya from "../components/about/Vidya";
import {Clients} from "../components/Clients";
import Diversity from "../components/about/Diversity";
import Offerings from "../components/about/Offerings";
import {CallToAction} from "../components/CallToAction";

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