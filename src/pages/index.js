import {HeadElement} from "../components/HeadElement";
import {Hero} from "../components/home/Hero"
import {RecentPosts} from "../components/home/RecentPosts"
import {Footer} from "../components/Footer";
import {CallToAction} from "../components/home/CallToAction";
import {Testimonials} from "../components/home/Testimonials";
import {Clients} from "../components/home/Clients";

const Home = () => {
    return (
        <>
            <HeadElement title="Test title"/>
            <Hero />
            <RecentPosts />
            <Clients />
            <Testimonials />
            <CallToAction />
            <Footer/>
        </>
    )
}

export default Home
