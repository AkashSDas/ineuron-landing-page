import TextButton from "@components/Button/TextButton";
import { ArrowRight2 } from "@components/Icons/ArrowRight2";
import Briefcase from "@components/Icons/Briefcase";
import Collection from "@components/Icons/Collection";
import Diamond from "@components/Icons/Diamond";
import styles from "@styles/components/Header/SmallNavbarMenu.module.scss";

function SmallNavbarMenu() {
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
