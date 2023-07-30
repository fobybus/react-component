import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import App from "./App.js";
import Comp from "./comp2";


//DEPRECIATED 
//ReactDOM.render(< App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
const container = (<div><App />
    <Comp /></div>);
root.render(container);