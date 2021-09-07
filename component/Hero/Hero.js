import React from "react";
import styles from "./Hero.module.scss";
import Navbar from "../Navbar/Navbar";
import { useMediaQuery } from 'react-responsive';
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const Hero = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <div className={styles.Hero}>
     {isTabletOrMobile && <MobileNavbar/>}
     {!isTabletOrMobile && <Navbar/>}
      <video className={styles.Hero__video} autoPlay loop muted>
        <source src="/assets/heroWorldMapVideo.mp4" type="video/mp4" />
      </video>
      <div className={styles.Hero__insufilm}></div>
      <div className={styles.Hero__content}>
            <p>Hicham idiomas</p>
            <h1>Experimente o mundo em uma nova língua</h1>
            <button>Saiba mais</button>
      </div>
    </div>
  );
};

export default Hero;
