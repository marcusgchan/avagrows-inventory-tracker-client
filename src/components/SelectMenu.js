import React from "react";
import styles from "./styles/SelectMenu.module.css";

function SelectMenu(props) {
  return (
    <select {...props} className={styles.searchInput}>
      {props.children}
    </select>
  );
}

export default SelectMenu;
