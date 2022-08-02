import { Linkedin } from "@components/Icons/Linkedin";
import { YouTube } from "@components/Icons/YouTube";
import { IHallOfFame } from "@lib/hall-of-fame";
import styles from "@styles/components/HallOfFame/HallOfFameCard.module.scss";

function HallOfFameCard(props: IHallOfFame) {
  const { profilePicURL, name, socialMedia, role, bio } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <img
          className={styles.img}
          src={`/users/${profilePicURL}.png`}
          alt={name}
        />

        <div className={styles.social}>
          {socialMedia.youtube ? <YouTube /> : null}
          {socialMedia.linkedin ? <Linkedin /> : null}
        </div>
      </div>

      <h4 className={styles.name}> {name}</h4>
      <p className={styles.role}>{role}</p>
      <p className={styles.bio}>{bio}</p>
    </div>
  );
}

export default HallOfFameCard;
