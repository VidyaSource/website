import '../../styles/globals.css'
import {DefaultSeo} from 'next-seo'
import seo from '../../seo.config'
import type {AppProps, NextWebVitalsMetric} from 'next/app'
import ReactGA from "react-ga4"
import Script from "next/script";
import { useRouter } from 'next/router'

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter()

    return (
        <>
            <DefaultSeo {...seo} />
            <Script strategy="beforeInteractive" src="/scripts/darkMode.js"/>
            <Component {...pageProps} />
        </>
    )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
    const { id, name, startTime, label, value } = metric
    ReactGA.initialize("G-SV6CZCPD3B")
    ReactGA.event({
        category: id,
        action: name,
        label: label,
        value: value,
        nonInteraction: true,
        transport: "beacon"
    })
}

export default MyApp
