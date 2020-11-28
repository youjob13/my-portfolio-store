import React from "react";
import styles from "./social.module.scss";
import img1 from "../../../assets/img/social/1.jpg";
import img2 from "../../../assets/img/social/2.jpg";
import img3 from "../../../assets/img/social/3.jpg";
import img4 from "../../../assets/img/social/4.jpg";

const Social = ({ product }) => {
  return (
    <div className={styles.social}>
      <div>
        <div className={styles.socialTitle}>
          <h3>Social</h3>
          <h2>
            #{product.brands} {product.model}
          </h2>
        </div>
        <div className={styles.socialImg}>
          <div className={styles.socialImgItem}>
            <img src={img1} />
          </div>
          <div className={styles.socialImgItem}>
            <img src={img2} />
          </div>
          <div className={styles.socialImgItem}>
            <img src={img3} />
          </div>
          <div className={styles.socialImgItem}>
            <img src={img4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
