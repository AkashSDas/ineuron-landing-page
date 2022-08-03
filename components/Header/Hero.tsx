import { motion } from "framer-motion";

import IconFilledButton from "@components/Button/IconFilledButton";
import { ArrowRight2 } from "@components/Icons/ArrowRight2";
import styles from "@styles/components/Header/Hero.module.scss";

function Hero() {
  return (
    <section className={`${styles["hero-wrapper"]} text-reveal-parent`}>
      <motion.h1
        className={`${styles.heading} text-reveal-child text-[var(--color)]`}
        // initial={{ y: 40, opacity: 0 }}
        // animate={{
        //   y: 0,
        //   opacity: 1,
        //   transition: {
        //     ease: [0.6, 0.01, -0.05, 0.95],
        //     duration: 1,
        //     delay: 1.2,
        //   },
        // }}
      >
        Premium <span className="text-stroke">quality</span> and <br />{" "}
        <span className="text-stroke">affordable</span> price
      </motion.h1>

      <motion.p
        className={styles.description}
        initial={{ y: 40, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
            delay: 1.4,
          },
        }}
      >
        Learn modern technologies at Premium Quality from Industry Experts at
        Affordable Price
      </motion.p>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
            delay: 1.6,
          },
        }}
      >
        <IconFilledButton
          label="Get Started"
          icon={<ArrowRight2 className="stroke-white" />}
        />
      </motion.div>
    </section>
  );
}

export default Hero;
