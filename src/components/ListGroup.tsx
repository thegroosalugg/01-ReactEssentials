import { useState } from "react";

function ListGroup() {
  let items = ["Strawberry", "Milk", "Oats", "Eggs", "Juice"];
  const [selectedIndex, setSelectedIndex] = useState(-1); // Hook

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>404 error</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
