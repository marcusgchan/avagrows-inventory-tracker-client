import { useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles/Layout.module.css";
import hamburgerButton from "../imgs/hamburger-button.svg";
import logo from "../imgs/logo.PNG";
import bell from "../imgs/bell.svg";
import help from "../imgs/help-circle.svg";
import grid from "../imgs/grid.svg";
import box from "../imgs/package.svg";
import book from "../imgs/book-open.svg";
import userServices from "../services/userServices";
import { useNavigate } from "react-router-dom";
import useLogin from "../contexts/UserContext";

function Layout() {
  const [selected, setSelected] = useState("Dashboard/Home");
  const [toggleNav, setToggleNav] = useState(true);
  const handleNavToggle = () => setToggleNav((cur) => !cur);

  const navigate = useNavigate();
  const { setUser } = useLogin();

  function handleLogout() {
    userServices
      .logout()
      .then((res) => {
        setUser({});
        navigate("/login");
      })
      .catch((err) => console.log("unable to logout"));
  }
  return (
    <section
      className={styles.grid}
      style={toggleNav ? null : { gridTemplateColumns: "0 1fr " }}
    >
      <header className={styles.headerBar}>
        <div className={styles.leftHeader}>
          <button
            className={styles.navBarButton}
            type="button"
            onClick={handleNavToggle}
          >
            <img src={hamburgerButton} alt="NavButton"></img>
          </button>
          <div className={styles.logo}>
            <img className={styles.logo} src={logo} alt="logo"></img>
          </div>
        </div>
        <div className={styles.rightHeader}>
          <button className={`${styles.btn}`}>Username</button>
          <button className={styles.bellButton} type="button">
            <img src={bell} alt="bell"></img>
          </button>
          <button className={styles.infoButton} type="button">
            <img src={help} alt="?"></img>
          </button>
          <button className={`${styles.logoutBtn}`} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>
      <nav
        className={styles.navBar}
        style={toggleNav ? null : { width: 0, padding: 0, display: "none" }}
      >
        <div
          className={`${styles.homeButton} ${styles.btnPadding} ${
            selected === "dashboard/home" ? styles.navSelectedBg : ""
          }`}
          type="button"
          onClick={() => {
            navigate("/");
            setSelected("dashboard/home");
          }}
        >
          <img src={grid} alt="" className={styles.gridImg}></img>
          <p className={styles.dashboard}>
            Dashboard/<br></br>Home
          </p>
        </div>
        <div
          className={`${styles.inventoryButton} ${styles.btnPadding} ${
            selected === "inventory" ? styles.navSelectedBg : ""
          }`}
          type="button"
          onClick={() => {
            navigate("/inventory");
            setSelected("inventory");
          }}
        >
          <img src={box} alt="" className={styles.boxImg}></img>
          <p className={styles.inventory}>Inventory</p>
        </div>
        <div
          className={`${styles.inventoryButton} ${styles.btnPadding} ${
            selected === "table-management" ? styles.navSelectedBg : ""
          }`}
          type="button"
          onClick={() => {
            navigate("/table-management");
            setSelected("table-management");
          }}
        >
          <img src={box} alt="" className={styles.boxImg}></img>
          <p className={styles.inventory}>Table Management</p>
        </div>
        <div
          className={`${styles.reportButton} ${styles.btnPadding} ${
            selected === "reports" ? styles.navSelectedBg : ""
          }`}
          type="button"
          onClick={() => {
            setSelected("reports");
          }}
        >
          <img src={book} alt="" className={styles.bookImg}></img>
          <p className={styles.report}>Reports</p>
        </div>
      </nav>
      <section className={styles.content}>
        <Outlet />
      </section>
    </section>
  );
}

export default Layout;
