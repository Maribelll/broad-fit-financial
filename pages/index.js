import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import style from "../styles/card.module.scss";
import Layout from "../Components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Image from "next/image";
import { Menu } from "../Components/Menu";
import banner from "../public/hero.jpg";
import circle from "../public/sectors-illustration.svg";
import circle2 from "../public/sectors-illustration2.svg";
import { Icons } from "../Components/Icons";
import { Cardleft } from "../Components/Cardleft";
import { Cardright } from "../Components/Cardright";
import { Action } from "../Components/Action";
import { Footer } from "../Components/Footer";
import { Clients } from "../Components/Clients";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout
      title="Broad Fit Financial - Health &amp; Wellness Equipment Financing"
      keywords="equipment financing, health equipment financing, fitness equipment financing, wellness equipment financing, small business equipment financing"
      description="Broad Fit Financial provides equipment financing for businesses of any size looking to acquire new equipment."
    >
      <Head />

      <Menu />
      <main>
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
                  <Link href={"/contact"}>
                    <button className="dark_blue">Get in touch</button>
                  </Link>
                  <div className={styles.link}>
                    <Link href={"/benefits"}>
                      <a className="main_link">Learn More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.main_photo}>
              <Image
                src={banner}
                alt="Fitness equipment in a room"
                width={668}
                height={630}
              />
            </div>
          </div>
        </section>
        <Icons />
        <section>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className={styles.industry}
          >
            <div className={styles.industry_all}>
              <div className={styles.industry_text}>
                <h2 style={{ textAlign: "left" }}>
                  Strong industry knowledge and laser-focused expertise
                </h2>
                <p>
                  Our services are tailored to the specific needs of companies
                  in the health, wellness, therapy, and fitness sectors.
                </p>
                <Link href={"/industries"}>
                  <button className="dark_blue">See all industries</button>
                </Link>
              </div>
              <div className={styles.circle}>
                <Image src={circle} width={349} height={349} alt="" />
              </div>
              <div className={styles.circle2}>
                <Image src={circle2} width={240} height={240} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section data-aos="fade-up" style={{ margin: "0 16px" }}>
          <div className={style.helping}>
            <h2>
              Helping you navigate equipment financing from start to finish
            </h2>
            <Cardleft />
            <Cardright />
            <Clients />
            <Action />
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
