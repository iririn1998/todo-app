import type { FC } from "react";
import type { Todo } from "../types";
import { TodoItem } from "../TodoItem";
import styles from "./index.module.css";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
};

export const TodoList: FC<TodoListProps> = ({
  todos,
  onToggle,
  onDelete,
  onEdit,
}) => {
  if (todos.length === 0) {
    return (
      <div className={styles["empty"]}>
        <span className={styles["empty-icon"]}>📝</span>
        TODOはまだありません。上のフォームから追加しましょう！
      </div>
    );
  }

  return (
    <ul className={styles["todo-list"]}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};
