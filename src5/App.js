import React from "react";
import JSXVariables from "./components/JSXVariables";

function App() {
  return (
  <div>
  <JSXVariables obj={{
    first:"Joe",
    last:"Rehfuss",
    cats:["Shiva","Bahamut"]}
  }/>
 

  </div>
  );
}

export default App;
