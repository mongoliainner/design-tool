import React, { useState } from "react";
import P5SvgComponent from "./components/P5SvgComponent";
import CanvasControls from "./components/CanvasControls";
import "./App.css";

const App = () => {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        p5.js SVG Integration with React
      </h1>
      <CanvasControls
        width={width}
        height={height}
        onWidthChange={setWidth}
        onHeightChange={setHeight}
      />
      <P5SvgComponent width={width} height={height} />
    </div>
  );
};

export default App;
