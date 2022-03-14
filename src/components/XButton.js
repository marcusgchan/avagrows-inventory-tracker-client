import React from "react";
import styles from "./styles/XButton.module.css";

function XButton({ onClick }) {
  return (
    <div className={styles.close} onClick={onClick}>
      xButton
    </div>
  );
}

export default XButton;
