import { motion } from "framer-motion";
import { useContext } from "react";

import { SearchModalContext } from "@lib/context";
import styles from "@styles/components/Header/SearchModal.module.scss";

import Backdrop from "./Backdrop";

function SearchModal() {
  const { searchModalIsOpen, setSearchModalIsOpen } =
    useContext(SearchModalContext);

  return (
    <Backdrop onClick={() => setSearchModalIsOpen(false)}>
      <motion.div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        hii
      </motion.div>
    </Backdrop>
  );
}

export default SearchModal;
