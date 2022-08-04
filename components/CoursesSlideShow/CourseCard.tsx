import styles from "@styles/components/CourseSlideShow/CourseCard.module.scss";

interface Props {
  coverImgURL: string;
  title: string;
  isLive?: true;
  price?: number;
  tags: string[];
}

function CourseCard({ coverImgURL, title, isLive, price, tags }: Props) {
  const Tag = ({ emoji, label }: { emoji: string; label: string }) => (
    <span className={styles["info-tag"]}>
      <span>{emoji}</span>
      <span>{label}</span>
    </span>
  );

  return (
    <div className={styles.card}>
      <div className={styles["info-tags"]}>
        {isLive ? <Tag emoji="🔴" label="Live" /> : null}
        {price ? <Tag emoji="🤩" label={`₹${price}`} /> : null}
      </div>

      <img className={styles.cover} src={coverImgURL} alt={title} />

      <h4 className={`${styles.heading} h4`}>{title}</h4>

      <div className={styles["tags"]}>
        {tags.map((t) => (
          <span key={t} className={styles["tag"]}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CourseCard;
