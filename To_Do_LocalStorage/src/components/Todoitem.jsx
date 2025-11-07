import React from "react";
import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border border-white/20 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-white ${todo.completed ? "bg-white/5" : "bg-transparent"}`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border border-white/20 outline-none w-full bg-transparent rounded-lg text-white placeholder-white/60 ${isTodoEditable ? "border-blue-500 px-2 " : ""} `}
        value={todoMsg}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
      />

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-white/20 justify-center items-center bg-white/10 hover:bg-white/20 text-white shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-white/20 justify-center items-center bg-white/10 hover:bg-white/20 text-white shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
