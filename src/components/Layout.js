import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles/Layout.module.css";

function Layout() {
  return (
    <section id={styles["grid"]}>
      <header id={styles["headerBar"]}>
        <div id={styles["userNameBox"]}>
          <p id={styles["userName"]}> Username </p>
        </div>
      </header>
      <nav id={styles["navBar"]}>nav</nav>
      <section id={styles["content"]}>
        <Outlet />
      </section>
    </section>
  );
}

export default Layout;
