import React from "react";
import styles from "./Contact.module.scss";
import Image from "next/image";
import locationIcon from "../../public/assets/location-pin.svg";
import telefoneIcon from "../../public/assets/phone-call.svg";
import mobileIcon from "../../public/assets/smartphone.svg";
import emailIcon from "../../public/assets/email.svg";
import contactPicture from "../../public/assets/contactPicture.svg";
import { useMediaQuery } from "react-responsive";
import { Element } from "react-scroll";

const Contact = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <Element id="contact-section" name="contact-section">
    <div className={styles.Contact}>
      <div className={styles.contactBox}>
        <h2 className={styles.title}>Vamos conversar!</h2>
        <p className={styles.text}>
          Entre em contato agora mesmo para saber mais sobre nossos cursos!
        </p>
      </div>

      <div className={styles.Contact__wrapperContent}>
        <div className={styles.boxInfoMap}>
          <div className={styles.info}>
            <div className={styles.infoDetails}>
              <Image
                width={25}
                height={25}
                src={locationIcon}
                alt="Location pin"
              />
              <p>Av. Francisco Glicério, nº 459 - Apto. 701</p>
            </div>

            <div className={styles.infoDetails}>
              <Image
                width={25}
                height={25}
                src={telefoneIcon}
                alt="Telefone number"
              />
              <p>(19) 3368-0992</p>
            </div>

            <div className={styles.infoDetails}>
              <Image
                width={25}
                height={25}
                src={mobileIcon}
                alt="Mobile number"
              />
              <p>(19) 99175-7912</p>
            </div>

            <div className={styles.infoDetails}>
              <Image width={25} height={25} src={emailIcon} alt="Email" />
              <p>hichamidiomas@gmail.com</p>
            </div>
          </div>

          {!isTabletOrMobile && <div className={styles.map}></div>}
        </div>

        <form className={styles.form}>
          <div className={styles.boxInputs}>
            <input type="text" name="name" id="name" placeholder="Nome" />
          </div>

          <div className={styles.boxInputs}>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>

          <div className={styles.boxInputs}>
            <input
              type="text "
              name="assunto"
              id="assunto"
              placeholder="Assunto"
            />
          </div>

          <div className={styles.boxInputs}>
            <textarea
              type="text "
              name="message"
              id="message"
              placeholder="Mensagem"
            />
          </div>

          <button>Enviar</button>
        </form>
      </div>
    </div>
    </Element>
  );
};

export default Contact;
