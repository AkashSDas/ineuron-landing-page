import PrimaryButton from "@components/Button/PrimaryButton";
import SearchButton from "@components/Button/SearchButton";
import TextButton from "@components/Button/TextButton";
import CoursesDropDownMenu from "@components/DropDown/CoursesDropDownMenu";
import DropDownMenu from "@components/DropDown/DropDownMenu";
import Search from "@components/Icons/Search";
import styles from "@styles/components/Navbar.module.scss";

export default function Navbar() {
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
        <CoursesDropDownMenu />
        <DropDownMenu label="Products" items={products} />
        <DropDownMenu label="Company" items={companyItems} />
      </ul>

      <ul className={styles["nav-right"]}>
        <SearchButton />
        <TextButton label="Login" />
        <PrimaryButton label="Get Started" />
      </ul>
    </nav>
  );
}
