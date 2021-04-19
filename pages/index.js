import {Header} from "./components/Header";
import {Hero} from "./components/home/Hero"
import {RecentPosts} from "./components/home/RecentPosts"
import {Footer} from "./components/Footer";
import {CallToAction} from "./components/home/CallToAction";
import {Testimonials} from "./components/home/Testimonials";
import {Clients} from "./components/home/Clients";

export default function Home() {
    return (
        <>
            <Header title="Test title"/>
            <Hero />
            <RecentPosts />
            <Clients />
            <Testimonials />
            <CallToAction />
            <Footer/>
        </>
    )
}
