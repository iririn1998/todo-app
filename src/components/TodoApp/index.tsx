import { type FC, useCallback, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import type { Todo } from "./types";
import styles from "./index.module.css";

export const TodoApp: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = useCallback((text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  }, []);

  const handleToggle = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }, []);

  const handleDelete = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const handleEdit = useCallback((id: string, text: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
    );
  }, []);

  const completedCount = todos.filter((t) => t.completed).length;
  const totalCount = todos.length;

  return (
    <div className={styles["todo-app"]}>
      <header className={styles["header"]}>
        <h1 className={styles["title"]}>TODO</h1>
        <p className={styles["subtitle"]}>タスクを管理しましょう</p>
      </header>

      <TodoForm onAdd={handleAdd} />

      {totalCount > 0 && (
        <div className={styles["stats"]}>
          <span className={styles["stat"]}>
            全タスク: <strong>{totalCount}</strong>
          </span>
          <span className={styles["stat"]}>
            完了: <strong>{completedCount}</strong>
          </span>
          <span className={styles["stat"]}>
            残り: <strong>{totalCount - completedCount}</strong>
          </span>
        </div>
      )}

      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};
