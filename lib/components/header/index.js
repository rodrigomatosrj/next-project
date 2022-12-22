import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Layout.module.scss";

export default function Header() {
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
