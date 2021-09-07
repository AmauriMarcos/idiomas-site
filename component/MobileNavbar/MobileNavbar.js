import React, {useState} from 'react';
import styles from './MobileNavbar.module.scss';
import { useMediaQuery } from 'react-responsive';
import Image  from 'next/image';
import mobileLogo from '../../public/assets/mobileLogo.png';
import { Pivot as Hamburger } from 'hamburger-react';
import { stack as Menu } from 'react-burger-menu';

const MobileNavbar = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [isOpen, setOpen] = useState(false);

    const handleOnClose = () =>{
        setOpen(false)
    }

    return (
        <>
        <div className={styles.MobileNavbar}>
            <div>
                 <Image src={mobileLogo}/>
            </div>
            
            <div className={styles.button}>
                <Hamburger  rounded  toggled={isOpen} toggle={setOpen} />
            </div>

        </div>
        
        <Menu  id={ "sidebar" } className={styles.myMenu} onClose={ handleOnClose } isOpen={isOpen}>
            <div className={styles.boxMenu}>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a className="menu-item--small" href="#">Settings</a>
            </div>
        </Menu>

        </>
    )
}

export default MobileNavbar
