import React from "react";
import "./App.css"
import Weather from "./Weather";

export default function App(){
  return(
    <div className="container">
      <Weather/>
    <h1>The Weather app</h1>
    <footer><a href="https://github.com/Daria888-hub/weather-project"> Open Sourse</a>, 
    by Daria Lee</footer>
    </div>
  )
}