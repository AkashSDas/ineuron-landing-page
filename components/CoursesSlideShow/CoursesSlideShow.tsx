import { AnimatePresence, motion, MotionStyle } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import Slider from "react-slick";

import TextButton from "@components/Button/TextButton";
import { affordableCourses, communityCourses, liveCourses } from "@lib/courses";
import styles from "@styles/components/CourseSlideShow/CoursesSlideShow.module.scss";

import CourseCard from "./CourseCard";
import CoursesSlideShowDropDown from "./CoursesSlideShowDropDown";

function CoursesSlideShow() {
  const [isOpen, setIsOpen] = useState(false);
  const programsTitles = [liveCourses, affordableCourses, communityCourses].map(
    (p) => p.title
  );
  const programs = [liveCourses, affordableCourses, communityCourses];
  const [activeProgram, setActiveProgram] = useState(liveCourses);

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
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2.5 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 900, settings: { slidesToShow: 1.75 } },
      { breakpoint: 700, settings: { slidesToShow: 1.5 } },
      { breakpoint: 460, settings: { slidesToShow: 0.95 } },
    ],
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
    exit: {
      y: -20,
      opacity: 0,
      transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1 },
    },
  };

  const style: MotionStyle = {
    transformOrigin: "center top",
    transformStyle: "preserve-3d",
    willChange: "auto",
  };

  const router = useRouter();

  return (
    <section className={styles.wrapper}>
      <motion.div
        className={`${styles.heading} z-10`}
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.h3 className="h3" style={style} variants={item}>
          {activeProgram.title}
        </motion.h3>

        <motion.div className={styles.actions} style={style} variants={item}>
          <a href="https://ineuron.ai/courses" target="_blank" rel="noreferrer">
            <TextButton label="View More" />
          </a>

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

      <motion.div
        className="w-full"
        style={style}
        variants={{
          initial: { y: "40px", x: "200px", opacity: 0 },
          animate: {
            y: "0px",
            x: "0px",
            opacity: 1,
            transition: {
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 1,
              delay: 0.3,
            },
          },
        }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Slider {...settings} className={`${styles.slider} course-slide-show`}>
          {activeProgram.programs.map((prg) => (
            <a href={prg.link} target="_blank" rel="noreferrer" key={prg.title}>
              <CourseCard
                coverImgURL={prg.coverImgURL}
                title={prg.title}
                tags={prg.tags}
                isLive={prg.isLive as any}
                price={prg.price}
              />
            </a>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}

export default CoursesSlideShow;
