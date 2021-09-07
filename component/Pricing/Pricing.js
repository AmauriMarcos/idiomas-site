import React from "react";
import styles from "./Pricing.module.scss";
import { Element } from "react-scroll";

const Pricing = () => {
  return (
    <Element id="plans-section" name="plans-section">
    <div className={styles.Pricing}>
      <div className={styles.pricingBox}>
        <h2 className={styles.title}>Escolha o seu pacote de 06 meses</h2>
        <p className={styles.text}>Oferecemos diversas opções para atender às suas necessidades e à sua disponibilidade.</p>
      </div>

      <div className={styles.Pricing__cards}>
        <div className={styles.card}>
          <h3>24 horas</h3>
          <h4>R$90/hora</h4>
          <p>
            Fazemos o parcelamento em até <strong>8x R$270</strong>. Aceitamos
            cartões de débito, créditos e cheques (até 6x).
          </p>
        </div>

        <div className={styles.card}>
          <h3>36 horas</h3>
          <h4>R$85/hora</h4>
          <p>
            Fazemos o parcelamento em até <strong>8x R$270</strong>. Aceitamos
            cartões de débito, créditos e cheques (até 6x).
          </p>
        </div>

        <div className={styles.card}>
          <h3>48 horas</h3>
          <h4>R$80/hora</h4>
          <p>
            Fazemos o parcelamento em até <strong>8x R$270</strong>. Aceitamos
            cartões de débito, créditos e cheques (até 6x).
          </p>
        </div>

        <div className={styles.card}>
          <h3>72 horas</h3>
          <h4>R$75/hora</h4>
          <p>
            Fazemos o parcelamento em até <strong>8x R$270</strong>. Aceitamos
            cartões de débito, créditos e cheques (até 6x).
          </p>
        </div>

        <div className={`${styles.card} ${styles.special}`}>
          <h3>96 horas</h3>
          <h4>R$70/hora</h4>
          <p>
            Fazemos o parcelamento em até <strong>8x R$840</strong>. Aceitamos
            cartões de débito, créditos e cheques (até 6x).
          </p>
        </div>
      </div>
    </div>
    </Element>
  );
};

export default Pricing;
