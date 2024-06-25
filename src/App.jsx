import { useState } from "react";
import P5Component from "./components/P5Component.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <P5Component />
      </div>
    </>
  );
}

export default App;
