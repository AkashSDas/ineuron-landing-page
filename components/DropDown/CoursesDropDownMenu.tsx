import { useState } from "react";

import { ArrowDropDown } from "@components/Icons/ArrowDropDown";
import { ArrowRight } from "@components/Icons/ArrowRight";
import styles from "@styles/components/CoursesDropDownMenu.module.scss";

const courses = [
  {
    mainCourse: "Data Science",
    subCourses: ["Data Science", "Python", "Data Cleaning", "Data Analysis"],
  },
  {
    mainCourse: "Web Development",
    subCourses: ["HTML", "CSS", "JavaScript", "React", "NodeJS"],
  },
  {
    mainCourse: "Mobile Development",
    subCourses: ["Android", "iOS", "React Native"],
  },
  {
    mainCourse: "Devops",
    subCourses: ["Devops", "Linux", "Docker", "Git"],
  },
  {
    mainCourse: "Iot",
    subCourses: ["Iot", "Arduino", "Raspberry Pi"],
  },
  {
    mainCourse: "Programming",
    subCourses: [
      "C",
      "C++",
      "C#",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "PHP",
      "Ruby",
      "Swift",
    ],
  },
];

export default function CoursesDropDownMenu({}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCourse, setActiveCourse] = useState(null);

  const updateActiveCourse = (course) => setActiveCourse(course);

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
        <span>Courses</span>
        <ArrowDropDown className="stroke-black" />
      </a>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.courses}>
            {courses.map((course) => (
              <div
                className={`${styles["course-item"]} ${
                  course.mainCourse === activeCourse?.mainCourse
                    ? "bg-light-violet"
                    : "bg-light-purple"
                }`}
                onMouseEnter={() => updateActiveCourse(course)}
              >
                {course.mainCourse} <ArrowRight className="stroke-grey" />
              </div>
            ))}
          </div>

          <div
            className={`${
              activeCourse !== null ? "w-[300px] px-[1rem] py-[0.5rem]" : ""
            }`}
          >
            {courses
              .filter((c) => c.mainCourse === activeCourse?.mainCourse)[0]
              ?.subCourses.map((subCourse) => (
                <div className={`${styles["course-item"]}`}>{subCourse}</div>
              ))}
          </div>
        </div>
      )}
    </li>
  );
}
