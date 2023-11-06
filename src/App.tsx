import Button from "./components/Button";
//import Input from "./components/Input";

function App() {
  return (
  <main>
    <p>
      <Button el="button">A Button</Button>
    </p>
    <p>
      <Button el="anchor" href="https://google.com">A Link</Button>
    </p>
  </main>
  );
}

export default App;

{/* <Input label="Your name" id="name" type="text" />
    <Input label="Your age" id="age" type="number" /> */}
