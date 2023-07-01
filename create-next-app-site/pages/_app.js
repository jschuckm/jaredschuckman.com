
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import '../styles/App.css';
import Script from 'next/script'

export default function App({ Component, pageProps }) {
    return <>
      <Component {...pageProps} />
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-7Y5W360F6W"/>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7Y5W360F6W', {
                page_path: window.location.pathname,
            });
            `,
            }}
      />
    </>
  }