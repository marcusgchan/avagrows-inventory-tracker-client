import React from "react";
import styles from "./styles/Input.module.css";

function Input(props) {
  return <input {...props} className={styles.searchInput}></input>;
}

export default Input;
