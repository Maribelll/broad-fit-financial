import Head from "next/head";
import Layout from "../Components/Layout";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";
import { Blocktopabout } from "../Components/about/Blocktop";
import { Team } from "../Components/about/Team";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import img from "../public/team/ymca.png";

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

        <div className={styles.partnered}>
          <Image width={390} height={100} src={img} alt="ymca"></Image>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
