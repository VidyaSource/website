import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'
import Script from "next/script";

class VidyaDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return await Document.getInitialProps(ctx)
    }

    render() {

        return (
            <Html>
                <Head>
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
                    <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet"/>

                    {/* PWA */}
                    <link rel="apple-touch-icon" sizes="57x57" href="/img/ios/touch-icon-iphone.png"/>
                    <link rel="apple-touch-icon" sizes="76x76" href="/img/ios/touch-icon-ipad.png"/>
                    <link rel="apple-touch-icon" sizes="120x120" href="/img/ios/touch-icon-iphone-retina.png"/>
                    <link rel="apple-touch-icon" sizes="152x152" href="/img/ios/touch-icon-ipad-retina.png"/>
                    <link rel="apple-touch-icon" sizes="167x167" href="/img/ios/touch-icon-ipad-pro.png"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/img/ios/touch-icon-iphone-6-plus.png"/>
                    <link href="/img/ios/splash/iphone5_splash.png"
                          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
                          rel="apple-touch-startup-image"/>
                    <link href="/img/ios/splash/iphone6_splash.png"
                          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
                          rel="apple-touch-startup-image"/>
                    <link href="/img/ios/splash/iphoneplus_splash.png"
                          media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
                          rel="apple-touch-startup-image"/>
                    <link href="/img/ios/splash/iphonex_splash.png"
                          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
                          rel="apple-touch-startup-image"/>
                    <link href="/img/ios/splash/ipad_splash.png"
                          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
                          rel="apple-touch-startup-image"/>
                    <link href="/img/ios/splash/ipadpro1_splash.png"
                          media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
                          rel="apple-touch-startup-image"/>
                    <link href="/img/ios/splash/ipadpro2_splash.png"
                          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
                          rel="apple-touch-startup-image"/>
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content='Vidya' />
                    <meta name='mobile-web-app-capable' content='yes' />

                    {/* PWA */}
                </Head>
                <body>
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PFPX26R"
                        height="0" width="0" style={{display: "none", visibility: "hidden"}}/>
                <Main/>
                <NextScript/>
                <Script src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b9ebbff15106c8f"/>
                </body>
            </Html>
        )
    }
}

export default VidyaDocument