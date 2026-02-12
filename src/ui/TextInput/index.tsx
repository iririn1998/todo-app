import type { ComponentProps, FC } from "react";
import styles from "./index.module.css";

type TextInputSize = "sm" | "md" | "lg";

type TextInputProps = ComponentProps<"input"> & {
  /** インプットのサイズ */
  inputSize?: TextInputSize;
};

export const TextInput: FC<TextInputProps> = ({
  inputSize = "md",
  className,
  disabled,
  ...props
}) => {
  const classNames = [
    styles["neu-text-input"],
    styles[`is-${inputSize}`],
    disabled && styles["is-disabled"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <input type="text" className={classNames} disabled={disabled} {...props} />;
};
