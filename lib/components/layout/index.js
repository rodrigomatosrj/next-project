import Header from "../header/index";
import Footer from "../footer/index";
import styles from "../../styles/Layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main class={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
