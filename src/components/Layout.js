import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
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

// The values are used to
const navConfig = [
  { text: "Dashboard/Home", value: "", logo: grid, to: "/" },
  { text: "Inventory", value: "inventory", logo: box, to: "/inventory" },
  {
    text: "Table Management",
    value: "table-management",
    logo: box,
    to: "/table-management",
  },
  { text: "Reports", value: "reports", logo: book, to: "/reports" },
];

function Layout() {
  const [toggleNav, setToggleNav] = useState(true);
  const handleNavToggle = () => setToggleNav((cur) => !cur);

  return (
    <section
      className={styles.grid}
      style={toggleNav ? null : { gridTemplateColumns: "1fr" }}
    >
      <Heading handleNavToggle={handleNavToggle} />
      <Nav isToggled={toggleNav} />
      <Outlet />
    </section>
  );
}

function Heading({ handleNavToggle }) {
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
  );
}

function Nav({ isToggled }) {
  const [selected, setSelected] = useState(navConfig[0].value);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle nav select highlighted based on url
  useEffect(() => {
    setSelected(location.pathname.split("/")[1]);
  }, [location]);

  return (
    <nav className={`${styles.navBar} ${isToggled ? "" : styles.hidden}`}>
      {navConfig.map(({ text, value, logo, to }) => {
        return (
          <div
            key={value}
            className={`${styles.navBtnContainer} ${
              selected === value ? styles.navSelectedBg : ""
            }`}
            onClick={() => {
              navigate(to);
              setSelected(value);
            }}
          >
            <img src={logo} alt="" className={styles.img} />
            <h2>{text}</h2>
          </div>
        );
      })}
    </nav>
  );
}

export default Layout;
