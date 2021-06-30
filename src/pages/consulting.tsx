import {Page} from "../components/Page";
import {ConsultingHeadElement} from "../components/consulting/ConsultingHeadElement";
import {Architecture} from "../components/consulting/Architecture";
import Communications from "../components/consulting/Communications";
import dynamic from 'next/dynamic'

const CallToAction = dynamic(() => import("../components/CallToAction"))

const Consulting = () => {
    return (
        <Page headElement={<ConsultingHeadElement title="Vidya | Consulting" />}>
            <Architecture />
            <Communications />
            <CallToAction />
        </Page>
    )
}

export default Consulting