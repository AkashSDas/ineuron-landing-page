import styles from "@styles/components/Button/IconFilledButton.module.scss";

interface Props {
  icon: JSX.Element;
  label: string;
}

function IconFilledButton({ icon, label }: Props) {
  return (
    <button className={styles.btn}>
      {label} {icon}
    </button>
  );
}

export default IconFilledButton;
