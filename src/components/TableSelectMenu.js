import React from "react";
import styles from "./styles/TableSelectMenu.module.css";

function SelectMenu({ children, onChange, value }) {
  return (
    <select className={styles.searchInput} onChange={onChange} value={value}>
      {children}
    </select>
  );
}

export default SelectMenu;
