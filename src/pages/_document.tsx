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
                    <title>Vidya | Build faster. Build better.</title>
                </Head>
                <body>
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PFPX26R"
                        height="0" width="0" style={{display:"none", visibility:"hidden"}}/>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default VidyaDocument