import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = ["Strawberry", "Milk", "Oats", "Eggs", "Juice"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading="Food" onSelectItem={handleSelectItem} />
      <Alert>Everything is fine</Alert>
    </div>
  );
}


export default App;
