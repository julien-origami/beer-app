import React from "react";
import logo from "../../assets/svg/logo.svg";

import styles from "./Loader.module.scss";

export const Loader = () => (
  <img src={logo} className={styles.logo} alt="logo" />
);
