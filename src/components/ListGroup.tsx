import { MouseEvent } from "react";

function ListGroup() {
  const items = ["Strawberry", "Milk", "Oats", "Eggs", "Juice"];
  const handleClick = (event: MouseEvent) => console.log(event)
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>404 error</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
