import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";

import SearchButton from "@components/Button/SearchButton";
import PopularResults from "@components/SearchModal/PopularResults";
import { SearchModalContext } from "@lib/context";
import styles from "@styles/components/Header/SearchModal.module.scss";

import Backdrop from "./Backdrop";

function SearchModal() {
  const { searchModalIsOpen, setSearchModalIsOpen } =
    useContext(SearchModalContext);

  const [query, setQuery] = useState("");

  const tags = [
    "Python",
    "Data Science",
    "Web Development",
    "JavaScript",
    "React",
    "MongoDB",
    "Data Structures",
    "Interveiew Preparation",
    "IoT",
  ];

  const container = {
    animate: {
      transition: { delayChildren: 0.4, staggerChildren: 0.1 },
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
    <Backdrop onClick={() => setSearchModalIsOpen(false)}>
      <motion.div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <form className={styles.form} action="">
          <SearchButton />

          <input
            className={styles.input}
            type="text"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What are you looking for?"
            required
            min="3"
          />
        </form>

        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className={styles.tags}
        >
          {tags.map((t) => (
            <motion.span variants={item} className={styles.tag}>
              {t}
            </motion.span>
          ))}
        </motion.div>

        <PopularResults />
      </motion.div>
    </Backdrop>
  );
}

export default SearchModal;
