import '../../styles/globals.css'
import { DefaultSeo } from 'next-seo'
import seo from '../../seo.config'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import ReactGA from "react-ga4"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo {...seo} />
            <Component {...pageProps} />
        </>
    )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
    const body = JSON.stringify(metric)
    /*ReactGA.initialize("G-SV6CZCPD3B")
    ReactGA.send(body)*/
}

export default MyApp
