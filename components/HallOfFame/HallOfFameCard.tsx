import { Linkedin } from "@components/Icons/Linkedin";
import { YouTube } from "@components/Icons/YouTube";
import { IHallOfFame } from "@lib/hall-of-fame";
import styles from "@styles/components/HallOfFame/HallOfFameCard.module.scss";

function HallOfFameCard(props: IHallOfFame) {
  const { profilePicURL, name, socialMedia, role, bio, link } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <img
          className={styles.img}
          src={`/users/${profilePicURL}.jpeg`}
          alt={name}
        />

        <div className={styles.social}>
          {socialMedia.linkedin ? (
            <a href={socialMedia.linkedin} target="_blank">
              <Linkedin />
            </a>
          ) : null}
        </div>
      </div>

      <a href={link} target="_blank">
        <h4 className={styles.name}> {name}</h4>
      </a>
      <p className={styles.role}>{role}</p>
      <p className={styles.bio}>{bio.split(" ").splice(0, 30).join(" ")}...</p>
    </div>
  );
}

export default HallOfFameCard;
