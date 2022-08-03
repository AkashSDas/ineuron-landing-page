import { motion, MotionStyle } from "framer-motion";

import IconFilledButton from "@components/Button/IconFilledButton";
import { ArrowRight2 } from "@components/Icons/ArrowRight2";
import styles from "@styles/components/Header/Hero.module.scss";

function Hero() {
  const container = {
    animate: {
      transition: { delayChildren: 1.1, staggerChildren: 0.2 },
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
    <motion.section
      className={styles["hero-wrapper"]}
      variants={container}
      initial="initial"
      animate="animate"
    >
      <motion.h1
        className={`${styles.heading} cursor-scale cursor-scale-gif`}
        style={style}
        variants={item}
      >
        Premium{" "}
        <span data-gif-src="premium" className="text-stroke">
          quality
        </span>{" "}
        and <br />{" "}
        <span data-gif-src="affordable" className="text-stroke">
          affordable
        </span>{" "}
        price
      </motion.h1>

      <motion.p className={styles.description} style={style} variants={item}>
        Learn modern technologies at Premium Quality from Industry Experts at
        Affordable Price
      </motion.p>

      <motion.div style={style} variants={item}>
        <IconFilledButton
          label="Get Started"
          icon={<ArrowRight2 className="stroke-white" />}
        />
      </motion.div>
    </motion.section>
  );
}

export default Hero;
