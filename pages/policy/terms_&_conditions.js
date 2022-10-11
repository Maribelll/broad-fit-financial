import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import Layout from "../../Components/Layout";
import { Menu } from "../../Components/Menu";
import { Footer } from "../../Components/Footer";

export default function Terms() {
  return (
    <Layout title="Terms &amp; conditions" keywords="" description="">
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
