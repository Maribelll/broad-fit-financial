import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";
import { Blocktop } from "../Components/process/Blocktop";
import { Action } from "../Components/Action";
import { Stage } from "../Components/process/Stage";
import { Payment } from "../Components/process/Payment";
import { Reviews } from "../Components/process/Reviews";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

// import Menu from "../Components/Menu";

export default function Process() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout title="Process" keywords="" description="">
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
        <Payment />
        <Reviews />
        <Action />
      </main>
      <Footer />
    </Layout>
  );
}
