import React from "react";

import { Rate } from "./Rate";

import styles from "./BeerItem.module.scss";

export const BeerItem = ({
  beer: {
    uuid,
    name,
    ibu,
    score
  },
  onRateBeer
}) => (
  <div className={styles.beerItem}>
    <div className={styles.name}>{name}</div>
    <div className={styles.ibu}>IBU: {ibu}</div>
    <div className={styles.score}>Score: {score.toPrecision(1)}</div>
    <div className={styles.rate}>
      <Rate onRate={rating => onRateBeer({ beerId: uuid, score: rating })} />
    </div>
  </div>
);
