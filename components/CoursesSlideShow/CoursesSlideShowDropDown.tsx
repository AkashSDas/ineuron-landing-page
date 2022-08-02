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
    <div className={styles.dropdown}>
      {programTitles
        .filter((t) => t !== activeProgram.title)
        .map((t) => (
          <div className={styles["option"]} onClick={handleOptionClick(t)}>
            {t}
          </div>
        ))}
    </div>
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

      {isOpen && <DropDown />}
    </div>
  );
}

export default CoursesSlideShowDropDown;
