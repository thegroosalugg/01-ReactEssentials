function ListGroup() {
  const items = ["Strawberry", "Milk", "Oats", "Eggs", "Juice"];
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
