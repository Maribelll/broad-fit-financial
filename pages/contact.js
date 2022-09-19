import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout";
import Link from "next/link";

export default function Contact() {
  return (
    <Layout title="Contact" keywords="" description="">
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Contact!</h1>
        <Link href="/">
          <p className={styles.description}>To home page</p>
        </Link>
      </main>
    </Layout>
  );
}
