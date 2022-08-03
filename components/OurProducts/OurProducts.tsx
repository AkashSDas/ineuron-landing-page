import { motion, MotionStyle } from "framer-motion";

import Affiliate from "@components/Icons/Affiliate";
import Blog from "@components/Icons/Blog";
import HallOfFame from "@components/Icons/HallOfFame";
import Internship from "@components/Icons/Internship";
import Job from "@components/Icons/Job";
import styles from "@styles/components/OurProducts/OurProducts.module.scss";

export interface IProduct {
  icon: JSX.Element;
  title: string;
  description: string;
}

function OurProducts() {
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

  const Card = ({ icon, title, description }: IProduct) => (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h5 className={styles.heading}>{title}</h5>
      <p className={styles.description}>{description}</p>
    </div>
  );

  return (
    <motion.section
      className={`p-8 ${styles.wrapper}`}
      variants={container}
      initial="initial"
      whileInView="animate"
    >
      <motion.h2
        className="h2 text-center"
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
        Our Products
      </motion.h2>

      <motion.div
        className={styles.container}
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
        <Card
          icon={<Affiliate />}
          title="Become an Affiliate"
          description="Explore affiliate marketing opportunities with iNeuron and attain financial frredom."
        />
        <Card
          icon={<Job />}
          title="Job Portal"
          description="Use exceptional templates for a stand-out resume minus the sign up process."
        />
        <Card
          icon={<Internship />}
          title="Internship Portal"
          description="iNeuron's self-paced internship portal prioritises hands-on training with 570+ internship projects."
        />
      </motion.div>

      <motion.div
        className={styles.container}
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
        <Card
          icon={<HallOfFame />}
          title="Hall of Fame"
          description="Our student placements and 10+ career transitions speak volumes about our courses."
        />
        <Card
          icon={<Blog />}
          title="InBlog"
          description="Explore all you want about your favourite courses."
        />
      </motion.div>
    </motion.section>
  );
}

export default OurProducts;
