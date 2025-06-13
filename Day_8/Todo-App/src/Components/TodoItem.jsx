import React from "react";

const TodoItem = React.memo(({ todo, toggleTodo, removeTodo }) => {
  return (
    <li
      style={{
        textDecoration: todo.done ? "line-through" : "none",
        cursor: "pointer",
      }}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.text}{" "}
      <button
        onClick={(e) => {
          e.stopPropagation();
          removeTodo(todo.id);
        }}
      >
        X
      </button>
    </li>
  );
});

export default TodoItem;
