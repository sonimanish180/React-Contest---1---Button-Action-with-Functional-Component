import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  let [paragraph, setParagraph] = React.useState(false);

  let renderPara = () => {
    setParagraph(true);
  };

  return (
    <>
      <div id="main">
        {/* Do not alter the main div */}
        <button onClick={() => renderPara()} id="click">
          CLICK
        </button>
        {paragraph && (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )}
      </div>
    </>
  );
}

export default App;
