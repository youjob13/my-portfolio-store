import React from "react";
import styles from "./aboutMe.module.scss";

const AboutMe = ({ product }) => {
  return (
    <div className={styles.aboutMe}>
      <img src={product.bgAbout ? product.bgAbout : null} />
      {Object.keys(product.about).map((key) => (
        <div key={key} className={styles.aboutMeTitle}>
          <h3>{key}</h3>
          <p>{product.about[key]}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutMe;
