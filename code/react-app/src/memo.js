import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <TodoApp />
      </header>
    </div>
  );
};

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [itemText, setItemText] = useState("");

  useEffect(() => {
    let _items = [];
    for (let i = 0; i < 1000; i++) {
      _items.push(i);
    }

    setTodos(_items);
  }, []);

  const renderTodo = (todo, i) => {
    console.log("todo: " + i);
    return <div key={i.toString()}>{todo}</div>;
  };

  const addToDo = () => setTodos([...todos, itemText]);

  console.log("re-render");
  return (
    <div>
      <div>
        <input
          type="text"
          value={itemText}
          onChange={(e) => setItemText(e.target.value)}
          placeholder="Todo eingeben"
        />
        <button onClick={addToDo}>Add</button>
      </div>

      {todos.map(renderTodo)}
    </div>
  );
};

export default App;
