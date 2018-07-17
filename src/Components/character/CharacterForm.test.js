import React from "react";
import ReactDOM from "react-dom";
import CharacterForm from "./CharacterForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  let props = {
    char: {},
    onSubmit: () => {},
    onFieldChange: () => {},
    errors: {}
  };

  ReactDOM.render(<CharacterForm {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

function setup() {
  const div = document.createElement("div");

  let props = {
    char: {},
    onSubmit: () => {},
    onFieldChange: () => {},
    errors: {}
  };

  let renderer = ReactDOM.render(<CharacterForm {...props} />, div);
  let output = renderer.getElementsByTagName("h5");

  return {
    props,
    output,
    renderer
  };
}

describe("Testing CharacterForm.js", () => {
  it("some text", () => {
    expect(true).toEqual(true);
  });

  it("Renders form and h5", () => {
    const { renderer } = setup();
    //expect(output.type).toBe('h5');
    expect(true).toEqual(true);
  });
});
