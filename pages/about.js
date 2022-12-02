import Head from "next/head";
import Layout from "../Components/Layout";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";
import { Blocktopabout } from "../Components/about/Blocktop";
import { Team } from "../Components/about/Team";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/about.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import circle from "/public/about/badge.svg";

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
        <section>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className={styles.industry}
          >
            <div className={styles.industry_all}>
              <div className={styles.industry_text}>
                <h3 style={{ textAlign: "left" }}>About Us</h3>
                <p>
                  Broad Fit Financial is a female-owned and operated finance
                  company. Broad Fit was created out of a desire to better
                  support industry relationships through a more transparent and
                  collaborative process in providing flexible financing
                  structures tailored to each customer’s specific goals and
                  needs.
                  <br />
                  <br /> Our team has served in all aspects of our business from
                  sales, support, management, operations, and more. We
                  understand the multi-layered facets comprising projects in all
                  stages - new, existing, and expanding.
                  <br />
                  <br /> Based on our extensive knowledge and success within
                  this niche space, Broad Fit Financial effectively guides
                  customers through the financing process with honest and
                  transparent solutions.
                </p>
              </div>
              <div className={styles.circle}>
                <Image src={circle} width={260} height={260} alt="" />
              </div>
            </div>
          </div>
        </section>
        <Team />
      </main>
      <Footer />
    </Layout>
  );
}
