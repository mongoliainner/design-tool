import React from "react";

const CanvasControls = ({ width, height, onWidthChange, onHeightChange }) => {
  return (
    <div className="canvas-controls">
      <div>
        <label>Width: </label>
        <input
          type="range"
          min="100"
          max="1000"
          value={width}
          onChange={(e) => onWidthChange(e.target.value)}
        />
        <span>{width}px</span>
      </div>
      <div>
        <label>Height: </label>
        <input
          type="range"
          min="100"
          max="1000"
          value={height}
          onChange={(e) => onHeightChange(e.target.value)}
        />
        <span>{height}px</span>
      </div>
    </div>
  );
};

export default CanvasControls;
