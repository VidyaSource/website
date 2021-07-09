import {Tutorial} from "../../components/tutorials/Tutorial";

export const Scala = () => {
    const metaDescription = "This tutorial is for intermediate-level Java developers, and developers in other languages too," +
        " who are curious about what the big deal is with the Scala programming language."
    const thumbnail = {
        url: "/img/tutorials/programming.jpg",
        width: 6000,
        height: 4000
    }
    return (
        <Tutorial title="Nine Reasons to Try Scala"
                  metaDescription={metaDescription}
                  github="https://github.com/VidyaSource/nine-reasons-to-try-scala"
                  youTubeId="rbZ6GzR8B7I"
                  thumbnail={thumbnail}
                  tags={["Scala", "programming", "functional programming", "Immutability", "Traits", "Case classes",
                  "Extractors and pattern matching", "Option", "Implicit conversion", "Parallel collections", "Futures"]}
                  uploadDate={new Date("2013-10-27")}>
            This tutorial is for intermediate-level Java developers, and developers in other languages too,
            who are curious about what the big deal is with the Scala programming language. We will look at
            nine compelling features of Scala that will hopefully impress you and inspire you to explore
            both the language itself and its applications.

            If you want to skip to sections that particularly interest you, here is where you should go:
            <ol>
                <li>Immutability (1:13)</li>
                <li>Traits (2:52)</li>
                <li>Case classes (5:59)</li>
                <li>Extractors and pattern matching (7:22)</li>
                <li>Option (8:36)</li>
                <li>Implicit conversion (11:46)</li>
                <li>Parallel collections (12:46)</li>
                <li>Futures (13:32)</li>
                <li>Popularity (15:22)</li>
            </ol>
        </Tutorial>
    )
}

export default Scala
