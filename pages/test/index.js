import Seo from "../../lib/components/seo";
import styles from "../../lib/styles/Test.module.scss";

import { useIntl, FormattedMessage } from "react-intl";

export default function Test() {
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.test.head.title" });
  const description = intl.formatMessage({
    id: "page.test.head.description",
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
          <FormattedMessage id="page.test.title" />
        </h1>
        <p>
          <FormattedMessage id="page.test.description" />
        </p>
      </div>
    </>
  );
}
