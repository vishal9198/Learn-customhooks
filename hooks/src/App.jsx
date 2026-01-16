import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 10);
    }, 10000);
  }, []);

  return <>{count === 10 ? null : <Mycomponent />}</>;
}

function Mycomponent() {
  useEffect(() => {
    console.error("component mounted");
    return function () {
      console.log("component unmounted");
    };
  }, []);
  return <div>from inside the component</div>;
}

export default App;
