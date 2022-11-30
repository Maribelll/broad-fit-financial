import Head from "next/head";
import Layout from "../Components/Layout";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";
import styles from "../styles/banner.module.scss";
// import AOS from "aos";
// import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Allpartners } from "../Components/Partners";

// import Menu from "../Components/Menu";

export default function Partners() {
  return (
    <Layout title="" keywords="" description="">
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
          <h2>Proudly partnered with the following and more</h2>
        </div>
        <Allpartners />
      </main>
      <Footer />
    </Layout>
  );
}
