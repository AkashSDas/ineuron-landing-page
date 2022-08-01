import { useState } from "react";

import CoursesDropDown from "@components/DropDown/CoursesDropDown";
import CoursesDropDownMenu from "@components/DropDown/CoursesDropDownMenu";
import ProductsDropDown from "@components/DropDown/ProductsDropDown";
import { ArrowDropDown } from "@components/Icons/ArrowDropDown";
import styles from "@styles/components/Navbar.module.scss";

import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles["nav-left"]}>
        <img src="/logo.svg" alt="iNeuron Logo" />
        <NavItem label="Courses">
          <CoursesDropDownMenu />
        </NavItem>
      </ul>
    </nav>
  );
}
