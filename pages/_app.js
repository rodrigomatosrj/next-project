import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../lib/config/theme";
import createEmotionCache from "../lib/config/createEmotionCache";
import { initFirebase } from "../lib/config/firebase";

import "../lib/styles/globals.css";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import Layout from "../lib/components/layout";
import Script from "next/script";

import de from "../lib/translations/de.json";
import en from "../lib/translations/en.json";
import fr from "../lib/translations/fr.json";

const messages = { de, en, fr };

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  initFirebase();
  const { locale } = useRouter();

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-GD921JQZZK`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GD921JQZZK');
        `}
      </Script>

      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <IntlProvider locale={locale} messages={messages[locale]}>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </IntlProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
