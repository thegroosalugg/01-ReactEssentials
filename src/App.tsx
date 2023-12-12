// @ts-nocheck  // removes annoying parameter any type messages for file
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import { useState } from 'react';
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";

function App() {
  const [dynamicContent, setContent] = useState('jsx');

  function handleSelect(clickedButton) {
    setContent(clickedButton)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            {/* same function as below */}
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* onSelect passes argument to TabButton function
            arrow function activaes when TabButton is executed (which executes onClick inside TabButton)
            arrow function executes handleSelect function above and passes along an argument, the name of selected button */}
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[dynamicContent].title}</h3>
            <p>{EXAMPLES[dynamicContent].description}</p>
            <pre>
              <code>{EXAMPLES[dynamicContent].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
