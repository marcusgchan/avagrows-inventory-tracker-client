import React from "react";
import styles from "./styles/Textarea.module.css";

function Textarea(props) {
  return <textarea {...props} className={styles.note}></textarea>;
}

export default Textarea;
