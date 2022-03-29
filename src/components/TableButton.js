import React from "react";
import s from "./styles/TableButton.module.css";

function TableButton({ children, onClick, style }) {
  return (
    <button style={style} className={`${s.btn}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default TableButton;
