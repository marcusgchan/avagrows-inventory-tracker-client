import React from "react";
import styles from "./styles/SelectMenu.module.css";

function SelectMenu(props) {
  const className = props.className || styles.searchInput;
  return (
    <select {...props} className={className}>
      {props.children}
    </select>
  );
}

export default SelectMenu;
