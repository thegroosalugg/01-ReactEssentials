import ListGroup  from "./components/ListGroup";
import Alert      from "./components/Alert";
import Button     from "./components/Button";
import {useState} from "react";


function App() {
  let items = ["Strawberry", "Milk", "Oats", "Eggs", "Juice"];
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={items} heading="Food" onSelectItem={handleSelectItem} />
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Pow</Alert> }
      <Button color="success"  onClick={() => setAlertVisibility(true)}>
        Boom
      </Button>
    </div>
  );
}

export default App;
