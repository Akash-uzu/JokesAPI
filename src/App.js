import React from "react";
import axios from "axios";
import { useState } from "react";
import "./App.css";
import spiderman from "./sm.png"
const App = () => {
  const [joke, setJoke] = useState("");
  const getJoke = () => {
    axios.get("https://v2.jokeapi.dev/joke/Dark").then((res) => {
      console.log(res);
      setJoke(res.data.setup + "..." + res.data.delivery);
    }).catch(err=>{
      console.log(err);
    });
  };

  return (
    <div className="body1">
      <div className="main">
        <h2>Click The Button Below To Get The Joke From JokeAPI</h2>
        <br />
      </div>
      <div className="noob">
        <button onClick={getJoke}>Click Me</button>
      </div>

      <div className="joke">
        <h1>{joke}</h1>
        <img src={spiderman} alt="pepe" />
      </div>
    </div>
  );
};
export default App;
