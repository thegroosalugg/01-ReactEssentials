import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Strawberry", "Milk", "Oats", "Eggs", "Juice"];

  return (
    <div>
      <ListGroup items={items} heading="Food" />
    </div>
  );
}

export default App;
