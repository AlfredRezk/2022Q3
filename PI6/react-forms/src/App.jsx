import KeyStrokeForm from "./components/KeyStrokeForm";
import RefForm from "./components/RefForm";
import SubmitForm from "./components/SubmitForm";

function App() {
  return (
    <div className="container">
      <h3> Submit Form Validaton</h3>
      <SubmitForm/>
      <h3> useRef Form Validation - Un-controlled form</h3>
       <RefForm/>
       <h3> KeyStroke form validation</h3>
       <KeyStrokeForm/>
    </div>
  );
}

export default App;
