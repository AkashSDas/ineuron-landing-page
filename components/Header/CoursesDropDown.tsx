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
            className={`${styles["course-item"]} ${style}`}
            onMouseEnter={() => updateActiveCourse(c)}
          >
            {c.mainCourse} <ArrowRight className="stroke-grey" />
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
            <div className={styles["course-item"]}>{c}</div>
          ))}
      </div>
    );
  };

  const DropDown = () => (
    <div className={styles.dropdown}>
      <MainCourses />
      <SubCourses />
    </div>
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

      {isOpen ? <DropDown /> : null}
    </li>
  );
}

export default CoursesDropDown;
