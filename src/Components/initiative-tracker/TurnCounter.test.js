import React from "react";
import ReactDOM from "react-dom";
import TurnCounter from "./TurnCounter";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TurnCounter />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Testing", () => {
  it("some text", () => {
    expect(true).toEqual(true);
  });
});
