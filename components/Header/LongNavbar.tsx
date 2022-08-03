import { motion } from "framer-motion";
import { useContext } from "react";

import PrimaryButton from "@components/Button/PrimaryButton";
import SearchButton from "@components/Button/SearchButton";
import TextButton from "@components/Button/TextButton";
import { SearchModalContext } from "@lib/context";
import styles from "@styles/components/Header/LongNavbar.module.scss";

import CoursesDropDown from "./CoursesDropDown";
import DropDown from "./DropDown";

function LongNavbar() {
  const { searchModalIsOpen, setSearchModalIsOpen } =
    useContext(SearchModalContext);

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

  const container = {
    animate: {
      transition: { delayChildren: 0.4, staggerChildren: 0.1 },
    },
  };

  const container2 = {
    animate: {
      transition: { delayChildren: 0.9, staggerChildren: 0.1 },
    },
  };

  const item = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1 },
    },
  };

  return (
    <nav className={styles.navbar}>
      <motion.ul
        variants={container}
        initial="initial"
        animate="animate"
        className={styles["nav-left"]}
      >
        <motion.img variants={item} src="/logo.svg" alt="iNeuron Logo" />
        <motion.div variants={item} className="h-full">
          {<CoursesDropDown />}
        </motion.div>
        <motion.div variants={item} className="h-full">
          <DropDown label="Products" items={products} />
        </motion.div>
        <motion.div variants={item} className="h-full">
          <DropDown label="Company" items={companyItems} />
        </motion.div>
      </motion.ul>

      <motion.ul
        variants={container2}
        initial="initial"
        animate="animate"
        className={styles["nav-right"]}
      >
        <motion.div
          variants={item}
          onClick={() => setSearchModalIsOpen((s) => !s)}
        >
          <SearchButton />
        </motion.div>
        <motion.div variants={item}>
          <TextButton label="Login" />
        </motion.div>
        <motion.div variants={item}>
          <PrimaryButton label="Get Started" />
        </motion.div>
      </motion.ul>
    </nav>
  );
}

export default LongNavbar;
