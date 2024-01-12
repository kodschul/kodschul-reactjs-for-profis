# React: `useReducer` - Lösungen

## Aufgabe 1: Grundlegende Anwendung von `useReducer`

```jsx
import React, { useReducer } from 'react';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};
```

## Aufgabe 2: Komplexeres useReducer mit Aktionen

```jsx
import React, { useReducer } from 'react';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.text, completed: false }];
    case 'REMOVE_TODO':
      return state.filter((todo, index) => index !== action.index);
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        index === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addTodo = (text) => dispatch({ type: 'ADD_TODO', text });
  const removeTodo = (index) => dispatch({ type: 'REMOVE_TODO', index });
  const toggleTodo = (index) => dispatch({ type: 'TOGGLE_TODO', index });

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(index)}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add Todo"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTodo(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
};
```

## Aufgabe 3: useReducer mit Kontext
Die Lösung für diese Aufgabe setzt voraus, dass ein React-Kontext (TodoContext) erstellt wird und die TodoList-Komponente innerhalb dieses Kontexts verwendet wird. Der Code wird komplexer, daher wird hier keine vollständige Lösung angegeben.

```jsx
// TodoContext.js
import { createContext, useContext, useReducer } from 'react';

const TodoContext = createContext();

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>{children}</TodoContext.Provider>
  );
};
```

## Aufgabe 4: Nebeneffekte mit useReducer steuern

```jsx
import React, { useReducer, useEffect } from 'react';

const timerReducer = (state, action) => {
  switch (action.type) {
    case 'START':
      return { ...state, isRunning: true };
    case 'STOP':
      return { ...state, isRunning: false };
    case 'RESET':
      return { ...state, seconds: 0, isRunning: false };
    case 'TICK':
      return { ...state, seconds: state.seconds + 1 };
    default:
      return state;
  }
};

const Timer = () => {
  const [state, dispatch] = useReducer(timerReducer, { seconds: 0, isRunning: false });

  useEffect(() => {
    let interval;

    if (state.isRunning) {
      interval = setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [state.isRunning]);

  return (
    <div>
      <p>Timer: {state.seconds} seconds</p>
      <button onClick={() => dispatch({ type: 'START' })}>Start</button>
      <button onClick={() => dispatch({ type: 'STOP' })}>Stop</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};
```

Diese Lösungen zeigen verschiedene Anwendungen von useReducer in React-Komponenten. Beachte, dass die Lösung für Aufgabe 3 auf einem Kontext basiert und möglicherweise weiteren Code erford