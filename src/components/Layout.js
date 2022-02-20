import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles/Layout.module.css";

function Layout() {
  return (
    <section class={styles["grid"]}>
      <button class={styles["navBarButton"]} type="button">
        <div class={styles["hamburgerButton"]}></div>
        <div class={styles["hamburgerButton"]}></div>
        <div class={styles["hamburgerButton"]}></div>
      </button>
      <header class={styles["headerBar"]}>
        <img class={styles["logo"]} src="" alt="logo"></img>
        <div class={styles["userNameBox"]}>
          <p class={styles["userName"]}> Username </p>
        </div>
      </header>
      <nav class={styles["navBar"]}>nav</nav>
      <section class={styles["content"]}>
        <Outlet />
      </section>
    </section>
  );
}

export default Layout;
