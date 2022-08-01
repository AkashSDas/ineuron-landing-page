import { useState } from "react";

import { ArrowDropDown } from "@components/Icons/ArrowDropDown";
import styles from "@styles/components/DropDownMenu.module.scss";

export default function DropDownMenu({ label, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="h-full grid place-content-center"
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <a
        href="#"
        className="flex items-center gap-[0.625rem];"
        onMouseEnter={() => setIsOpen(true)}
      >
        <span>{label}</span>
        <ArrowDropDown className="stroke-black" />
      </a>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.items}>
            {items.map((item) => (
              <div key={item} className={styles.item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
}
