import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav class="navbar">
      <ul>
        <li class="brand"><a href="/">Clicky Game</a></li>
        <li class=""> { `${props.score ? "You guessed correctly!" : "Click an Image to Begin!"}`}</li>
        <li>Score: {props.score} | Top Score: {props.highScore}</li>
      </ul>
    </nav>
  );
}

export default Nav;
