import {HeadElement} from "../components/HeadElement";
import {Hero} from "../components/home/Hero"
import {RecentPosts} from "../components/home/RecentPosts"
import {BlogPost, getAllBlogPosts, getBlogPostsByTags} from "../lib/blogPost-utils";
import dynamic from 'next/dynamic'

const Clients = dynamic(() => import("../components/Clients"))
const Testimonials = dynamic(() => import("../components/home/Testimonials"))
const CallToAction = dynamic(() => import("../components/CallToAction"))
const Footer = dynamic(() => import("../components/Footer"))

interface HomeProps {
    blogPosts: BlogPost[]
}

const Home = (p: HomeProps) => {
    return (
        <>
            <HeadElement title="Test title"/>
            <Hero />
            <RecentPosts blogPosts={p.blogPosts}/>
            <Clients />
            <Testimonials />
            <CallToAction />
            <Footer/>
        </>
    )
}

export default Home

export async function getServerSideProps(context) {
    const blogPosts = await getAllBlogPosts()

    return {
        props: {
            blogPosts: blogPosts
        },
    }
}
