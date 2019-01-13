import React from "react";
import "./style.css";

function Body(props) {
  return (
        <img className = {`click-item ${props.shake ? "shake" : ""}`} alt={props.name} src={props.image} onClick={() => props.chooseImage(props.id)}/>
  );
}

export default Body;
