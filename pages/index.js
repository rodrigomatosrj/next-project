import styles from "../lib/styles/Home.module.scss";
import { FormattedMessage, useIntl } from "react-intl";
import Seo from "../lib/components/seo";

export default function Home() {
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({
    id: "page.home.head.description",
  });
  const keywords = "";
  const image = null;

  return (
    <>
      <Seo
        title={title}
        description={description}
        image={image}
        keywords={keywords}
      />
      <div className={styles.container}>
        <h1>
          <FormattedMessage
            id="page.home.title"
            values={{ b: (chunks) => <b>{chunks}</b> }}
          />
        </h1>

        <p>
          <FormattedMessage id="page.home.description" />
        </p>
      </div>
    </>
  );
}
