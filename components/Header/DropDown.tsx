import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { ArrowDropDown } from "@components/Icons/ArrowDropDown";
import styles from "@styles/components/Header/DropDown.module.scss";

interface Props {
  label: string;
  items: string[];
}

function DropDown({ label, items }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const ItemsList = () => (
    <motion.div
      key={"dropdown"}
      className={styles.dropdown}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className={styles.items}>
        {items.map((item) => (
          <div key={item} className={styles.item}>
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <li
      onMouseLeave={() => setIsOpen(false)}
      className={styles["dropdown-wrapper"]}
    >
      <a
        href="#"
        className={styles["dropdown-btn"]}
        onMouseEnter={() => setIsOpen(true)}
      >
        <span>{label}</span>
        <ArrowDropDown className="stroke-black" />
      </a>

      <AnimatePresence exitBeforeEnter>
        {isOpen ? <ItemsList /> : <motion.div key={"empty"}></motion.div>}
      </AnimatePresence>
    </li>
  );
}

export default DropDown;
