import { useRouter } from "next/router";
import Seo from "../../lib/components/seo";
import styles from "../../lib/styles/Test.module.scss";
import { useIntl, FormattedMessage } from "react-intl";
import Chat from "../../lib/components/chat";

export default function Receiver() {
  const intl = useIntl();
  const router = useRouter();
  const { receiver } = router.query;

  const title = "title";
  const description = "description";
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
        <Chat receiver={receiver} />
      </div>
    </>
  );
}
