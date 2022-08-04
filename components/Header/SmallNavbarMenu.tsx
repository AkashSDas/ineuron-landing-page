import { useContext, useEffect, useState } from "react";

import TextButton from "@components/Button/TextButton";
import { ArrowRight2 } from "@components/Icons/ArrowRight2";
import Briefcase from "@components/Icons/Briefcase";
import Collection from "@components/Icons/Collection";
import Diamond from "@components/Icons/Diamond";
import { SmallNavbarContext } from "@lib/context";
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

  useEffect(() => {
    if (width > 768) {
      setIsOpen(false);
    }
  }, [width]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.item}>
        <Collection />
        <span className="flex-grow">Courses</span>
        <ArrowRight2 className="stroke-grey" />
      </div>

      <div className={styles.item}>
        <Diamond />
        <span className="flex-grow">Products</span>
        <ArrowRight2 className="stroke-grey" />
      </div>

      <div className={styles.item}>
        <Briefcase />
        <span className="flex-grow">Company</span>
        <ArrowRight2 className="stroke-grey" />
      </div>

      <TextButton label="Login" />
    </section>
  );
}

export default SmallNavbarMenu;
