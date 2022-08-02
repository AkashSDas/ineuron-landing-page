import styles from "@styles/components/Button/PrimaryButton.module.scss";

function PrimaryButton({ label }: { label: string }) {
  return <button className={styles.btn}>{label}</button>;
}

export default PrimaryButton;
