import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles/Layout.module.css";

function Layout() {
  return (
    <section class={styles["grid"]}>
      <header class={styles["headerBar"]}>
        <button class={styles["navBarButton"]} type="button">
          <div class={styles["hamburgerButton"]}></div>
          <div class={styles["hamburgerButton"]}></div>
          <div class={styles["hamburgerButton"]}></div>
        </button>
        <img class={styles["logo"]} src="" alt="logo"></img>
        <div class={styles["userNameBox"]}>
          <p class={styles["userName"]}> Username </p>
        </div>
        <button class={styles["bellButton"]} type="button">
          <img src="" alt="bell"></img>
        </button>
        <button class={styles["infoButton"]} type="button">
          <img src="" alt="?"></img>
        </button>
      </header>
      <nav class={styles["navBar"]}>nav</nav>
      <section class={styles["content"]}>
        <Outlet />
      </section>
    </section>
  );
}

export default Layout;
