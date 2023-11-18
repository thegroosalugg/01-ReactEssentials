import ListGroup from "./components/ListGroup";
import Alert     from "./components/Alert";
import Button    from "./components/Button";

function App() {
  let items = ["Strawberry", "Milk", "Oats", "Eggs", "Juice"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading="Food" onSelectItem={handleSelectItem} />
      <Alert>Everything is fine</Alert>
      <Button color='success' onClick={() => console.log('Pow')}>Boom</Button>
    </div>
  );
}


export default App;
