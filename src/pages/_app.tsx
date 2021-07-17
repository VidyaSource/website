import '../../styles/globals.css'
import {DefaultSeo} from 'next-seo'
import seo from '../../seo.config'
import type {AppProps, NextWebVitalsMetric} from 'next/app'
import ReactGA from "react-ga4"
import {DarkModeContext} from "../components/ThemeModeContext";
import {useEffect, useState} from "react";
import Script from "next/script";

function MyApp({Component, pageProps}: AppProps) {
    let mode
    useEffect(() => {
        if (typeof window !== "undefined") {
            mode = localStorage.getItem('vidyaDarkMode') === 'true' || (!('vidyaDarkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        }
    })
    const [darkMode, setDarkMode] = useState(mode)
    return (
        <>
            <DefaultSeo {...seo} />
            <Script strategy="beforeInteractive" src="/scripts/darkMode.js"/>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-SV6CZCPD3B"/>
            <Script>
                {
                    `window.dataLayer = window.dataLayer || [];
                             function gtag(){dataLayer.push(arguments);}
                             gtag('js', new Date());
                             gtag('config', 'G-SV6CZCPD3B');`
                }
            </Script>
            <Script>
                {
                    `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                              })(window,document,'script','dataLayer','GTM-PFPX26R');`
                }
            </Script>
            <Script src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b9ebbff15106c8f" strategy="lazyOnload"/>
            <DarkModeContext.Provider value={{darkMode: darkMode, setDarkMode: setDarkMode}}>
                <Component {...pageProps} />
            </DarkModeContext.Provider>
        </>
    )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
    const body = JSON.stringify(metric)
    /*ReactGA.initialize("G-SV6CZCPD3B")
    ReactGA.send(body)*/
}

export default MyApp
