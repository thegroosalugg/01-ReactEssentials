// @ts-nocheck  // removes annoying parameter any type messages for file
import "./TabButton.css";

export default function TabButton({ children, onSelect, highlighted }) {
  return (
    <li>
      {/* && works like a ternary operator ? but without the else statement : as only 1 outcome is required */}
      <button className={highlighted && 'active'} onClick={onSelect}>{children}</button>
    </li>
  );
}
