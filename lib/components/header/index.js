import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Layout.module.scss";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Avatar from "@mui/material/Avatar";
import { ButtonBase } from "@mui/material";

export default function Header() {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  return (
    <>
      <header className={styles.header}>
        <Link href="/" locale={router.locale} legacyBehavior>
          {router.asPath === "/" ? (
            <a className={styles.active}>Home</a>
          ) : (
            <a>Home</a>
          )}
        </Link>
        <Link href="/test" locale={router.locale} legacyBehavior>
          {router.asPath === "/test" ? (
            <a className={styles.active}>Test</a>
          ) : (
            <a>Test</a>
          )}
        </Link>
        {user ? (
          <ButtonBase onClick={() => auth.signOut()}>
            <Avatar
              alt={user.displayName}
              src={user.photoURL}
              sx={{ width: 24, height: 24 }}
            />
          </ButtonBase>
        ) : (
          <Link href="/login" locale={router.locale} legacyBehavior>
            {router.asPath === "/login" ? (
              <a className={styles.active}>Login</a>
            ) : (
              <a>Login</a>
            )}
          </Link>
        )}
        <div>
          {[...router.locales].sort().map((locale) => (
            <Link
              key={locale}
              href={router.asPath}
              locale={locale}
              legacyBehavior
            >
              {locale === router.locale ? (
                <a className={styles.active}>{locale}</a>
              ) : (
                <a>{locale}</a>
              )}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
}
