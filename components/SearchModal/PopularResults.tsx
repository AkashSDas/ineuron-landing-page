import { motion, MotionStyle } from "framer-motion";

import styles from "@styles/components/SearchModal/PopularResults.module.scss";

function PopularResults() {
  const courses = [
    {
      posterImgURL: "/courses/javascript-web-dev.png",
      title: "NextJS Full stack crash course",
      tags: ["Web Development", "Next JS"],
    },
    {
      posterImgURL: "/courses/react-js-crash-course.png",
      title: "NextJS Full stack crash course",
      tags: ["React JS", "Crash Course", "JavaScript"],
    },
    {
      posterImgURL: "/courses/data-science.png",
      title: "NextJS Full stack crash course",
      tags: ["Python", "Data Science"],
    },
  ];

  const container = {
    animate: {
      transition: { delayChildren: 1.9, staggerChildren: 0.1 },
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

  const style: MotionStyle = {
    transformOrigin: "center top",
    transformStyle: "preserve-3d",
    willChange: "auto",
  };

  return (
    <motion.section className={styles.wrapper}>
      <motion.h3
        className={styles.heading}
        initial={{ y: "130%", opacity: 0, rotateX: "-40deg" }}
        animate={{
          y: "0%",
          opacity: 1,
          rotateX: "0deg",
          transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
            delay: 1.4,
          },
        }}
        style={style}
      >
        Popular
      </motion.h3>

      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        className={styles.courses}
      >
        {courses.map((course) => (
          <motion.div
            key={course.title}
            variants={item}
            className={styles.course}
          >
            <motion.img src={course.posterImgURL} alt={course.title} />

            <motion.div className={styles.courseInfo}>
              <motion.h4>{course.title}</motion.h4>
              <motion.p className={styles.tags}>
                {course.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default PopularResults;
