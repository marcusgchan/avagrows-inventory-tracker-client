import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles/Layout.module.css";
import hamburgerButton from "../imgs/hamburger-button.svg";
import bell from "../imgs/bell.svg";
import help from "../imgs/help-circle.svg";
import grid from "../imgs/grid.svg";
import box from "../imgs/package.svg";
import users from "../imgs/users.svg";
import book from "../imgs/book-open.svg";

function Layout() {
  return (
    <section className={styles.grid}>
      <header className={styles.headerBar}>
        <button className={styles.navBarButton} type="button">
          <img src={hamburgerButton} alt="NavButton"></img>
        </button>
        <img className={styles.logo} src="" alt="logo"></img>
        <div className={styles.userNameBox}>
          <p className={styles.userName}> Username </p>
        </div>
        <button className={styles.bellButton} type="button">
          <img src={bell} alt="bell"></img>
        </button>
        <button className={styles.infoButton} type="button">
          <img src={help} alt="?"></img>
        </button>
      </header>
      <nav className={styles.navBar}>
        <div className={styles.homeButton}>
          <img src={grid} alt="" className={styles.gridImg}></img>
          Dashboard/<br></br>Home
        </div>
        <div className={styles.inventoryButton} type="button">
          Inventory
        </div>
        <div className={styles.supplierButton} type="button">
          My Suppliers
        </div>
        <div className={styles.reportButton} type="button">
          Reports
        </div>
      </nav>
      <section className={styles.content}>
        <Outlet />
      </section>
    </section>
  );
}

export default Layout;
