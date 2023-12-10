// @ts-nocheck  // removes annoying parameter any type messages for file
import "./TabButton.css";

export default function TabButton({ children }) {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}
