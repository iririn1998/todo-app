import { type FC, type FormEvent, useState } from "react";
import { Button } from "../../../ui/Button";
import { Checkbox } from "../../../ui/Checkbox";
import { TextInput } from "../../../ui/TextInput";
import type { Todo } from "../types";
import styles from "./index.module.css";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
};

export const TodoItem: FC<TodoItemProps> = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = editText.trim();
    if (trimmed && trimmed !== todo.text) {
      onEdit(todo.id, trimmed);
    } else {
      setEditText(todo.text);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleStartEdit = () => {
    setEditText(todo.text);
    setIsEditing(true);
  };

  const classNames = [styles["todo-item"], todo.completed && styles["is-completed"]]
    .filter(Boolean)
    .join(" ");

  return (
    <li className={classNames}>
      <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)} />

      {isEditing ? (
        <form className={styles["edit-form"]} onSubmit={handleSubmit}>
          <TextInput
            inputSize="sm"
            className={styles["edit-input"]}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") handleCancel();
            }}
            autoFocus
          />
          <Button type="submit" variant="primary" size="sm">
            保存
          </Button>
          <Button type="button" size="sm" onClick={handleCancel}>
            取消
          </Button>
        </form>
      ) : (
        <>
          <div className={styles["content"]}>
            <span className={styles["text"]}>{todo.text}</span>
          </div>
          <div className={styles["actions"]}>
            <Button size="sm" onClick={handleStartEdit} disabled={todo.completed}>
              編集
            </Button>
            <Button variant="danger" size="sm" onClick={() => onDelete(todo.id)}>
              削除
            </Button>
          </div>
        </>
      )}
    </li>
  );
};
