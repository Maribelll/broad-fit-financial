import Head from "next/head";
import styles from "../../styles/privacy.module.scss";
import Layout from "../../Components/Layout";
import { Menu } from "../../Components/Menu";
import { Footer } from "../../Components/Footer";

export default function Cookie() {
  return (
    <Layout title="Cookie policy">
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Menu />
      <main className={styles.main}></main>
      <Footer />
    </Layout>
  );
}
