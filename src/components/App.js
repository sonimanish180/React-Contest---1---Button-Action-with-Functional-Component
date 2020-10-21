import React, { Component, useState } from "react";
import "./../styles/App.css";
import Text from "./Text";

function App() {
  const [text, setText] = React.useState("");

  const textData =
    "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";

  const clickFn = () => {
    setText(textData);
  };

  return (
    <>
      <div id="main">{/* // Do not alter the main div */}</div>
      <button id="click" onClick={clickFn}>
        CLICK
      </button>
      <Text text={text} />
    </>
  );
}

export default App;
