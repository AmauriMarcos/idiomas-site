import React from "react";
import styles from "./Features.module.scss";
import { data } from "./dataFeatures";
import FeatureItem from "./FeatureItem/FeatureItem";
import { Element } from "react-scroll";

const Features = () => {
  console.log(data);
  return (
    <Element id="services-section" name="services-section">
    <div className={styles.Features}>
      <h2>O que oferecemos </h2>
      <div className={styles.Features__wrapper}>
        {data.map((feature) => {
          return (
            <FeatureItem
              key={feature.id}
              img={feature.img}
              title={feature.title}
              text={feature.text}
            />
          );
        })}
      </div>
    </div>
    </Element>
  );
};

export default Features;
