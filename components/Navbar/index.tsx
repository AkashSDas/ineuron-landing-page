import CoursesDropDownMenu from "@components/DropDown/CoursesDropDownMenu";
import DropDownMenu from "@components/DropDown/DropDownMenu";
import styles from "@styles/components/Navbar.module.scss";

export default function Navbar() {
  const products = [
    "Blog",
    "Job Portal",
    "Intership Portal",
    "Become an Affiliate",
    "Hall of Fame",
  ];

  return (
    <nav className={styles.navbar}>
      <ul className={styles["nav-left"]}>
        <img src="/logo.svg" alt="iNeuron Logo" />
        <CoursesDropDownMenu />
        <DropDownMenu label="Products" items={products} />
      </ul>
    </nav>
  );
}
