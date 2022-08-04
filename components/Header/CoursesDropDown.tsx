import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { ArrowDropDown } from "@components/Icons/ArrowDropDown";
import { ArrowRight } from "@components/Icons/ArrowRight";
import { dropdownCourses, DropDownCourseType } from "@lib/dropdown-courses";
import styles from "@styles/components/Header/CoursesDropDown.module.scss";

function CoursesDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCourse, setActiveCourse] = useState<DropDownCourseType>(null);

  const updateActiveCourse = (course: DropDownCourseType) => {
    setActiveCourse(course);
  };

  const closeDropDown = () => {
    setIsOpen(false);
    setActiveCourse(null);
  };

  const MainCourses = () => (
    <div className={styles.courses}>
      {dropdownCourses.map((c) => {
        const style =
          c.mainCourse === activeCourse?.mainCourse
            ? "bg-light-violet"
            : "bg-light-purple";

        return (
          <div
            key={c.mainCourse}
            className={`${styles["course-item"]} ${style}`}
            onMouseEnter={() => updateActiveCourse(c)}
          >
            {c.mainCourse + Math.random().toString()}{" "}
            <ArrowRight className="stroke-grey" />
          </div>
        );
      })}
    </div>
  );

  const SubCourses = () => {
    const style =
      activeCourse !== null ? "w-[300px] px-[1rem] py-[0.5rem]" : "";

    return (
      <div className={style}>
        {dropdownCourses
          .filter((c) => c.mainCourse === activeCourse?.mainCourse)[0]
          ?.subCourses.map((c) => (
            <div key={c} className={styles["course-item"]}>
              {c}
            </div>
          ))}
      </div>
    );
  };

  const DropDown = () => (
    <AnimatePresence exitBeforeEnter presenceAffectsLayout>
      <motion.div
        layout
        className={styles.dropdown}
        key={"dropdown"}
        initial={!activeCourse ? { y: 10, opacity: 0 } : null}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <MainCourses />
        <SubCourses />
      </motion.div>
    </AnimatePresence>
  );

  return (
    <li
      className={styles["dropdown-wrapper"]}
      onMouseLeave={() => closeDropDown()}
    >
      <a
        href="#"
        className={styles["dropdown-btn"]}
        onMouseEnter={() => setIsOpen(true)}
      >
        <span>Courses</span>
        <ArrowDropDown className="stroke-black" />
      </a>

      <AnimatePresence exitBeforeEnter>
        {isOpen ? <DropDown /> : <motion.div key={"empty"}></motion.div>}
      </AnimatePresence>
    </li>
  );
}

export default CoursesDropDown;
