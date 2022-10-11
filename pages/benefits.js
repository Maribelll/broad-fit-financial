import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";
import { Blocktop } from "../Components/benefits/Blocktop";
import { Action } from "../Components/Action";
import { Cardleft } from "../Components/benefits/Cardleft";
import { Cardright } from "../Components/benefits/Carfright";
import { Twocolumns } from "../Components/Twocolumns";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
export default function Benefits() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout title="Benefits" keywords="" description="">
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
        <Cardleft />
        <Cardright />
        <Twocolumns />
        <Action />
      </main>
      <Footer />
    </Layout>
  );
}
