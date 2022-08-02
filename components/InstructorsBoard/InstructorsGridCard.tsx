import { Linkedin } from "@components/Icons/Linkedin";
import { YouTube } from "@components/Icons/YouTube";
import { IInstructors } from "@lib/instructors";
import styles from "@styles/components/InstructorsGrid/InstructorsGridCard.module.scss";

function InstructorGridCard(props: IInstructors) {
  const { fullName, profilePicURL, role, socialMedia } = props;

  const topPad = Math.floor(Math.random() * 6 + 1);
  const bottomPad = Math.floor(Math.random() * 6 + 1);

  return (
    <div className={`${styles.card} group`}>
      <div className={styles.mask}></div>
      <img className={styles.img} src={profilePicURL} alt={fullName} />

      <div className={styles.info}>
        <p className={styles.name}>{fullName}</p>
        <p className={`${styles.role} group-hover:block`}>{role}</p>

        <div className={`${styles.social} group-hover:flex`}>
          {socialMedia.linkedin ? <Linkedin /> : null}
          {socialMedia.youtube ? <YouTube /> : null}
        </div>
      </div>
    </div>
  );
}

export default InstructorGridCard;
