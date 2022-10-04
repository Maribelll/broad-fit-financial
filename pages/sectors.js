import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";
import { Blocktop } from "../Components/Blocktop";
import { Action } from "../Components/Action";
import { Section } from "../Components/Section";
import { Iconssectors } from "../Components/Iconssectors";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
// import Menu from "../Components/Menu";

export default function Sectors() {
  useEffect(() => {
    AOS.init();
  }, []);
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
        <Section />
        <Iconssectors />
        <Action />
      </main>
      <Footer />
    </Layout>
  );
}
