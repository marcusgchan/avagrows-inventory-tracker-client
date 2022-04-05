import React from "react";
import styles from "./styles/TableSelectMenu.module.css";

function SelectMenu(props) {
  return (
    <select
      {...props}
      className={styles.searchInput}
      onChange={props.onChange}
      value={props.value}
    >
      {props.children}
    </select>
  );
}

export default SelectMenu;
