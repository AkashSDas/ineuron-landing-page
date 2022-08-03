import styles from "@styles/components/Button/TextButton.module.scss";

function TextButton({ label }: { label: string }) {
  return (
    <button className={`${styles.btn} ${styles.roller}`}>
      <span data-label={label}>{label}</span>
    </button>
  );
}

export default TextButton;
