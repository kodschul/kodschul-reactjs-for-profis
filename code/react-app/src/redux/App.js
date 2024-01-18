import logo from "../logo.svg";
import "../App.css";
import { useEffect, useRef, useState, useReducer } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

import { increment, decrement } from "./slices/counter";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Counter />
        </header>
      </div>
    </Provider>
  );
}

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const inc = () => dispatch(increment());
  const dec = () => dispatch(decrement());

  console.log("re-render");

  return (
    <>
      <button onClick={inc}>+</button>
      <p>{count}</p>
      <button onClick={dec}>-</button>
    </>
  );
};

export default App;
