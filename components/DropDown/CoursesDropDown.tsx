import { useState } from "react";

import { ArrowDropDown } from "@components/Icons/ArrowDropDown";
import { ArrowRight } from "@components/Icons/ArrowRight";
import styles from "@styles/components/CoursesDropDown.module.scss";

const courses = {
  "Data Science": ["Data Science", "Machine Learning", "Deep Learning"],
  "Web Development": ["HTML", "CSS", "JavaScript", "React", "NodeJS"],
  "Mobile Development": ["React Native", "Flutter", "Xamarin"],
  Devops: ["Devops", "Docker", "Kubernetes"],
  Business: ["Business", "Marketing", "Sales"],
  Design: ["Design", "Photography", "Illustration"],
};

export default function CoursesDropDown({ label }) {
  const [subCourses, setSubCourses] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles["dropdown-wrapper"]}>
      <div
        className={`${styles.dropdown} group`}
        onMouseEnter={() => setIsOpen(true)}
      >
        {label}
        <ArrowDropDown
          className={`${styles["dropdown-icon"]} group-hover:stroke-black group-hover:rotate-180`}
        />
      </div>

      {isOpen && (
        <div
          className={styles["dropdown-inner"]}
          onMouseLeave={() => {
            setSubCourses([]);
            setIsOpen(false);
          }}
        >
          <div className={styles.courses}>
            {Object.keys(courses).map((key) => (
              <div
                className={styles["dropdown-item"]}
                key={key}
                onMouseEnter={() => {
                  setSubCourses(courses[key]);
                }}
              >
                {key} <ArrowRight className="stroke-grey" />
              </div>
            ))}
          </div>

          <div
            className={`${subCourses.length === 0 ? "w-0" : "w-[300px]"} ${
              subCourses.length !== 0 ? styles.subcourses : ""
            }`}
          >
            {subCourses.map((subCourse) => (
              <div className={styles["dropdown-item"]} key={subCourse}>
                {subCourse}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
