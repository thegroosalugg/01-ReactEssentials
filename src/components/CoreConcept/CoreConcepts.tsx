import { CORE_CONCEPTS } from "../../data"
import CoreConcept from "./CoreConcept"

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
    <h2>Core Concepts</h2>
    <ul>
      {/* original code below. Core concepts transformed into an iterator
      key is currently not required, but is set as it is read by React */}
      {CORE_CONCEPTS.map((conceptItem) => (
        <CoreConcept key={conceptItem.title} {...conceptItem} />
      ))}
    </ul>
  </section>
  )
}

// ORIGINAL CoreConcept code for reference to see what it looks like in full
{
  /* <CoreConcept {...CORE_CONCEPTS[0]} />
<CoreConcept {...CORE_CONCEPTS[1]} />
<CoreConcept {...CORE_CONCEPTS[2]} /> */
}

// same function as below
{
  /* <CoreConcept
  title={CORE_CONCEPTS[3].title}
  description={CORE_CONCEPTS[3].description}
  image={CORE_CONCEPTS[3].image}
/> */
}
