import { useContext } from "react";
import { TodoContext } from "../data/todoContext";
import Todo from "./Todo";

export default function Todos() {
  const { todos } = useContext(TodoContext);

  return (
    <div className="todos">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
