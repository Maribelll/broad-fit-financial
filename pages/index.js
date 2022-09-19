import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="" keywords="" description="">
      <Head>
        <title>Fit board financial</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js!</h1>
        <Link href="/contact">
          <p className={styles.description}>to contact page</p>
        </Link>
      </main>
    </Layout>
  );
}
