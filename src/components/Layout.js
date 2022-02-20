import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles/Layout.module.css";

function Layout() {
  return (
    <section>
      <header>top</header>
      <nav>nav</nav>
      <section>
        <Outlet />
      </section>
    </section>
  );
}

export default Layout;
