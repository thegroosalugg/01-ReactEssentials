import ReactImg from "./assets/react-core-concepts.png"; // import images from assets folder
import ComponentsImg from "./assets/components.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  // random number generator
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={ReactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="First component in React"
              image={ComponentsImg}
            />
            <CoreConcept
              title="Concepts"
              description="Second component in React"
              image={ComponentsImg}
            />
            <CoreConcept
              title="Props"
              description="Third component in React"
              image={ComponentsImg}
            />
            <CoreConcept
              title="Love"
              description="Fourth component in React"
              image={ComponentsImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
