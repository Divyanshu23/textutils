import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title="TextUtils"></Navbar>
      <Textform heading="Enter your Text to analyse" placeholder="Enter your text here" util1="To Uppercase"/>
    </>
  );
}

export default App;