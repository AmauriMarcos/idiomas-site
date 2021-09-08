import React from "react";
import styles from "../styles/layout.module.scss";
import Head from "next/head";
import Footer from "./Footer/Footer";
import Navbar from './Navbar/Navbar';
import { useMediaQuery } from 'react-responsive';
import MobileNavbar from './MobileNavbar/MobileNavbar';


export default function Layout({ children }) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });

  return (
    <React.Fragment>

      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>

      {isDesktopOrLaptop && <Navbar/>}
      {isTabletOrMobile && <MobileNavbar/>}
      
      <div className={styles.container}>
        <main>{children}</main>
        <Footer/>
      </div>
      
    </React.Fragment>
  );
}
