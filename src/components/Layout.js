import { useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles/Layout.module.css";
import hamburgerButton from "../imgs/hamburger-button.svg";
import logo from "../imgs/logo.PNG";
import bell from "../imgs/bell.svg";
import help from "../imgs/help-circle.svg";
import grid from "../imgs/grid.svg";
import box from "../imgs/package.svg";
import users from "../imgs/users.svg";
import book from "../imgs/book-open.svg";
import arrowDown from "../imgs/arrowDown.svg";
import NavDropdownLink from "./NavDropdownLink";

const linkDefaultStates = {
  home: false,
  inventory: false,
  supplier: false,
};

function Layout() {
  const [dropDownLinkToggle, setDropDownLinkToggle] = useState({
    ...linkDefaultStates,
  });
  function handleDropDownLinkToggle(e) {
    const newToggledStates = { ...dropDownLinkToggle };
    const property = e.currentTarget.getAttribute("data-name");
    console.log(property, dropDownLinkToggle[property]);
    newToggledStates[property] = !newToggledStates[property];
    setDropDownLinkToggle(newToggledStates);
  }
  return (
    <section className={styles.grid}>
      <header className={styles.headerBar}>
        <div className={styles.leftHeader}>
          <button className={styles.navBarButton} type="button">
            <img src={hamburgerButton} alt="NavButton"></img>
          </button>
          <div className={styles.logo}>
            <img className={styles.logo} src={logo} alt="logo"></img>
          </div>
        </div>
        <div className={styles.rightHeader}>
          <div className={styles.userNameBox}>
            <p className={styles.userName}> Username </p>
          </div>
          <button className={styles.bellButton} type="button">
            <img src={bell} alt="bell"></img>
          </button>
          <button className={styles.infoButton} type="button">
            <img src={help} alt="?"></img>
          </button>
        </div>
      </header>
      <nav className={styles.navBar}>
        <div className={styles.homeButton} type="button">
          <img src={grid} alt="" className={styles.gridImg}></img>
          <p className={styles.dashboard}>
            Dashboard/<br></br>Home
          </p>
        </div>
        <div className={styles.inventoryButton} type="button">
          <img src={box} alt="" className={styles.boxImg}></img>
          <p className={styles.inventory}>Inventory</p>
          <img src={arrowDown} alt="" className={styles.arrowImg}></img>
        </div>
        <div className={styles.supplierButton} type="button">
          <img src={users} alt="" className={styles.usersImg}></img>
          <p className={styles.supplier}>My Suppliers</p>
        </div>
        <NavDropdownLink
          text="inventory"
          imgSrc={box}
          links={["raw materials", "category"]}
          handleDropDownLinkToggle={handleDropDownLinkToggle}
          dropDownLinkToggle={dropDownLinkToggle}
        />
        {/* <div className={styles.reportButton} type="button">
          <img src={book} alt="" className={styles.bookImg}></img>
          <p className={styles.report}>Reports</p>
        </div> */}
      </nav>
      <section className={styles.content}>
        <Outlet />
      </section>
    </section>
  );
}

export default Layout;
