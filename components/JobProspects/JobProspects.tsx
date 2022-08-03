import { motion, MotionStyle } from "framer-motion";
import Slider from "react-slick";

import IconFilledButton from "@components/Button/IconFilledButton";
import { ArrowRight2 } from "@components/Icons/ArrowRight2";
import styles from "@styles/components/JobProspects/JobProspects.module.scss";

function JobProspects() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "cubic-bezier(0.85, 0, 0.15, 1)",
    centerMode: true,
    arrows: false,
    dot: false,
  };

  const companies = [
    "cohesity",
    "eminds",
    "freshworks",
    "greendeck",
    "informatica",
    "kpmg",
    "learnyst",
    "odessa",
  ];

  const companies2 = [
    "redbus",
    "robosoft",
    "tataiq",
    "thoughtworks",
    "wellnesys",
    "wipro",
    "wissen",
    "zensar",
  ];

  const CompanyCard = ({ imgURL }) => (
    <div className={styles.card}>
      <img className={styles.img} src={imgURL} />
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
    <motion.section
      className={styles.wrapper}
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
        Become ready to work at <br /> <span className="text-stroke">MNCs</span>{" "}
        and <span className="text-stroke">Startups</span>
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
        Our 10K+ students have got placed and our top achievers are working in
        the following companies
      </motion.p>

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
        <IconFilledButton
          label="Get Started"
          icon={<ArrowRight2 className="stroke-white" />}
        />
      </motion.div>

      <Slider {...settings} className={styles.slider1}>
        {companies.map((company) => (
          <CompanyCard imgURL={`/companies/${company}.png`} />
        ))}
      </Slider>

      <Slider {...settings} rtl={true} className={styles.slider2}>
        {companies2.map((company) => (
          <CompanyCard imgURL={`/companies/${company}.png`} />
        ))}
      </Slider>
    </motion.section>
  );
}

export default JobProspects;
