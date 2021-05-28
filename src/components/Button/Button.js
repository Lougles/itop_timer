import { render } from "@testing-library/react";
import React, { Component } from "react";

function Button(props) {
  return (
    <>
      <button onClick={props.start}>Start/Stop</button>
      <button>Wait</button>
      <button onClick={props.reset}>Reset</button>
    </>
  );
}

export default Button;
