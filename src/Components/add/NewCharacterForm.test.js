import React from "react";
import ReactDOM from "react-dom";
import NewCharacterForm from "./NewCharacterForm";

/* eslint-disable */
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NewCharacterForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Testing", () => {
  it("some text", () => {
    expect(true).toEqual(true);
  });
});
/* eslint-enable */
