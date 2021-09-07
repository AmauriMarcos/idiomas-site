import styles from '../styles/home.module.scss';
import Hero from '../component/Hero/Hero';
import Overview from '../component/Overview/Overview';
import Idiomas from '../component/Idiomas/Idiomas';
import About from '../component/About/About';
import Features from '../component/Features/Features';
import Testimonials from '../component/Testimonials/Testimonials';
import Pricing from '../component/Pricing/Pricing';
import Contact from '../component/Contact/Contact';

export default function Home() {
  return (
    <div className={styles.container}>
        <Hero/>
        <Overview/>
        <Idiomas/>
        <About/>
        <Features/>
        <Testimonials/>
        <Pricing/>
        <Contact/>
    </div>
  )
}
