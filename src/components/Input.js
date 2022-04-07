import React from "react";
import styles from "./styles/Input.module.css";

function Input(props) {
  const className = props.className || styles.searchInput;
  return <input {...props} className={className}></input>;
}

export default Input;
