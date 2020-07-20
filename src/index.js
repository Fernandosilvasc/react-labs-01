import React from "react";
import ReactDOM from "react-dom";
import SectionA from "./components/SectionA";
import StudentListParent from "./components/StudentListParent";

import "./style.css";

function App() {
  return (
    <div className="App">
      <h1>102 React Assignment</h1>
      <SectionA />
      <StudentListParent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

