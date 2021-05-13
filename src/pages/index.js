import {HeadElement} from "../components/HeadElement";
import {Hero} from "../components/home/Hero"
import {RecentPosts} from "../components/home/RecentPosts"
import {Footer} from "../components/Footer";
import {CallToAction} from "../components/home/CallToAction";
import {Testimonials} from "../components/home/Testimonials";
import {Clients} from "../components/home/Clients";
import {QueryClient} from "react-query";
import {getAllBlogPosts, getBlogPostsByTags} from "../lib/blogPost-utils";
import {dehydrate} from "react-query/hydration";

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
