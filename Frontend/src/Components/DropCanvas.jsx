import React from "react";
import { Frame, Element, useNode } from "@craftjs/core";
import { Container } from "./Container";
const DropCanvas = () => {
  return (
    <Frame>
      <Element is={Container} canvas>
        
      </Element>
    </Frame>
  );
};

export default DropCanvas;
