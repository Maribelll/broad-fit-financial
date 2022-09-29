import Head from "next/head";

import Layout from "../Components/Layout";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";
import { Blocktop } from "../Components/benefits/Blocktop";
import { Action } from "../Components/Action";
import { Cardleft } from "../Components/benefits/Cardleft";
import { Cardright } from "../Components/benefits/Carfright";

export default function Benefits() {
  return (
    <Layout title="Benefits" keywords="" description="">
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Menu />
      <main>
        <Blocktop />
        <Cardleft />
        <Cardright />
        <Action />
      </main>
      <Footer />
    </Layout>
  );
}
