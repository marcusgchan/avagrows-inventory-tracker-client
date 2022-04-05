import React from "react";
import styles from "./styles/TableInput.module.css";

function TableInput(props) {
  return <input {...props} className={styles.searchInput}></input>;
}

export default TableInput;
