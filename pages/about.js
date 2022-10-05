import Head from "next/head";
import Layout from "../Components/Layout";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";
import { Action } from "../Components/Action";
import { Blocktopabout } from "../Components/about/Blocktop";
import { Team } from "../Components/about/Team";
import { Reviews } from "../Components/about/Reviews";
import { Clients } from "../Components/about/Clients";
import styles from "../styles/Home.module.scss";

export default function About() {
  return (
    <Layout title="About" keywords="" description="">
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Menu />

      <main className={styles.main}>
        <Blocktopabout />
        <Team />
        <Reviews />
        <Clients />
        <Action />
      </main>
      <Footer />
    </Layout>
  );
}
