// 1) Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// //4) Create a component in a separeted file! Use your componente.
// function App() {
//  let message = "By there!";
//  if (Math.random() > 0.5) {
//   message = "Hello There!";
//   }
//  return <h1>{message}</h1>

//  return <h1>{new Date().toLocaleTimeString()}</h1>;

//  const inputType = "number";
//  const minValue = 5;
//  return <input style={{border: '3px solid red'}} type={inputType} min={minValue} max={10} />;

//  return <input style= {{border: '1px solid blue'}} />
//  <input placeholder="hi there!" />
// }

<App />;

//5) Show the component on the screen
root.render(<App />);
