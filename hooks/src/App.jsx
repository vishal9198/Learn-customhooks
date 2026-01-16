import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { useTodos } from "./hooks/useTodos.jsx";

function useDebaunce(value, timeout) {
  const [debaunceValue, setDebaunceValue] = useState(value);

  useEffect(() => {
    const timoutNumber = setTimeout(() => {
      setDebaunceValue(value);
    }, timeout);

    return () => {
      clearInterval(timoutNumber);
    };
  }, [value]);
  return debaunceValue;
}

function App() {
  const [value, setValue] = useState(0);
  const debaunceValue = useDebaunce(value, 500);
  return (
    <>
      Deabunce value is {debaunceValue}
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </>
  );
}

export default App;
