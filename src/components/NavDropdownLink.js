import React from "react";
import styles from "./styles/NavDropdownLink.module.css";

//{ text, imgSrc, links }
function NavDropdownLink({
  text,
  imgSrc,
  links,
  handleDropDownLinkToggle,
  dropDownLinkToggle,
}) {
  // let text = "inventory";
  // let links = ["Raw Materials", "Category"];
  return (
    <button
      className={styles.navBtn}
      onClick={handleDropDownLinkToggle}
      data-name={text}
    >
      <div className={styles.iconAndTextContainer}>
        <img className={styles.icon} src={imgSrc} alt="" />
        {text}
      </div>
      <li
        className={`${styles.linkContainer} ${
          dropDownLinkToggle[text] ? styles.open : ""
        }`}
      >
        {links.map((link) => (
          <ul key={link} className={styles.btnContainer}>
            <li>{link}</li>
          </ul>
        ))}
      </li>
    </button>
  );
}

export default NavDropdownLink;
