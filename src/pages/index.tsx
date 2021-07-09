import {Hero} from "../components/home/Hero"
import {RecentPosts} from "../components/home/RecentPosts"
import {BlogPost, getAllBlogPosts} from "../lib/blogPost-utils";
import dynamic from 'next/dynamic'
import {LocalBusinessJsonLd} from "../components/LocalBusinessJsonLd";

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
            <LocalBusinessJsonLd />
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

export async function getStaticProps({ params }) {
    const blogPosts = await getAllBlogPosts()

    return {
        props: {
            blogPosts: blogPosts
        },
    }
}
