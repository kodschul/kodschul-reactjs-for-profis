import { useEffect, useState } from "react";

const SlowComponent = () => {
  console.log("SlowComponent: Loading");

  const [items, setItems] = useState([]);

  useEffect(() => {
    let _items = [];
    for (let i = 0; i < 10; i++) {
      _items.push(i);
    }

    setItems(_items);
  }, []);

  return (
    <div>
      <div>SlowComponent</div>

      {items.map((x) => {
        return (
          <div style={{ height: 100 }} key={x}>
            {x}
          </div>
        );
      })}
    </div>
  );
};

export default SlowComponent;
