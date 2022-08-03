import { motion, MotionStyle } from "framer-motion";
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

  const container = {
    animate: {
      transition: { delayChildren: 1.8, staggerChildren: 0.1 },
    },
  };

  const item = {
    initial: { y: "130%", opacity: 0, rotateX: "-40deg" },
    animate: {
      y: "0%",
      opacity: 1,
      rotateX: "0deg",
      transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1 },
    },
  };

  const style: MotionStyle = {
    transformOrigin: "center top",
    transformStyle: "preserve-3d",
    willChange: "auto",
  };

  return (
    <section className={styles.wrapper}>
      <motion.div
        className={styles.heading}
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.h3 className="h3" style={style} variants={item}>
          {activeProgram.title}
        </motion.h3>

        <motion.div className={styles.actions} style={style} variants={item}>
          <button className="text-btn">View More</button>
          <CoursesSlideShowDropDown
            activeProgram={activeProgram}
            programTitles={programsTitles}
            programs={programs}
            setActiveProgram={setActiveProgram}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </motion.div>
      </motion.div>

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
