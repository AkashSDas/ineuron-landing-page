import styles from "@styles/components/CourseSlideShow/CourseCard.module.scss";

interface Props {
  coverImgURL: string;
  title: string;
  isLive?: true;
  price?: number;
  tags: string[];
}

function CourseCard({ coverImgURL, title, isLive, price, tags }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.cover}>
        <img src={coverImgURL} alt={title} />

        <div className={styles["info-tags"]}>
          {isLive ? <span className={styles["tag"]}>Live</span> : null}
          {price ? <span className={styles["tag"]}>₹{price}</span> : null}
        </div>
      </div>

      <h4 className="h4">{title}</h4>

      <div className={styles["tags"]}>
        {tags.map((t) => (
          <span className={styles["tag"]}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default CourseCard;
