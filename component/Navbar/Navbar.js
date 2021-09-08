import React, {useState, useEffect} from 'react'
import styles from './Navbar.module.scss';
import Image from 'next/image';
import logo from '../../public/assets/logo.png';
import skypeIcon from '../../public/assets/big-skype-logo.svg';
import phoneIcon from '../../public/assets/phone-call.svg';
import Scroll from "react-scroll";
import { useMediaQuery } from 'react-responsive';

const ScrollLink = Scroll.Link;

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const changeBackground = () =>{
        if(window.scrollY >= 104){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    useEffect(() =>{

        window.addEventListener('scroll', changeBackground);

        return(() =>{
            window.removeEventListener('scroll', changeBackground);
        })
    
    }, [])

 
    return (
         <div className={`${styles.Navbar} ${navbar? styles.active : null}`}>
            <div className={styles.Navbar__logo}>
                <Image src={logo} alt="logo hicham idiomas"/>
            </div>
            <ul className={styles.Navbar__list}>
                <li>
                <ScrollLink
                    to="idiomas-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={styles.link}
                    activeClass="some-active-class"
                >Idiomas
                </ScrollLink>
                </li>
                <li>
                <ScrollLink
                    to="services-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={styles.link}
                    activeClass="some-active-class"
                >Serviços
                </ScrollLink>
                </li>
                <li>
                <ScrollLink
                    to="about-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={styles.link}
                    activeClass="some-active-class"
                >O professor
                </ScrollLink>
                </li>
                <li>
                <ScrollLink
                    to="testimonials-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={styles.link}
                    activeClass="some-active-class"
                >Depoimentos
                </ScrollLink>
                </li>
                <li>
                <ScrollLink
                    to="plans-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={styles.link}
                    activeClass="some-active-class"
                >Pacotes
                </ScrollLink>
                </li>
                <li>
                <ScrollLink
                    to="contact-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={styles.link}
                    activeClass="some-active-class"
                >Contato
                </ScrollLink>
                </li>
            </ul>
            <div className={styles.Navbar__contact}>
                <div className={styles.Navbar__contact__info}>
                    <Image src={phoneIcon} height={30} width={30} />
                    <p>(19) 99175-7912 (19) 3368.0992 </p>
                </div>
                <div className={styles.Navbar__contact__info}>
                    <Image src={skypeIcon} height={30} width={30} />
                    <p>hicham487</p>
                </div>
            </div>
        </div>

    )
}

export default Navbar;
