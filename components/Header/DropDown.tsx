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
    <div className={styles.dropdown}>
      <div className={styles.items}>
        {items.map((item) => (
          <div className={styles.item}>{item}</div>
        ))}
      </div>
    </div>
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

      {isOpen ? <ItemsList /> : null}
    </li>
  );
}

export default DropDown;
