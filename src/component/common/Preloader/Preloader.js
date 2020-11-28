import React from "react";
import styles from "./preloader.module.scss";

const Preloader = () => (
  <div className={styles.container}>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
  </div>
);

export default Preloader;
