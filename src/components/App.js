import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  let [paragraph, setParagraph] = React.useState("");

  let renderPara = function () {
    setParagraph(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );
  };

  return (
    <div id="main">
      {/* Do not alter the main div */}
      <button onClick={renderPara()} id="click">
        Button
      </button>

      <p id="para">{paragraph}</p>
    </div>
  );
}

export default App;
