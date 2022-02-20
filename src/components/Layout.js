import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles/Layout.module.css";

function Layout() {
  return (
    <section className={styles.grid}>
      <header className={styles.headerBar}>
        <button className={styles.navBarButton} type="button">
          <div className={styles.hamburgerButton}></div>
          <div className={styles.hamburgerButton}></div>
          <div className={styles.hamburgerButton}></div>
        </button>
        <img className={styles.logo} src="" alt="logo"></img>
        <div className={styles.userNameBox}>
          <p className={styles.userName}> Username </p>
        </div>
        <button className={styles.bellButton} type="button">
          <img src="" alt="bell"></img>
        </button>
        <button className={styles.infoButton} type="button">
          <img src="" alt="?"></img>
        </button>
      </header>
      <nav className={styles.navBar}>
        <div className={styles.homeButton}>
          Dashboard/<br></br>Home
        </div>
        <div className={styles.inventoryButton} type="button">
          <img src="" alt=""></img>
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
