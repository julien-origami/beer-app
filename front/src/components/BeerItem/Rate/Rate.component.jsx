import React from "react";

import styles from "./Rate.module.scss";
export const Rate = ({ onRate }) => (
  <div className={styles.rate}>
    <div className={styles.inLove} onClick={() => onRate(10)}/>
    <div className={styles.happy} onClick={() => onRate(5)}/>
    <div className={styles.sad} onClick={() => onRate(1)}/>
  </div>
);
