import React from "react";
import styles from "./styles/TableInput.module.css";

function TableInput({ onChange, value }) {
  return (
    <input
      className={styles.searchInput}
      onChange={onChange}
      value={value}
    ></input>
  );
}

export default TableInput;
