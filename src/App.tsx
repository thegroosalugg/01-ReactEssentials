import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Strawberry", "Milk", "Oats", "Eggs", "Juice"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading="Food" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
