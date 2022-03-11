import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/ModalContainer.module.css";
import { useState } from "react";

function ModalContainer(props) {
  console.log(props);
  const children = props.children;
  return <section className={styles.background}>{children}</section>;
}

export default ModalContainer;
