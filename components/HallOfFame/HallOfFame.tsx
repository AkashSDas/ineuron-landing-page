import { motion, MotionStyle } from "framer-motion";
import Slider from "react-slick";

import TextButton from "@components/Button/TextButton";
import { hallOfFame } from "@lib/hall-of-fame";
import styles from "@styles/components/HallOfFame/HallOfFame.module.scss";

import HallOfFameCard from "./HallOfFameCard";

function HallOfFame() {
  const settings = {
    dot: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.75,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    cssEase: "cubic-bezier(0.85, 0, 0.15, 1)",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2.5 } },
      { breakpoint: 1250, settings: { slidesToShow: 2.25 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 960, settings: { slidesToShow: 1.75 } },
      { breakpoint: 840, settings: { slidesToShow: 1.75 } },
      { breakpoint: 760, settings: { slidesToShow: 1.2 } },
      { breakpoint: 450, settings: { slidesToShow: 1 } },
      { breakpoint: 360, settings: { slidesToShow: 0.65 } },
    ],
  };

  const container = {
    animate: {
      transition: { delayChildren: 0.4, staggerChildren: 0.2 },
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
    <section>
      <motion.div
        className={styles.heading}
        variants={container}
        initial="initial"
        whileInView="animate"
      >
        <motion.h3
          className="h3 text-dark-violet"
          style={style}
          variants={{
            initial: { y: "130%", opacity: 0, rotateX: "-40deg" },
            animate: {
              y: "0%",
              opacity: 1,
              rotateX: "0deg",
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
          Hall of Fame
        </motion.h3>

        <motion.div
          style={style}
          variants={{
            initial: { y: "130%", opacity: 0, rotateX: "-40deg" },
            animate: {
              y: "0%",
              opacity: 1,
              rotateX: "0deg",
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
          <TextButton label="View More" />
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
        <Slider {...settings} className="w-full">
          {hallOfFame.map((u) => (
            <HallOfFameCard
              bio={u.bio}
              name={u.name}
              profilePicURL={u.profilePicURL}
              role={u.role}
              socialMedia={u.socialMedia}
            />
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}

export default HallOfFame;
