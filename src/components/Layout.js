import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles/Layout.module.css";

function Layout() {
  return (
    <section>
      <header id={styles["headerBar"]}>
        <label id={styles["userName"]}> Username </label>
      </header>
      <nav id={styles["navBar"]}>nav</nav>
      <section id={styles["content"]}>
        <Outlet />
      </section>
    </section>
  );
}

export default Layout;
