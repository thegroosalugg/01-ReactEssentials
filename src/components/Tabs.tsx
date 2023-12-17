// @ts-nocheck  // removes annoying parameter any type messages for file
export default function Tabs({ children, buttons }) {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}
