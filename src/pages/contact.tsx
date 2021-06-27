import {Page} from "../components/Page";
import {ContactHeadElement} from "../components/contact/ContactHeadElement";
import Form from "../components/contact/Form";

const Contact = () => {
    return (
        <Page headElement={<ContactHeadElement title="Vidya | Contact" />}>
            <Form />
        </Page>
    )
}

export default Contact