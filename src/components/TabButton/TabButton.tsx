// @ts-nocheck  // removes annoying parameter any type messages for file
import "./TabButton.css";

export default function TabButton({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}