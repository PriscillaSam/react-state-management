import React, { useEffect, useState, useReducer } from "react";
import "./index.css";

const useLocalStorage = (initialState, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage)["value"];

    return initialState;
  };

  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  }, [value]);

  return [value, setValue];
};

const Counter = ({ step, max }) => {
  const [count, setCount] = useLocalStorage(0, "count");

  const increment = () => {
    setCount(c => {
      if (c >= max) return c;
      return c + step;
    });
  };

  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    document.title = `Counter ${count}`;
  }, [count]);

  return (
    <div className=" Counter">
      <p className="count">{count}</p>
      <section className=" controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};
export default Counter;
