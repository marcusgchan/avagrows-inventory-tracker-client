import React from "react";
import icon from "../imgs/box.svg";
import styles from "./styles/NavDropdownLink.module.css";

//{ text, imgSrc, links }
function NavDropdownLink() {
  let text = "inventory";
  let links = ["Raw Materials", "Category"];
  return (
    <button className={styles.navBtn}>
      <div>
        <img className={styles.icon} src={icon} alt="" />
        {text}
      </div>
      <div>
        {links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </div>
    </button>
  );
}

export default NavDropdownLink;
