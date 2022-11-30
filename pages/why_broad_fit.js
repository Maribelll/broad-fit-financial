import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";
import { Blocktop } from "../Components/whybroadfit/Blocktop";
import { Cardleft } from "../Components/whybroadfit/Cardleft";
import { Cardright } from "../Components/whybroadfit/Carfright";
import { Twocolumns } from "../Components/Twocolumns";
import { Payment } from "../Components/process/Payment";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
export default function Benefits() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout
      title="Why Broad Fit - Broad Fit Financial"
      keywords="equipment financing, health equipment financing, fitness equipment financing, wellness equipment financing, small business equipment financing"
      description="Through our team of experts, you'll get the equipment financing you need with a financing structure that's right for you."
    >
      <Head />
      <Menu />
      <main className={styles.main}>
        <Blocktop />
        <Cardleft />
        <Cardright />
        <Twocolumns />
        <Payment />
      </main>
      <Footer />
    </Layout>
  );
}
