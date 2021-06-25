import {TutorialHeadElement} from "../components/tutorials/TutorialHeadElement";
import {Page} from "../components/Page";
import {Hero} from "../components/about/Hero";

const About = () => {
    return (
        <Page headElement={<TutorialHeadElement title="Vidya | About" />}>
            <Hero />
        </Page>
    )
}

export default About