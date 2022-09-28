import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Image from "next/image";
import { Menu } from "../Components/Menu";
import banner from "../public/hero.jpg";
import circle from "../public/sectors-illustration.svg";
import { Icons } from "../Components/Icons";
import { Cardleft } from "../Components/Cardleft";
import { Cardright } from "../Components/Cardright";
import { Action } from "../Components/Action";
import { Footer } from "../Components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout title="" keywords="" description="">
      <Head>
        <title>Fit board financial</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main className={styles.main}>
        <section className={styles.mainscreen}>
          <div className={styles.main}>
            <div className={styles.main_text}>
              <div className={styles.main_text_all}>
                <h1 className={styles.header1}>
                  Financing solutions for health &amp; wellness environments
                </h1>
                <p>
                  Broad Fit Financial provides equipment financing for
                  businesses of any size looking to acquire new equipment.
                </p>
                <div className={styles.main_text_buttons}>
                  <button className="dark_blue">Get in touch</button>
                  <div className={styles.link}>
                    <Link href={"/"}>
                      <a className="main_link">Learn More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.main_photo}>
              <Image src={banner} alt="banner" width={668} height={561} />
            </div>
          </div>
        </section>
        <Icons />
        <section>
          <div className={styles.industry}>
            <div className={styles.industry_all}>
              <div className={styles.industry_text}>
                <h2 style={{ textAlign: "left" }}>
                  Strong industry knowledge and laser-focused expertise
                </h2>
                <p>
                  Our services are tailored to the specific needs of companies
                  in the health, wellness, therapy, and fitness sectors.
                </p>
                <button className="dark_blue">See all sectors</button>
              </div>
              <div className={styles.circle}>
                <Image src={circle} width={369} height={369} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.helping}>
            <h2
              style={{
                maxWidth: "656px",
                textAlign: "center",
                margin: "0 auto",
                paddingBottom: "58px",
              }}
            >
              Helping you navigate equipment financing from start to finish
            </h2>
            <Cardleft />
            <Cardright />
            <Action />
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
