import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState("white");

  function mouseOver() {
    setMouseOver("black");
  }
  function handleClick() {
    setHeadingText("SUBMIT");
  }
  function mouseDown() {
    setMouseOver("white");
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver }}
        onMouseOver={mouseOver}
        onMouseOut={mouseDown}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
