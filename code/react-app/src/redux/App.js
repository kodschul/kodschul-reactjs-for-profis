import logo from "../logo.svg";
import "../App.css";
import { useEffect, useRef, useState, useReducer } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import Watcher from "./Watcher";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Watcher />
          <img src={logo} className="App-logo" alt="logo" />

          <Counter />
        </header>
      </div>
    </Provider>
  );
}

export default App;
