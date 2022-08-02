import styles from "@styles/components/Button/TextButton.module.scss";

function TextButton({ label }: { label: string }) {
  return <button className={styles.btn}>{label}</button>;
}

export default TextButton;
