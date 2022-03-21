import React from "react";
import styles from "./styles/LayoutContainer.module.css";

function LayoutContainer({ children }) {
  return <section className={styles.container}>{children}</section>;
}

export default LayoutContainer;
