import { useState } from "react";
import Slider from "react-slick";

import { affordableCourses, liveCouses } from "@lib/courses";
import styles from "@styles/components/CourseSlideShow/CoursesSlideShow.module.scss";

import CourseCard from "./CourseCard";
import CoursesSlideShowDropDown from "./CoursesSlideShowDropDown";

function CoursesSlideShow() {
  const [isOpen, setIsOpen] = useState(false);
  const programsTitles = [liveCouses, affordableCourses].map((p) => p.title);
  const programs = [liveCouses, affordableCourses];
  const [activeProgram, setActiveProgram] = useState(liveCouses);

  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "cubic-bezier(0.85, 0, 0.15, 1)",
    centerMode: true,
    arrows: false,
    dot: false,
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.heading}>
        <h3 className="h3">{activeProgram.title}</h3>

        <div className={styles.actions}>
          <button className="text-btn">View More</button>
          <CoursesSlideShowDropDown
            activeProgram={activeProgram}
            programTitles={programsTitles}
            programs={programs}
            setActiveProgram={setActiveProgram}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>

      <Slider {...settings} className={styles.slider}>
        {activeProgram.programs.map((prg) => (
          <CourseCard
            coverImgURL={prg.coverImgURL}
            title={prg.title}
            tags={prg.tags}
            isLive={prg.isLive as any}
            price={prg.price}
          />
        ))}
      </Slider>
    </section>
  );
}

export default CoursesSlideShow;
