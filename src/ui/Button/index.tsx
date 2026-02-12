import clsx from "clsx";
import type { ComponentProps, FC, ReactNode } from "react";
import styles from "./index.module.css";

type ButtonVariant = "default" | "primary" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ComponentProps<"button"> & {
  /** ボタンのバリエーション */
  variant?: ButtonVariant;
  /** ボタンのサイズ */
  size?: ButtonSize;
  /** アイコン（左側） */
  icon?: ReactNode;
  /** 押し込み状態を維持するかどうか */
  pressed?: boolean;
};

export const Button: FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  icon,
  pressed = false,
  className,
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      className={clsx(
        styles["neu-button"],
        styles[`is-${variant}`],
        styles[`is-${size}`],
        pressed && styles["is-pressed"],
        disabled && styles["is-disabled"],
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {icon && <span className={styles["icon"]}>{icon}</span>}
      {children && <span className={styles["label"]}>{children}</span>}
    </button>
  );
};
