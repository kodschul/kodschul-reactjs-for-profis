import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState, useReducer } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Counter />
      </header>
    </div>
  );
}

const useCounterReducer = (initialState) =>
  useReducer(counterReducer, initialState);

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + (state.count >= 5 ? 10 : 1) };
    case "DECREMENT":
      return { ...state, count: state.count - (state.count >= 5 ? 10 : 1) };
    default:
      return state;
  }
};

const Counter = () => {
  //   const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const [state, dispatch] = useCounterReducer({ count: 0 });

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  console.log("re-render");

  return (
    <>
      <button onClick={increment}>+</button>
      <p>{state.count}</p>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default App;
