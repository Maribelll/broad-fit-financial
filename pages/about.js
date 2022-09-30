import Head from "next/head";
import Layout from "../Components/Layout";
import { Menu } from "../Components/Menu";
import { Footer } from "../Components/Footer";
import { Action } from "../Components/Action";
import { Blocktopabout } from "../Components/about/Blocktop";

export default function About() {
  return (
    <Layout title="About" keywords="" description="">
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Menu />
      <main>
        <Blocktopabout />
        <Action />
      </main>
      <Footer />
    </Layout>
  );
}
