import { motion, MotionStyle } from "framer-motion";

import styles from "@styles/components/OurInstitutionPartners/OurInstitutionPartners.module.scss";

function OurInstitutionPartners() {
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

  const Card = ({ name }) => (
    <img
      className="mix-blend-luminosity transition-all duration-300 ease-in-out hover:shadow-default bg-white rounded-[30px] w-[150px] h-[150px]"
      src={`/partner-institutions/${name}.svg`}
      alt={name}
    />
  );

  return (
    <motion.section
      className={`p-8 ${styles.wrapper}`}
      variants={container}
      initial="initial"
      whileInView="animate"
    >
      <motion.h2
        className="text-center text-medium text-dark-violet text-[60px] mb-16"
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
        Our Institution Partners
      </motion.h2>

      <motion.div
        className="flex gap-8 justify-center"
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
        <Card name="taxila" />
        <Card name="vit" />
        <Card name="malnad-college" />
        <Card name="keit" />
        <Card name="gim" />
      </motion.div>
    </motion.section>
  );
}

export default OurInstitutionPartners;
