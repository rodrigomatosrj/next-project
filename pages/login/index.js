import Seo from "../../lib/components/seo";
import styles from "../../lib/styles/Login.module.scss";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Button from "@mui/material/Button";
import { useIntl, FormattedMessage } from "react-intl";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

export default function Test() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const intl = useIntl();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (loading) {
    return <div>loading</div>;
  }

  if (user) {
    router.push("/", "", { locale: router.locale });
  }

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  };

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
          <Button onClick={signIn} variant="contained">
            Login with google
          </Button>
        </p>
      </div>
    </>
  );
}
