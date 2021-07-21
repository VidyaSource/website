import '../../styles/globals.css'
import {DefaultSeo} from 'next-seo'
import seo from '../../seo.config'
import type {AppProps, NextWebVitalsMetric} from 'next/app'
import ReactGA from "react-ga4"
import {ThemeContext} from "../components/ThemeModeContext";
import {useEffect, useState} from "react";
import Script from "next/script";
import Analytics from 'analytics'
import googleTagManager from '@analytics/google-tag-manager'

function MyApp({Component, pageProps}: AppProps) {
    let mode
    useEffect(() => {
        if (typeof window !== "undefined") {
            mode = localStorage.getItem('vidyaDarkMode') === 'true' || (!('vidyaDarkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        }
    }, [])
    const [darkMode, setDarkMode] = useState(mode)
    return (
        <>
            <DefaultSeo {...seo} />
            <Script strategy="beforeInteractive" src="/scripts/darkMode.js"/>
            <Script strategy="lazyOnload">
                {
                    `const analytics = Analytics({
                      app: 'awesome-app',
                      plugins: [
                        googleTagManager({
                          containerId: 'GTM-PFPX26R'
                        })
                      ]
                    })`
                }
            </Script>
            <Script src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b9ebbff15106c8f" strategy="lazyOnload"/>
            <ThemeContext.Provider value={{darkMode: darkMode, setDarkMode: setDarkMode}}>
                <Component {...pageProps} />
            </ThemeContext.Provider>
        </>
    )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
    const body = JSON.stringify(metric)
    /*ReactGA.initialize("G-SV6CZCPD3B")
    ReactGA.send(body)*/
}

export default MyApp
