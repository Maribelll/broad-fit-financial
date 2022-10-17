import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";
import { Blocktop } from "../Components/Blocktop";

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
    <Layout
      title="Industries Served - Broad Fit Financial"
      keywords="equipment financing, health equipment financing, fitness equipment financing, wellness equipment financing, small business equipment financing"
      description="Partnering with companies in the health, wellness, therapy, and fitness sectors."
    >
      <Head />
      <Menu />
      <main className={styles.main}>
        <Blocktop />
        <Section />
        <Iconssectors />
      </main>
      <Footer />
    </Layout>
  );
}
