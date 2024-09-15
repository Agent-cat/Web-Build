import React from "react";
import { Frame, Element, useNode } from "@craftjs/core";
import { Container } from "./Container";
const DropCanvas = () => {
  return (
    <Frame>
      <Element is={Container} canvas>
        <h1>Hello</h1>
        <Element is={Container} background="blue" canvas>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
        </Element>
        <Element is={Container} background="green" canvas>
          <button>Button</button>
        </Element>
      </Element>
    </Frame>
  );
};

export default DropCanvas;
