// pages/_app.js
import "../styles/tailwind.config.css";
import "../styles/globals.css";
import Head from "next/head";
import Layout from "../layouts/main.layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Wholesale</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;