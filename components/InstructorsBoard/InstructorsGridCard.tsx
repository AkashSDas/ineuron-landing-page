import { motion } from "framer-motion";

import { Linkedin } from "@components/Icons/Linkedin";
import { YouTube } from "@components/Icons/YouTube";
import { IInstructors } from "@lib/instructors";
import styles from "@styles/components/InstructorsGrid/InstructorsGridCard.module.scss";

function InstructorGridCard(props: IInstructors) {
  const { fullName, profilePicURL, role, socialMedia } = props;

  const top = Math.round(Math.random() * 100);
  const bottom = Math.round(Math.random() * 100);

  return (
    <motion.div
      className={`${styles.card} group`}
      variants={{
        initial: {
          top: `${top + 30}px`,
          bottom: `${bottom + 30}px`,
          opacity: 0,
        },
        animate: {
          // top: `${top}px`,
          // bottom: `${bottom}px`,
          top: "0px",
          bottom: "0px",
          opacity: 1,
          transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
            delay: 0.6,
          },
        },
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className={styles.mask}></div>
      <motion.img
        className={styles.img}
        src={profilePicURL}
        alt={fullName}
        whileHover={{ scale: 1.1 }}
      />

      <div className={styles.info}>
        <p className={styles.name}>{fullName}</p>
        <p className={`${styles.role} group-hover:block`}>{role}</p>

        <div className={`${styles.social} group-hover:flex`}>
          {socialMedia.linkedin ? <Linkedin /> : null}
          {socialMedia.youtube ? <YouTube /> : null}
        </div>
      </div>
    </motion.div>
  );
}

export default InstructorGridCard;
