import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/* eslint-disable */
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Testing", () => {
  it("some text", () => {
    expect(true).toEqual(true);
  });
});
/* eslint-enable */
