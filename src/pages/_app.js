import '../../styles/globals.css'
import { DefaultSeo } from 'next-seo'
import seo from '../../seo.config'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo {...seo} />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
