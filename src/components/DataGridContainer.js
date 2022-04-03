import React from "react";
import styles from "./styles/DataGridContainer.module.css";

function DataGridContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default DataGridContainer;
