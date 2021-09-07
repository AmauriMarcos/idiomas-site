import React from "react";
import styles from "./Idiomas.module.scss";
import Image from "next/image";
import plusIcon from "../../public/assets/plusSign.svg";
import franceIcon from "../../public/assets/france.svg";
import germanyIcon from "../../public/assets/germany.svg";
import { Element } from "react-scroll";

const Idiomas = () => {
  return (
    <Element id="idiomas-section" name="idiomas-section">
    <div className={styles.Idiomas}>
      <div className={styles.Idiomas__title}>
        <p>Hicham idiomas</p>
        <h2>O que você procura?</h2>
      </div>

      <div className={styles.Idiomas__cards}>
        <div className={`${styles.card} ${styles.france}`}>
          <div className={styles.overlay}>
            <div>
              <Image
                width={40}
                height={40}
                src={franceIcon}
                alt="france icon"
              />
            </div>
            <p>
              Oui, Monsieur! A língua da diplomacia e do romance, o francês é o
              idioma oficial de 33 países, e é falado por cerca de 220 milhões
              de pessoas nos cinco continentes. Quer seja para o turismo ou para
              o negócio, o francês mantém sua relevância internacional e guarda
              uma relação íntima com o nosso português. Um prato cheio para
              amantes de idiomas!
            </p>
            <button>Curso de Francês</button>
          </div>

          <h3>Curso de Francês</h3>
          <span className={styles.card__more}>
            <div className={styles.iconMore}>
              <Image width={29} height={29} src={plusIcon} alt="plus icon" />
            </div>
          </span>
        </div>

        <div className={`${styles.card} ${styles.germany}`}>
          <div className={styles.overlay}>
            <Image width={40} height={40} src={germanyIcon} alt="france icon" />
            <p>
              Mais pessoas falam alemão na Europa do qualquer outra língua, e o
              idioma está entre os dez idiomas mais comumente utilizados no
              mundo. A língua da inovação e da ciência é também atrelada a uma
              vasta produção cultural, no cinema, na música e na literatura.
              Como a quarta maior economia mundial e o crescente número de
              empresas multinacionais, o idioma alemão é um diferencial de peso
              em qualquer currículo.
            </p>
            <button>Curso de Alemão</button>
          </div>

          <h3>Curso de Alemão</h3>
          <span className={styles.card__more}>
            <div className={styles.iconMore}>
              <Image width={29} height={29} src={plusIcon} alt="plus icon" />
            </div>
          </span>
        </div>
      </div>
    </div>
    </Element>
  );
};

export default Idiomas;
