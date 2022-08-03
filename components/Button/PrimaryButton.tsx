import styles from "@styles/components/Button/PrimaryButton.module.scss";

function PrimaryButton({ label }: { label: string }) {
  return (
    <button className={`${styles.btn} ${styles.roller}`}>
      <span data-label={label}>{label}</span>
    </button>
  );
}

export default PrimaryButton;
