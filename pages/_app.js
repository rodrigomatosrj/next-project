import "../lib/styles/globals.css";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import Layout from "../lib/components/layout";

import de from "../lib/translations/de.json";
import en from "../lib/translations/en.json";
import fr from "../lib/translations/fr.json";

const messages = { de, en, fr };

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IntlProvider>
  );
}
