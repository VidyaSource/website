import {Page} from "../components/Page";
import {ConsultingHeadElement} from "../components/consulting/ConsultingHeadElement";
import {Architecture} from "../components/consulting/Architecture";

const Consulting = () => {
    return (
        <Page headElement={<ConsultingHeadElement title="Vidya | Consulting" />}>
            <Architecture />
        </Page>
    )
}

export default Consulting