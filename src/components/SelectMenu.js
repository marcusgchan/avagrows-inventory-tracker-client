import React from "react";
import styles from "./styles/TableSelectMenu.module.css";

function SelectMenu(props) {
  return (
    <select {...props} className={styles.searchInput}>
      {props.children}
    </select>
  );
}

export default SelectMenu;
