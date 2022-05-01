import {Hero} from "../components/home/Hero"
import {BlogPost, getAllBlogPosts} from "../lib/blogPost-utils";
import dynamic from 'next/dynamic'
import {LocalBusinessJsonLd} from "../components/LocalBusinessJsonLd";

const RecentPosts = dynamic(() => import("../components/home/RecentPosts"))
const Clients = dynamic(() => import("../components/Clients"))
const Testimonials = dynamic(() => import("../components/home/Testimonials"))
const CallToAction = dynamic(() => import("../components/CallToAction"))
const Certifications = dynamic(() => import("../components/Certifications"))
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
            <Certifications />
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
            blogPosts: blogPosts.slice(0, 3)
        },
    }
}
