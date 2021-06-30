import {HeadElement} from "../components/HeadElement";
import {Hero} from "../components/home/Hero"
import {RecentPosts} from "../components/home/RecentPosts"
import {QueryClient} from "react-query";
import {getAllBlogPosts} from "../lib/blogPost-utils";
import {dehydrate} from "react-query/hydration";
import dynamic from 'next/dynamic'

const Clients = dynamic(() => import("../components/Clients"), { ssr: false })
const Testimonials = dynamic(() => import("../components/home/Testimonials"), { ssr: false })
const CallToAction = dynamic(() => import("../components/CallToAction"), { ssr: false })
const Footer = dynamic(() => import("../components/Footer"), { ssr: false })

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

export async function getStaticProps({ params }) {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery('posts', getAllBlogPosts)

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        },
    }
}
