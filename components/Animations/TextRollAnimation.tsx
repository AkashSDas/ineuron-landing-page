import styles from "@styles/components/Animations/TextRollAnimation.module.scss";

function TextRollAnimation({ label, color }: { label: string; color: string }) {
  return (
    <div className={styles["roller"]}>
      <span data-label={label} data-color={"black"}>
        {label}
      </span>
    </div>
  );
}

export default TextRollAnimation;
