import { useState } from "react";

import CoursesDropDownMenu from "@components/DropDown/CoursesDropDownMenu";
import { ArrowDropDown } from "@components/Icons/ArrowDropDown";
import styles from "@styles/components/NavItem.module.scss";

export default function NavItem(props) {
  return <CoursesDropDownMenu />;
}
