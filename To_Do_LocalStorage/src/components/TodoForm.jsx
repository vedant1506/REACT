import { useState } from "react";
import { useTodo } from "../contexts/TodoContext.js";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex gap-2">
      <input
        type="text"
        value={todo}
        placeholder="Enter a todo"
        className="w-full rounded px-3 py-2 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold py-2 px-4 rounded border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
