import React from "react";
import styles from "./styles/TableHeaderContainer.module.css";

function TableHeaderComponent({ children }) {
  return <section className={styles.container}>{children}</section>;
}

export default TableHeaderComponent;
