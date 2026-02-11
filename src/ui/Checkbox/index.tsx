import type { FC } from "react";
import styles from "./index.module.css";

type CheckboxProps = {
  /** チェック状態 */
  checked: boolean;
  /** 変更ハンドラ */
  onChange: (checked: boolean) => void;
  /** ラベル */
  label?: string;
  /** クラス名 */
  className?: string;
};

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange, label, className }) => {
  const classNames = [styles["neu-checkbox"], checked && styles["is-checked"], className]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={classNames}>
      <span className={styles["box"]}>
        <input
          type="checkbox"
          className={styles["input"]}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className={styles["checkmark"]}>✓</span>
      </span>
      {label && <span>{label}</span>}
    </label>
  );
};
