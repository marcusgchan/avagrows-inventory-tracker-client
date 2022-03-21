import React from "react";
import styles from "./styles/MainHeading.module.css";

function MainHeading({ children }) {
  return <h1 className={styles.mainHeading}>{children}</h1>;
}

export default MainHeading;
