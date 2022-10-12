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
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout
      title="About - Broad Fit Financial"
      keywords="equipment financing, health equipment financing, fitness equipment financing, wellness equipment financing, small business equipment financing"
      description="Your success and growth is our top priority."
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
