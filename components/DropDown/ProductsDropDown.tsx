import { useState } from "react";

import { ArrowDropDown } from "@components/Icons/ArrowDropDown";
import { ArrowRight } from "@components/Icons/ArrowRight";
import styles from "@styles/components/ProductsDropDown.module.scss";

export default function ProductsDropDown() {
  const products = [
    "Blog",
    "Job Portal",
    "Intership Portal",
    "Become an Affiliate",
    "Hall of Fame",
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles["dropdown-wrapper"]}>
      <div
        className={`${styles.dropdown} group`}
        onMouseEnter={() => setIsOpen(true)}
      >
        <span>Products</span>
        <ArrowDropDown
          className={`${styles["dropdown-icon"]} group-hover:stroke-black group-hover:rotate-180`}
        />
      </div>

      {isOpen && (
        <div
          className={styles["dropdown-inner"]}
          onMouseLeave={() => setIsOpen(false)}
        >
          {products.map((product) => (
            <div className={styles["dropdown-item"]} key={product}>
              {product}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
