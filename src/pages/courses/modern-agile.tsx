import {Page} from "../../components/Page";
import {CourseHeadElement} from "../../components/courses/CourseHeadElement";
import {CallToAction} from "../../components/CallToAction";
import {CourseHeader} from "../../components/courses/CourseHeader";
import {Description} from "../../components/courses/Description";
import {Syllabus} from "../../components/courses/Syllabus";
import {Instructor} from "../../components/courses/Instructor";
import Link from 'next/link'

export const Agile = () => {
    const name = "Modern Agile"
    // @ts-ignore
    const {blurb, description1 , description2, syllabus, quote} = process.env.agile
    return (
        <Page headElement={<CourseHeadElement title={`Vidya | ${name}`} />}>
            <CourseHeader category="Software engineering" name={name} blurb={blurb}/>
            <Description name={name} description1={description1} description2={description2}>
                <p className="font-medium lg:text-gray-dark lg:font-normal">
                    In software engineering, we often see valuable ideas become confusing if not controversial or meaningless
                    buzzwords because coaches and consultants misrepresent these ideas to
                    their customers to make money. There is no better example of this than "agile." No one has
                    captured this sad reality better than Ron Jeffries, one of the signatories of
                    the <Link href="https://agilemanifesto.org/"><a>Agile Manifesto</a></Link>, whose disgust with the Agile
                    Industrial Complex is so overwhelming that he has resigned himself to advise
                    us <Link href="https://ronjeffries.com/articles/018-01ff/abandon-1/"><a className="italic">Developers Should Abandon Agile</a></Link>. Not
                    the principles but the machinery that has given us heavyweight derivatives like Scrum and SAFe, pointless certifications, and worst of all,
                    unhappy engineers and bad software that continue to emerge from all that bad faith.
                </p>
                <p className="font-medium">
                    And now here we are asking you to pay us and to trust us to help you build better software faster, cheaper,
                    and higher quality.
                </p>
                <p>
                    The difference is we aren't going to sell you any kind of one-size-fits-all approach
                    because there isn't one. We honestly don't know what will work for you. What we do know is we build software
                    ourselves and see what works and what doesn't, and we know what the highest performing organizations,
                    in and out of tech, have in common. We will lead you beyond Scrum and help you build an organizational culture and establish a set of
                    technical practices to become one of them in a way that's uniquely yours.
                </p>
            </Description>
            <Syllabus syllabus={syllabus}/>
            <Instructor name="Neil Chaudhuri" quote={quote}/>
            <CallToAction/>
        </Page>
    )
}

export default Agile
