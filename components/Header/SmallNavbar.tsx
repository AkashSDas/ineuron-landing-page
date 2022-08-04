import { motion } from "framer-motion";
import { useContext, useState } from "react";

import PrimaryButton from "@components/Button/PrimaryButton";
import SearchButton from "@components/Button/SearchButton";
import TextButton from "@components/Button/TextButton";
import Cancel from "@components/Icons/Cancel";
import Menu from "@components/Icons/Menu";
import { SearchModalContext, SmallNavbarContext } from "@lib/context";
import styles from "@styles/components/Header/SmallNavbar.module.scss";

import CoursesDropDown from "./CoursesDropDown";
import DropDown from "./DropDown";

function SmallNavbar() {
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

  const { isOpen, setIsOpen } = useContext(SmallNavbarContext);

  const { searchModalIsOpen, setSearchModalIsOpen } =
    useContext(SearchModalContext);

  return (
    <nav className={styles.navbar}>
      <motion.ul
        variants={container}
        initial="initial"
        animate="animate"
        className={styles["nav-left"]}
      >
        <motion.img variants={item} src="/logo.svg" alt="iNeuron Logo" />
      </motion.ul>

      <motion.ul
        variants={container2}
        initial="initial"
        animate="animate"
        className={styles["nav-right"]}
      >
        <motion.div
          variants={item}
          onClick={() => {
            setSearchModalIsOpen(true);
          }}
        >
          <SearchButton />
        </motion.div>
        <motion.div variants={item} onClick={() => setIsOpen((s) => !s)}>
          {!isOpen ? <Menu /> : <Cancel />}
        </motion.div>
        <motion.div variants={item}>
          <PrimaryButton label="Get Started" />
        </motion.div>
      </motion.ul>
    </nav>
  );
}

export default SmallNavbar;
