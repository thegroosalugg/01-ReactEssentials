// @ts-nocheck  // removes annoying parameter any type messages for file
// useState allows the dynamic rendering of content
import { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "./TabButton";
import Section from "../Section"

export default function Examples() {
  const [dynamicContent, setContent] = useState();
  // must always be declared at the top of the function where it is used and never nested in another function
  // default value can be set inside parenthesis. Here no default value is set

  function handleSelect(clickedButton) {
    setContent(clickedButton);
  }

  let tabContent = <p>Select a topic</p>; // default tabContent is set prior to rendering dynamicContent

  if (dynamicContent) {
    // if dynamicContent is set, via TabButton (onSelect paramater) then the below code is rendered
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[dynamicContent].title}</h3>
        <p>{EXAMPLES[dynamicContent].description}</p>
        <pre>
          <code>{EXAMPLES[dynamicContent].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples" >
      <menu>
        {/* onSelect passes argument to TabButton function
        arrow function activaes when TabButton is executed (which executes onClick inside TabButton)
        arrow function executes handleSelect function above and passes along an argument, the name of selected button */}
        <TabButton
          highlighted={dynamicContent === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        {/* highlightes passed as an argument to TabButton, will pass if dynamicContent matches onSelect,
        so 'active' CSS class is removed on non active topics */}
        <TabButton
          highlighted={dynamicContent === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          highlighted={dynamicContent === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          highlighted={dynamicContent === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </Section>
  );
}
