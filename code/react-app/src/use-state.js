import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [defaultCount, setDefaultCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Counter count={defaultCount} />

        <input
          type="number"
          value={defaultCount}
          onChange={(e) => setDefaultCount(parseInt(e.target.value))}
          placeholder="Enter default value"
        />

        {/* <ListComponent /> */}
      </header>
    </div>
  );
}

const Counter = ({ count: defaultCount }) => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setCount(defaultCount);
  // }, [defaultCount]);

  useEffect(() => {
    console.log("TEST");
    let interval = setInterval(
      () => setCount((prevCount) => prevCount + 1),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
};

// const ListComponent = () => {
//   let elements = [];

//   for (let i = 0; i < 10; i++) {
//     elements.push(i);
//   }

//   return (
//     <div>
//       {elements.map((element) => {
//         console.log("element: ", element);
//         return <div>{element}</div>;
//       })}
//     </div>
//   );
// };

export default App;
