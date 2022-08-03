import { motion, MotionStyle } from "framer-motion";
import Slider from "react-slick";

import styles from "@styles/components/Hackathon/Hackathon.module.scss";

function Hackathon() {
  const companies = [
    "redbus",
    "robosoft",
    "tataiq",
    "thoughtworks",
    "wellnesys",
    "wipro",
    "wissen",
    "zensar",
  ];

  const settings = {
    dot: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.35,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "cubic-bezier(0.85, 0, 0.15, 1)",
    centerMode: true,
  };

  const CompanyCard = ({ url }) => (
    <div className={styles["company-card"]}>
      <img className={styles["company-img"]} src={url} />
    </div>
  );

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
    <section className={styles.wrapper}>
      <motion.div
        className={styles.heading}
        variants={container}
        initial="initial"
        whileInView="animate"
      >
        <motion.h2
          className="h2"
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
          Hackathon
        </motion.h2>

        <motion.p
          className={styles.description}
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
          Our 24 hour offline coding events such as{" "}
          <span className="text-dark-violet">Hack-a-thons</span>,{" "}
          <span className="text-dark-violet">Job-a-thons</span> and{" "}
          <span className="text-dark-violet">Course-a-thons</span> give
          participants an opportunity to exhibit their skills and receive prizes
          for completing courses, or get recruited for their skillset.
        </motion.p>

        <div>
          <motion.h5
            className={styles.subtitle}
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
            Partner Companies
          </motion.h5>

          <motion.div
            className="w-full"
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
            <Slider {...settings} className="w-full">
              {companies.map((company) => (
                <CompanyCard url={`/companies/${company}.png`} />
              ))}
            </Slider>
          </motion.div>
        </div>
      </motion.div>

      <motion.img
        variants={{
          initial: { opacity: 0, y: 40 },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 1,
              delay: 1.1,
            },
          },
        }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mix-blend-luminosity"
        src="/hackathon.png"
        alt="Hackathon"
      />
    </section>
  );
}

export default Hackathon;
