import {Page} from "../components/Page";
import Form from "../components/contact/Form";
import {CorporateContactJsonLd, SocialProfileJsonLd} from 'next-seo'

const Contact = () => {
    return (
        <>
            <SocialProfileJsonLd
                type="Organization"
                name="Vidya"
                url="https://www.vidyasource.com"
                sameAs={[
                    'https://github.com/VidyaSource',
                    'https://twitter.com/VidyaSource',
                    'https://www.linkedin.com/company/vidya-technology-training/',
                ]}
            />
            <CorporateContactJsonLd
                url="https://www.vidyasource.com"
                logo="https://www.vidyasource.com/img/vidya.png"
                contactPoint={[
                    {
                        telephone: '+1-202-430-5695',
                        contactType: 'customer support',
                        areaServed: 'US',
                        availableLanguage: ['English'],
                    },
                ]}
            />
            <Page>
                <Form/>
            </Page>
        </>
    )
}

export default Contact