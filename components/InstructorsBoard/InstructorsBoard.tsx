import { motion, MotionStyle } from "framer-motion";
import Slider from "react-slick";

import TextButton from "@components/Button/TextButton";
import { instructors } from "@lib/instructors";
import styles from "@styles/components/InstructorsGrid/InstructorsBoard.module.scss";

import InstructorGridCard from "./InstructorsGridCard";

function InstructorsBoard() {
  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: instructors.length > 7 ? 7 : instructors.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "cubic-bezier(0.85, 0, 0.15, 1)",
    centerMode: true,
    arrows: false,
    dot: false,
    variableWidth: true,
  };

  const style: MotionStyle = {
    transformOrigin: "center top",
    transformStyle: "preserve-3d",
    willChange: "auto",
  };

  return (
    <section className={styles.wrapper}>
      <motion.h2
        className="h2 text-center mb-8"
        style={style}
        variants={{
          initial: { y: "80%", opacity: 0, rotateX: "-40deg" },
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
        Learn from the <span className="text-stroke">BEST</span>
      </motion.h2>

      <div className={styles.board}>
        {instructors.map((i) => (
          <InstructorGridCard
            key={i.fullName}
            fullName={i.fullName}
            profilePicURL={i.profilePicURL}
            role={i.role}
            socialMedia={i.socialMedia}
          />
        ))}
      </div>

      {/* <Slider {...settings} className="">
        {instructors.map((i) => (
          <InstructorGridCard
            key={i.fullName}
            fullName={i.fullName}
            profilePicURL={i.profilePicURL}
            role={i.role}
            socialMedia={i.socialMedia}
          />
        ))}
      </Slider> */}
    </section>
  );
}

export default InstructorsBoard;
