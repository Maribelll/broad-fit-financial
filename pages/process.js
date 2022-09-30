import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";
import { Blocktop } from "../Components/process/Blocktop";
import { Action } from "../Components/Action";
import { Stage } from "../Components/process/stage";

// import Menu from "../Components/Menu";

export default function Process() {
  return (
    <Layout title="Sectors" keywords="" description="">
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Menu />
      <main className={styles.main}>
        <Blocktop />
        <Stage />
        <Action />
      </main>
      <Footer />
    </Layout>
  );
}
