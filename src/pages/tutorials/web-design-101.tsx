import {Tutorial} from "../../components/tutorials/Tutorial";

export const WebDesign101 = () => {
    const metaDescription = "This tutorial is for beginners in software development who want to learn just enough to access data on the web and visualize it on their own websites or mobile device applications."
    const thumbnail = {
        url: "/img/tutorials/web-design.jpg",
        width: 6000,
        height: 4000
    }
    return (
        <Tutorial title="Web Design 101"
                  subtitle="Understanding HTML, CSS, and JavaScript"
                  github="https://github.com/VidyaSource/comparison-shopping"
                  youTubeId="xmhnNUotIaE"
                  thumbnail={thumbnail}
                  metaDescription={metaDescription}
                  tags={["CSS", "HTML", "JavaScript", "web", "web design", "web development"]}
                  uploadDate={new Date("2013-10-26")}>
            This tutorial is for beginners in software development who want to learn just enough to access data on the web
            and visualize it on their own websites or mobile device applications.
        </Tutorial>
    )
}

export default WebDesign101
