import {Page} from "../components/Page";
import {ConsultingHeadElement} from "../components/consulting/ConsultingHeadElement";
import {Architecture} from "../components/consulting/Architecture";
import Communications from "../components/consulting/Communications";

const Consulting = () => {
    return (
        <Page headElement={<ConsultingHeadElement title="Vidya | Consulting" />}>
            <Architecture />
            <Communications />
        </Page>
    )
}

export default Consulting