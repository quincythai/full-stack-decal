import {useState} from "react"


function Button(props) {
  return (
    <div>
      <p>{props.title}</p>
      <button onClick={props.update}>{props.text}</button>
    </div>
  );
}

export default Button;