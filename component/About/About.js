import React from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element id="about-section" name="about-section">
      <div className={styles.About}>
        <div className={styles.About__bigQuote}>
          <figure>
            <blockquote>
              <p className={styles.text}>
                “ A minha proposta ao fundar a Hicham Idiomas é dividir com meus
                alunos minha paixão pela língua e pela cultura desses lugares.
                Acredito que a experiência de aprender um novo idioma permite
                enxergar o mundo com outros olhos, ampliar sua compreensão e
                destruir preconceitos ”
              </p>
            </blockquote>
            <figcaption className={styles.caption}>
              — Hicham El Katter
            </figcaption>
          </figure>
        </div>

        <div className={styles.About__blockOfText}>
          <p>
            O professor Hicham ministra cursos em escolas de idiomas dentro da
            UNICAMP há mais de 18 anos, tendo lecionado em cursos da FEA
            (Faculdade de Engenharia de Alimentos) e do IE (Instituto de
            Economia), onde mantém vínculos atualmente.
          </p>

          <p>
            Aprendeu francês e árabe como idiomas maternos e alemão pelo
            Instituto Goethe. Posteriormente realizou vivências na Europa, em
            países como França, Alemanha e Suíça. Além das aulas, Hicham tem
            experiência em traduções para empresas e grandes ramos do varejo.
          </p>
        </div>

        <div className={styles.About__grid}>
          <div className={styles.photo1}></div>

          <div className={styles.photo2}></div>

          <div className={styles.photo3}></div>

          <div className={styles.photo4}></div>
        </div>
      </div>
    </Element>
  );
};

export default About;
