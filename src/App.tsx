//import { useRef } from "react";
//import Button from "./components/Button";
//import Container from "./components/Container";
import Input from "./components/Input";
import Form from "./components/Form";
import Button from "./components/Button";

function App() {

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string; };
    console.log(extractedData);
  }

  return (
  <main>
    <Form onSave={ handleSave }>
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Age" id="age" />
      <p>
        <Button>Save</Button>
      </p>
    </Form>
  </main>
  );
}

export default App;

{/* <Input label="Your name" id="name" type="text" />
    <Input label="Your age" id="age" type="number" /> */}
