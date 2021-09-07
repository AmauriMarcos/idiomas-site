import React from "react";
import styles from "../styles/layout.module.scss";
import Head from "next/head";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  return (
    <React.Fragment>

      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>

      <div className={styles.container}>
        <main>{children}</main>
        <Footer/>
      </div>
      
    </React.Fragment>
  );
}
