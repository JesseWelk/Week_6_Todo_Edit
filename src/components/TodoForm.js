import { useContext, useState } from "react";
import { TodoContext } from "../data/todoContext";

export default function TodoForm() {
  const { todos, addTodo, editing, setEditing, updateTodo } = useContext(
    TodoContext
  );

  let todo = null;
  if (editing && editing !== "new") {
    todo = todos.find((t) => t.id === editing);
  }

  const [title, setTitle] = useState(todo?.title || "");

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleClick() {
    if (editing === "new") {
      addTodo(title);
    } else if (todo) {
      updateTodo({
        ...todo,
        title
      });
    }
    setEditing("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Add new task..."
        onChange={handleChange}
        value={title}
      />
      <button onClick={handleClick}>Add</button>
    </>
  );
}
