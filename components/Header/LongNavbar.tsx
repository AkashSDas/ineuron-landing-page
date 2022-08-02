import PrimaryButton from "@components/Button/PrimaryButton";
import SearchButton from "@components/Button/SearchButton";
import TextButton from "@components/Button/TextButton";
import styles from "@styles/components/Header/LongNavbar.module.scss";

import CoursesDropDown from "./CoursesDropDown";
import DropDown from "./DropDown";

function LongNavbar() {
  const products = [
    "Blog",
    "Job Portal",
    "Intership Portal",
    "Become an Affiliate",
    "Hall of Fame",
  ];

  const companyItems = [
    "About Us",
    "Contact Us",
    "Hackathon",
    "Job Guarantee",
    "Job Assistance",
    "FAQs",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  return (
    <nav className={styles.navbar}>
      <ul className={styles["nav-left"]}>
        <img src="/logo.svg" alt="iNeuron Logo" />
        <CoursesDropDown />
        <DropDown label="Products" items={products} />
        <DropDown label="Company" items={companyItems} />
      </ul>

      <ul className={styles["nav-right"]}>
        <SearchButton />
        <TextButton label="Login" />
        <PrimaryButton label="Get Started" />
      </ul>
    </nav>
  );
}

export default LongNavbar;
