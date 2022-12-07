import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from './components/About';

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  return (
    <>
      <Navbar title="TextUtils" mode={mode} setMode={setMode} setAlert={setAlert}></Navbar>
      <Alert alert={alert} setAlert={setAlert} />
      <Routes>
        <Route path="/" element={<Textform heading="Enter your Text to analyse" placeholder="Enter your text here" util1="To Uppercase" util2="To Lowercase" util3="Clear Text" util4="Copy Text" util5="Text Summary" mode={mode} setAlert={setAlert} />}/>
        <Route path="/about" element={<About mode={mode}/>} />
      </Routes>
    </>
  );
}

export default App;