import { useForm } from "@tanstack/react-form";
import type { FC } from "react";
import { z } from "zod/v4";
import { Button } from "../../../ui/Button";
import { TextInput } from "../../../ui/TextInput";
import styles from "./index.module.css";

const todoSchema = z.object({
  text: z
    .string()
    .trim()
    .min(1, "TODOを入力してください")
    .max(100, "100文字以内で入力してください"),
});

type TodoFormProps = {
  onAdd: (text: string) => void;
};

export const TodoForm: FC<TodoFormProps> = ({ onAdd }) => {
  const form = useForm({
    defaultValues: {
      text: "",
    },
    validators: {
      onChange: todoSchema,
    },
    onSubmit: ({ value }) => {
      onAdd(value.text.trim());
      form.reset();
    },
  });

  return (
    <form
      className={styles["todo-form"]}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <div className={styles["input-wrapper"]}>
        <form.Field name="text">
          {(field) => (
            <>
              <TextInput
                name={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                placeholder="新しいTODOを入力..."
              />
              {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
                <p className={styles["error-message"]}>{field.state.meta.errors.join(", ")}</p>
              )}
            </>
          )}
        </form.Field>
      </div>
      <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <Button type="submit" variant="primary" disabled={!canSubmit || isSubmitting}>
            {isSubmitting ? "追加中..." : "追加"}
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
};
