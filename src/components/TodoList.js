import React, { useState } from "react";
import Todo from "./Todo";

const todolist = [
  {
    title: "Tarea #1",
    describe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quasi.",
    completed: false,
  },
  {
    title: "Tarea #2",
    describe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quasi.",
    completed: true,
  },
  {
    title: "Tarea #3",
    describe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quasi.",
    completed: true,
  },
];

const done = (element) => {
  console.log(element);
  element ? (element = false) : (element = true);
};

function TodoList() {
  const [todos, setTodos] = useState(todolist);

  return (
    <div className="p-2">
      <h1>Lista de tareas</h1>
      <section className="p-2">
        {todos.map((todo, i) => (
          <Todo
            title={todo.title}
            describe={todo.describe}
            completed={todo.completed}
            done={done}
            key={i}
          />
        ))}
      </section>
    </div>
  );
}

export default TodoList;
