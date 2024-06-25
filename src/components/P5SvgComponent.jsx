import React, { useRef, useEffect } from "react";
import p5 from "p5";
import "p5.js-svg"; // Ensure this import is here to include the p5.js-svg plugin

const P5SvgComponent = ({ width, height }) => {
  const p5ContainerRef = useRef(null);
  const p5InstanceRef = useRef(null);

  const setup = (p5Instance, canvasParentRef) => {
    p5Instance
      .createCanvas(width, height, p5Instance.SVG)
      .parent(canvasParentRef);
  };

  const draw = (p5Instance) => {
    // p5Instance.background(240);
    p5Instance.fill(0);
    p5Instance.ellipse(p5Instance.mouseX, p5Instance.mouseY, 70, 70);
  };

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => setup(p, p5ContainerRef.current);
      p.draw = () => draw(p);
    };

    // Create p5 instance
    if (!p5InstanceRef.current) {
      p5InstanceRef.current = new p5(sketch, p5ContainerRef.current);
    } else {
      p5InstanceRef.current.resizeCanvas(width, height);
    }

    // Cleanup function
    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
        p5InstanceRef.current = null;
      }
    };
  }, [width, height]);

  return <div ref={p5ContainerRef} />;
};

export default P5SvgComponent;
