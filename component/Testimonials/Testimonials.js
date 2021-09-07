import React from "react";
import styles from "./Testimonials.module.scss";
import Image from "next/image";
import testimonialOne from "../../public/assets/testimonial1.jpg";
import testimonialTwo from "../../public/assets/testimonial2.jpg";
import testimonialThree from "../../public/assets/testimonial3.jpg";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ButtonFirst,
  ButtonLast,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Element } from "react-scroll";

const Testimonials = () => {
  return (
    <Element id="testimonials-section" name="testimonials-section">
    <div className={styles.Testimonials}>
      <div className={styles.testimonialBox}>
        <h2 className={styles.title}>Depoimentos</h2>
        <p className={styles.text}>O que nossos alunos estão dizendo</p>
      </div>

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        className={styles.carouselContainer}
      >
        <Slider className={styles.containerSlider}>
          <Slide className={styles.theSlide} index={0}>
            <div className={styles.slideContent}>
              <div className={styles.boxImage}>
                <Image
                  height={250}
                  width={250}
                  className={styles.img}
                  src={testimonialOne}
                />
                <div className={styles.circle}></div>
              </div>
              <div className={styles.description}>
                <p className={styles.theQuote}>
                  Gosto das aulas do professor Hicham porque são dinâmicas e o
                  aluno convive com temas do dia a dia para facilitar o
                  aprendizado. Estou fazendo aulas para tirar meu visto alemão
                  há seis meses e estou adorando a experiência.
                </p>

                <div className={styles.names}>
                  <h2>Luciana Borges</h2>
                  <p className={styles.curso}>Aluna do curso de Alemão</p>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <div className={styles.slideContent}>
              <div className={styles.boxImage}>
                <Image
                  height={250}
                  width={250}
                  className={styles.img}
                  src={testimonialTwo}
                />
                <div className={styles.circle}></div>
              </div>
              <div className={styles.description}>
                <p className={styles.theQuote}>
                  Há um semestre iniciei minhas aulas com o Hicham, comecei com
                  o francês e, após as provas de proficiência do doutorado,
                  decidi mudar para o alemão. Confesso que com ele tive o melhor
                  dos dois idiomas até agora. Imprescindível!
                </p>

                <div className={styles.names}>
                  <h2>Vanessa Ferreira</h2>
                  <p className={styles.curso}>Aluna do curso de Alemão</p>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={2}>
            <div className={styles.slideContent}>
              <div className={styles.boxImage}>
                <Image
                  height={250}
                  width={250}
                  className={styles.img}
                  src={testimonialThree}
                />
                <div className={styles.circle}></div>
              </div>
              <div className={styles.description}>
                <p className={styles.theQuote}>
                  As aulas do professor Hicham são sempre muito dinâmicas,
                  interessantes e despertam a curiosidade do aluno sobre o
                  idioma. O curso de francês me permite conhecer e descobrir a
                  língua de Molière, Édith Piaf e Brigitte Bardot.
                </p>

                <div className={styles.names}>
                  <h2>Carlos Rodriguez</h2>
                  <p className={styles.curso}>Aluno do curso de Francês</p>
                </div>
              </div>
            </div>
          </Slide>
        </Slider>
        <ButtonBack className={`${styles.backButton} ${styles.button}`}>
          &#10094;
        </ButtonBack>
        <ButtonNext className={`${styles.nextButton} ${styles.button}`}>
          &#10095;
        </ButtonNext>
        <div className={styles.dots}>
          <Dot className={styles.dot} disabled={false} slide={0} />
          <Dot className={styles.dot} disabled={false} slide={1} />
          <Dot className={styles.dot} disabled={false} slide={2} />
        </div>
      </CarouselProvider>
    </div>
    </Element>
  );
};

export default Testimonials;
