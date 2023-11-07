import Button from "./components/Button";
import Container from "./components/Container";
//import Input from "./components/Input";

function App() {
  return (
  <main>
    <Container as={ Button } onClick={() => alert('Hello')}>Click Me </Container>
  </main>
  );
}

export default App;

{/* <Input label="Your name" id="name" type="text" />
    <Input label="Your age" id="age" type="number" /> */}
