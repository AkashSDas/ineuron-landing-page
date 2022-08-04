import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";

import TextButton from "@components/Button/TextButton";
import { ArrowRight2 } from "@components/Icons/ArrowRight2";
import Briefcase from "@components/Icons/Briefcase";
import Cancel from "@components/Icons/Cancel";
import Collection from "@components/Icons/Collection";
import Diamond from "@components/Icons/Diamond";
import { SmallNavbarContext } from "@lib/context";
import { dropdownCourses } from "@lib/dropdown-courses";
import styles from "@styles/components/Header/SmallNavbarMenu.module.scss";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      const handleResize = () => {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

function SmallNavbarMenu() {
  const { width } = useWindowSize();
  const { setIsOpen } = useContext(SmallNavbarContext);
  const [display, setDisplay] = useState("menu");

  useEffect(() => {
    if (width > 768) {
      setIsOpen(false);
    }
  }, [width]);

  const container = {
    animate: {
      transition: { delayChildren: 0.4, staggerChildren: 0.1 },
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

  const Menu = () => {
    return (
      <motion.div variants={container} initial="initial" animate="animate">
        <motion.div
          className={styles.item}
          onClick={() => setDisplay("courses")}
          variants={item}
        >
          <Collection />
          <span className="flex-grow">Courses</span>
          <ArrowRight2 className="stroke-grey" />
        </motion.div>

        <motion.div className={styles.item} variants={item}>
          <Diamond />
          <span className="flex-grow">Products</span>
          <ArrowRight2 className="stroke-grey" />
        </motion.div>

        <motion.div className={styles.item} variants={item}>
          <Briefcase />
          <span className="flex-grow">Company</span>
          <ArrowRight2 className="stroke-grey" />
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white w-max rounded-full mt-8"
        >
          <TextButton label="Login" />
        </motion.div>
      </motion.div>
    );
  };

  const Menu2 = () => {
    return (
      <motion.div>
        <motion.div
          className={styles.item}
          onClick={() => setDisplay("courses")}
        >
          <Collection />
          <span className="flex-grow">Courses</span>
          <ArrowRight2 className="stroke-grey" />
        </motion.div>

        <motion.div
          className={styles.item}
          onClick={() => setDisplay("products")}
        >
          <Diamond />
          <span className="flex-grow">Products</span>
          <ArrowRight2 className="stroke-grey" />
        </motion.div>

        <motion.div
          className={styles.item}
          onClick={() => setDisplay("company")}
        >
          <Briefcase />
          <span className="flex-grow">Company</span>
          <ArrowRight2 className="stroke-grey" />
        </motion.div>

        <motion.div className="bg-white w-max rounded-full mt-8">
          <TextButton label="Login" />
        </motion.div>
      </motion.div>
    );
  };

  const Courses = () => {
    return (
      <motion.div className="flex flex-col px-4">
        <button
          className="self-end bg-light-purple p-2 rounded-lg w-max"
          onClick={() => setDisplay("menu")}
        >
          <Cancel />
        </button>

        {dropdownCourses.map((c) => (
          <div key={c.mainCourse} className={styles.item2}>
            {c.mainCourse}
          </div>
        ))}
      </motion.div>
    );
  };

  const Products = () => {
    const products = [
      "Blog",
      "Job Portal",
      "Intership Portal",
      "Become an Affiliate",
      "Hall of Fame",
    ];

    return (
      <motion.div className="flex flex-col px-4">
        <button
          className="self-end bg-light-purple p-2 rounded-lg w-max"
          onClick={() => setDisplay("menu")}
        >
          <Cancel />
        </button>

        {products.map((c) => (
          <div key={c} className={styles.item2}>
            {c}
          </div>
        ))}
      </motion.div>
    );
  };

  const Company = () => {
    const companyItems = [
      "About Us",
      "Contact Us",
      "Hackathon",
      "Job Guarantee",
      "Job Assistance",
      "FAQs",
      "Privacy Policy",
      "Terms & Conditions",
    ];

    return (
      <motion.div className="flex flex-col px-4">
        <button
          className="self-end bg-light-purple p-2 rounded-lg w-max"
          onClick={() => setDisplay("menu")}
        >
          <Cancel />
        </button>

        {companyItems.map((c) => (
          <div key={c} className={styles.item2}>
            {c}
          </div>
        ))}
      </motion.div>
    );
  };

  const displayCourse = () => {
    if (display === "courses") {
      return <Courses />;
    }
    if (display === "menu") {
      return <Menu2 />;
    }
    if (display === "products") {
      return <Products />;
    }
    if (display === "company") {
      return <Company />;
    }
    return null;
  };

  const slideAnimation = {
    pageInitial: { x: "-100%" },
    pageAnimate: { x: "0" },
    pageExit: { x: "100%" },
  };

  return (
    <section className={styles.wrapper}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={display}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={slideAnimation}
          transition={{ type: "tween", ease: "easeInOut" }}
        >
          {displayCourse()}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default SmallNavbarMenu;
