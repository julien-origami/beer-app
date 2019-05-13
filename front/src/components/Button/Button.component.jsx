import React from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

export const Button = ({
  text,
  to,
  onClick,
  type = "button",
  disabled = false
}) => (
  <>
    {type === "button" ||
      (type === "submit" && (
        <button
          onClick={onClick}
          to={to}
          type={type}
          disabled={disabled}
          className={styles.button}
        >
          {text}
        </button>
      ))}
    {type === "link" && (
      <Link
        to={to}
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={styles.button}
      >
        {text}
      </Link>
    )}
  </>
);
