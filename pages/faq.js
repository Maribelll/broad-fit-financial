import Head from "next/head";
import styles from "../styles/banner.module.scss";
import Layout from "../Components/Layout";
import { Menu } from "../Components/Menu";
import { Ask } from "../Components/Ask";

import { Footer } from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function Faq() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout
      title="Frequently Asked Questions - Broad Fit Financial"
      keywords="equipment financing, health equipment financing, fitness equipment financing, wellness equipment financing, small business equipment financing"
      description="Answers to commonly asked equipment financing questions."
    >
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Menu />
      <main className={styles.main}>
        <div className={styles.blocktopfaq}>
          <h2>Frequently Asked Questions</h2>
        </div>
        <Ask />
      </main>
      <Footer />
    </Layout>
  );
}
