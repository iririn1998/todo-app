import clsx from "clsx";
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
  return (
    <input
      type="text"
      className={clsx(
        styles["neu-text-input"],
        styles[`is-${inputSize}`],
        disabled && styles["is-disabled"],
        className,
      )}
      disabled={disabled}
      {...props}
    />
  );
};
