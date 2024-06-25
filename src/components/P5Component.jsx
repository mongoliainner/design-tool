import React from "react";
import Sketch from "react-p5";

const P5Component = (props) => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    // p5.background(0);
    // Use p5's mouseX and mouseY directly
    p5.ellipse(p5.mouseX, p5.mouseY, 70, 70);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default P5Component;
