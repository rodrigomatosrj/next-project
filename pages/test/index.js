import Seo from "../../lib/components/seo";
import styles from "../../lib/styles/Test.module.scss";
import Link from "next/link";
import { useIntl, FormattedMessage } from "react-intl";
import { useRouter } from "next/router";

export default function Test() {
  const intl = useIntl();
  const router = useRouter();

  const title = intl.formatMessage({ id: "page.test.head.title" });
  const description = intl.formatMessage({
    id: "page.test.head.description",
  });
  const keywords = "";
  const image = null;

  let receiver = {
    name: "Claudia",
    uid: "q4k9wGYrWtcJaNMEIghkTXmOZ5H3",
  };

  let sender = {
    name: "Rodrigo",
    uid: "7Nh1zGDzKvgHp2FvbU5KW3AnXW93",
  };

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
          <Link href={`/chat/${receiver.uid}`} locale={router.locale}>
            <FormattedMessage
              id="page.test.description"
              values={{ receiver: receiver.name }}
            />
          </Link>
        </p>
        <p>
          <Link href={`/chat/${sender.uid}`} locale={router.locale}>
            <FormattedMessage
              id="page.test.description"
              values={{ receiver: sender.name }}
            />
          </Link>
        </p>
      </div>
    </>
  );
}
