import {LocalBusinessJsonLd as LocalBusiness} from "next-seo"

export const LocalBusinessJsonLd = () => {
    const url = `${process.env.basePath}/about`
    const imageUrl = `${process.env.basePath}/img/vidya.png`

    return (
        <LocalBusiness
            type="ProfessionalService"
            id={url}
            name="Vidya"
            description="Build faster. Build better. Consulting and custom application development to strengthen your business. Courses and content to help you harness technology for yourself."
            url={url}
            telephone="+12024305695"
            address={{
                streetAddress: 'Online',
                addressLocality: 'Vienna',
                addressRegion: 'VA',
                postalCode: '22180',
                addressCountry: 'US',
            }}
            geo={{
                latitude: '47.7511',
                longitude: '120.7401',
            }}
            images={[
                imageUrl
            ]}
            sameAs={[
                process.env.buildPath
            ]}
            openingHours={[
                {
                    opens: '08:00',
                    closes: '23:59',
                    dayOfWeek: [
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                        'Sunday',
                    ],
                    validFrom: '2010-08-18',
                    validThrough: '2040-12-31',
                },
            ]}
        />
    )
}