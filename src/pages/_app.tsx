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
            <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-42673091-1" strategy="lazyOnload" />
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SV6CZCPD3B" strategy="lazyOnload" />
            <Script strategy="afterInteractive">
                {
                    `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-42673091-1')
                    gtag('config', 'G-SV6CZCPD3B');`
                }
            </Script>
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
