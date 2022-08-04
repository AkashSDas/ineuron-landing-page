import { MouseEventHandler } from "react";

import styles from "@styles/components/Button/TextButton.module.scss";

function TextButton({
  label,
  onClick,
}: {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles.roller}`}>
      <span data-label={label}>{label}</span>
    </button>
  );
}

export default TextButton;
