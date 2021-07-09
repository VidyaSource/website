import {Tutorial} from "../../components/tutorials/Tutorial";

export const StartingWithData = () => {
    const metaDescription = "This tutorial is for beginners in software development who want to learn just enough to access data on the web and visualize it on their own websites or mobile devices."
    const thumbnail = {
        url: "/img/tutorials/data.jpg",
        width: 4810,
        height: 3207
    }
    return (
        <Tutorial title="Starting with Data"
                  github="https://github.com/VidyaSource/starting-with-data"
                  youTubeId="bzl4hCH2CdY"
                  subtitle="Using Python and D3 to Visualize JSON from the Donors Choose REST API"
                  tags={["data", "Python", "data visualization", "dataviz", "Donor's Choose", "API", "REST", "Flask"]}
                  uploadDate={new Date("2014-01-14")}
                  thumbnail={thumbnail}
                  metaDescription={metaDescription}>
            This tutorial is for beginners in software development who want to learn just enough to access data on the web
            and visualize it on their own websites or mobile devices.
        </Tutorial>
    )
}

export default StartingWithData
