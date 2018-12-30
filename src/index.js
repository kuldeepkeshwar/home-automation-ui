import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import data, { fetchBoards, setPin } from "./data";
import "./styles.css";
import Board from "./Board";
function App() {
  const [boards, setBoards] = useState({});
  useEffect(() => {
    fetchBoards().then(_boards => setBoards(_boards));
  }, []);
  return (
    <div className="App">
      <h1>Home Automation</h1>
      {Object.keys(boards).map(id => {
        return <Board key={id} data={data[id]} />;
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
