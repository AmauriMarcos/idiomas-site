import "../styles/global.scss";
import Layout from "../component/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap" rel="stylesheet"></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <title>Amauri Santos</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
