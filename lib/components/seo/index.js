import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo(props) {
  const router = useRouter();

  const url = router.asPath;
  const lang = router.locale;
  const locales = router.locales;
  const defaultLang = router.defaultLocale;

  let { title, description, image, keywords } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {image && <meta property="twitter:image" content={image} />}

      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang={defaultLang} href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      {locales
        .filter((local) => local !== defaultLang)
        .map((local, i) => (
          <link
            rel="alternate"
            hrefLang={local}
            href={"/" + local + url}
            key={i}
          />
        ))}
    </Head>
  );
}
