import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout";
import { Blocktopcontact } from "../Components/contact/Blocktop";
import { Menu } from "../Components/Menu";
import { Ask } from "../Components/contact/Ask";
import { Form } from "../Components/contact/Form";
import { Footer } from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout title="Contact" keywords="" description="">
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Menu />
      <main className={styles.main}>
        <Blocktopcontact />
        <Form />
        <Ask />
      </main>
      <Footer />
    </Layout>
  );
}
