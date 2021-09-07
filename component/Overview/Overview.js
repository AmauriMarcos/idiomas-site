import React, {useState, useEffect} from "react";
import styles from "./Overview.module.scss";
import CountUp from "react-countup";
import Image from 'next/image';
import mundoIcon from '../../public/assets/mundo.svg';
import briefcaseIcon from '../../public/assets/office-briefcase.svg';
import capIcon from '../../public/assets/cap.svg';
import coffeeIcon from '../../public/assets/coffee.svg';

const Overview = () => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() =>{
        const handleScroll = () =>{
            const scrollPosition = window.scrollY;
            if(scrollPosition > 190){
                setIsShow(true);
            }
        }

        handleScroll();

        window.addEventListener('scroll', handleScroll)

        return() =>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isShow])

  return (
    <div className={styles.Overview}>
        {isShow && 
        <>


        <div className={styles.Overview__info}>
            <Image width={60} height={60} src={briefcaseIcon} alt="briefcase icon"/>
            <CountUp  suffix="+" duration={.7} start={0} end={20} delay={0}>
                {({ countUpRef }) => (
                <div >
                    <span className={styles.counter} ref={countUpRef} />
                </div>
                )}
            </CountUp>
            <h3>Anos de experiência</h3>
        </div>

        <div className={styles.Overview__info}>        
            <Image width={60} height={60} src={mundoIcon} alt="world icon"/>    
 
            <CountUp duration={.5}  start={0} end={5} delay={0}>
                {({ countUpRef }) => (
                <div >
                    <span className={styles.counter} ref={countUpRef} />
                </div>
                )}
            </CountUp>
          
            <h3>Idiomas</h3>
        </div>
        
        

        <div className={styles.Overview__info}>
            <Image width={60} height={60} src={capIcon} alt="cap icon"/>
            <CountUp   suffix="+" duration={.9} start={0} end={500} delay={0}>
                {({ countUpRef }) => (
                <div >
                    <span className={styles.counter} ref={countUpRef} />
                </div>
                )}
            </CountUp>
            <h3>Alunos</h3>
        </div>

        <div className={styles.Overview__info}>  
            <Image width={60} height={60} src={coffeeIcon} alt="coffee icon"/>
         
            <CountUp  suffix="+" duration={1.2} start={0} end={100} delay={0}>
                {({ countUpRef }) => (
                <div >
                    <span className={styles.counter} ref={countUpRef} />
                </div>
                )}
            </CountUp>
            <h3>Copos de café</h3>
        </div>
        </>
        }
    </div>
  );
};

export default Overview;
