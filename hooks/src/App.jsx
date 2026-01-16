import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { useTodos } from "./hooks/useTodos.jsx";

function App() {
  const { todos, isLoading } = useTodos(10);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {todos.map(function (todo) {
        return <Track todo={todo} />;
      })}
    </>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.id} <br />
      {todo.todo} <br />
      {todo.completed} <br />
    </div>
  );
}

export default App;
