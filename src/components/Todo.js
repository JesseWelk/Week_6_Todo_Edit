import { useContext } from "react";
import { TodoContext } from "../data/todoContext";

export default function Todo({ todo }) {
  const { deleteTodo, updateTodo, setEditing } = useContext(TodoContext);

  function completeTodo() {
    updateTodo({
      ...todo,
      completed: !todo.completed
    });
  }

  return (
    <div className="todo">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={completeTodo}
        />
        <span>{todo.completed ? <del>{todo.title}</del> : todo.title}</span>
      </div>
      <div>
        <button className="edit" onClick={() => setEditing(todo.id)}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteTodo(todo.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}
