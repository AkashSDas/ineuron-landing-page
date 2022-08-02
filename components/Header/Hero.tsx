import IconFilledButton from "@components/Button/IconFilledButton";
import { ArrowRight2 } from "@components/Icons/ArrowRight2";
import styles from "@styles/components/Header/Hero.module.scss";

function Hero() {
  return (
    <section className={styles["hero-wrapper"]}>
      <h1 className={styles.heading}>
        Premium <span className="text-stroke">quality</span> and <br />{" "}
        <span className="text-stroke">affordable</span> price
      </h1>

      <p className={styles.description}>
        Learn modern technologies at Premium Quality from Industry Experts at
        Affordable Price
      </p>

      <IconFilledButton
        label="Get Started"
        icon={<ArrowRight2 className="stroke-white" />}
      />
    </section>
  );
}

export default Hero;
