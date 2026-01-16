
import { useEffect, useState } from "react";
 
import axios from "axios";
    
export  function useTodos(n) {
  const [todos, settodos] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const val = setInterval(() => {
      console.log("fetching...");

      axios.get("https://dummyjson.com/todos").then((res) => {
        settodos(res.data.todos);
        setisLoading(false);
      });
    }, n * 1000);

    axios.get("https://dummyjson.com/todos").then((res) => {
      settodos(res.data.todos);
      setisLoading(false);
    });
    return () => {
      clearInterval(val);
    };
  }, [n]);
  return { todos, isLoading };
}
