import { useRef } from "react";
//import Button from "./components/Button";
//import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  const input = useRef<HTMLInputElement>(null);

  return (
  <main>
    <Input label="test" id="test" ref={input} />
  </main>
  );
}

export default App;

{/* <Input label="Your name" id="name" type="text" />
    <Input label="Your age" id="age" type="number" /> */}
