import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

import { ArrowDown } from "@components/Icons/ArrowDown";
import { IProgram } from "@lib/courses";
import styles from "@styles/components/CourseSlideShow/CoursesSlideShowDropDown.module.scss";

interface Props {
  activeProgram: IProgram;
  programTitles: string[];
  setActiveProgram: Dispatch<SetStateAction<IProgram>>;
  programs: IProgram[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function CoursesSlideShowDropDown(props: Props) {
  const { activeProgram, programTitles, setActiveProgram, programs } = props;
  const { isOpen, setIsOpen } = props;
  const ref = useRef();

  useEffect(() => {
    const closeDropDrow = (e) => {
      if (e.path[0] !== ref.current) setIsOpen(false);
    };

    document.body.addEventListener("click", closeDropDrow);
    () => document.body.removeEventListener("click", closeDropDrow);
  }, []);

  const close = () => setIsOpen(false);

  const handleOptionClick = (title: string) => () => {
    setActiveProgram(programs.filter((prg) => prg.title === title)[0]);
    close();
  };

  const DropDown = () => (
    <motion.div
      key={"dropdown"}
      className={styles.dropdown}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {programTitles
        .filter((t) => t !== activeProgram.title)
        .map((t) => (
          <div className={styles["option"]} onClick={handleOptionClick(t)}>
            {t}
          </div>
        ))}
    </motion.div>
  );

  return (
    <div className={styles["dropdown-wrapper"]}>
      <button
        ref={ref}
        onClick={() => setIsOpen((s) => !s)}
        className={styles.btn}
      >
        {activeProgram.title} {isOpen} <ArrowDown className="stroke-black" />
      </button>

      <AnimatePresence exitBeforeEnter>
        {isOpen ? <DropDown /> : <motion.div></motion.div>}
      </AnimatePresence>
    </div>
  );
}

export default CoursesSlideShowDropDown;
