import {Tutorial} from "../../components/tutorials/Tutorial";

const ComparisonShopping = () => {
    const metaDescription = "This tutorial is for intermediate-level Java developers who want to add comparison and sorting capabilities to the custom classes they’ve created for their projects."
    const thumbnail = {
        url: "/img/tutorials/car-shopping.jpg",
        width: 3840,
        height: 2298
    }
    return (
        <Tutorial title="Comparison Shopping"
                  subtitle="Using Comparable and Comparator to Sort Java Objects"
                  metaDescription={metaDescription}
                  github="https://github.com/VidyaSource/comparison-shopping"
                  youTubeId="pq0ArQhhWzU"
                  tags={["Java", "programming", "sorting", "comparator", "comparable", "function"]}
                  uploadDate={new Date("2013-10-27")}
                  thumbnail={thumbnail}>
            This tutorial is for intermediate-level Java developers who want to add comparison and sorting capabilities
            to the custom classes they’ve created for their projects.
        </Tutorial>

    )
}

export default ComparisonShopping
