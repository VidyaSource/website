import Link from 'next/link'
import Course from "../../components/courses/Course";
import {courses} from "./index";

export const Agile = () => {
    const {imageUrl: url, width, height} = courses[1]
    return (
            // @ts-ignore
            <Course courseData={process.env.agile} category="Agile" image={{url: url, width: width, height: height}}>
                <p className="font-medium text-gray-dark dark:text-blue-light lg:font-normal">
                    In software engineering, we often see valuable ideas become confusing if not controversial or
                    meaningless
                    buzzwords because coaches and consultants misrepresent these ideas to
                    their customers to make money. There is no better example of this than "agile." No one has
                    captured this sad reality better than Ron Jeffries, one of the signatories of
                    the <Link href="https://agilemanifesto.org/"><a className="italic dark:text-green-light dark:hover:text-red-light">Agile Manifesto</a></Link>, whose disgust with
                    the Agile
                    Industrial Complex is so overwhelming that he has resigned himself to advise
                    us <Link href="https://ronjeffries.com/articles/018-01ff/abandon-1/"><a className="italic dark:text-green-light dark:hover:text-red-light">Developers
                    Should Abandon Agile</a></Link>. Not
                    the principles but the machinery that has given us heavyweight derivatives like Scrum and SAFe,
                    pointless certifications, and worst of all,
                    unhappy engineers and bad software that continue to emerge from all that bad faith.
                </p>
                <p className="font-medium text-gray-dark dark:text-blue-light">
                    And now here we are asking you to pay us and to trust us to help you build better software
                    faster, cheaper,
                    and higher quality.
                </p>
                <p className="text-gray-dark dark:text-blue-light">
                    The difference is we aren't going to sell you any kind of one-size-fits-all approach
                    because there isn't one. We honestly don't know what will work for you. What we do know is we
                    build software
                    ourselves. We will introduce you to many techniques you can apply to be truly agile and optimize for delivery, and we know what the highest performing
                    organizations,
                    in and out of tech, have in common. We will guide you towards deciding which of these
                    technical practices make the most sense for you, so you can become a high performing organization in
                    your own right doing it in a way uniquely yours.
                </p>
            </Course>
    )
}

export default Agile
