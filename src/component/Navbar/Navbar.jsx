import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Cart from "../Cart/Cart";

const Navbar = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Logo />
        <div className={styles.subWrapper}>
          <p className={styles.product}>Products</p>

          <Cart count={0} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
