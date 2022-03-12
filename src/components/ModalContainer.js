import React from "react";
import styles from "./styles/ModalContainer.module.css";

function ModalContainer({ children }) {
  return <section className={styles.background}>{children}</section>;
}

export default ModalContainer;
