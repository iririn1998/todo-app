import { type FC, type FormEvent, useState } from "react";
import { Button } from "../../../ui/Button";
import { TextInput } from "../../../ui/TextInput";
import styles from "./index.module.css";

type TodoFormProps = {
  onAdd: (text: string) => void;
};

export const TodoForm: FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
  };

  return (
    <form className={styles["todo-form"]} onSubmit={handleSubmit}>
      <div className={styles["input-wrapper"]}>
        <TextInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="新しいTODOを入力..."
        />
      </div>
      <Button type="submit" variant="primary" disabled={!text.trim()}>
        追加
      </Button>
    </form>
  );
};
