import React from "react";
import styles from "./styles/TableButton.module.css";

function TableButton({ children, onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default TableButton;
