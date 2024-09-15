import React from "react";
import { useNode } from "@craftjs/core";
export const Container = ({background="red", padding = 0, children}) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <div ref={ref=>connect(drag(ref))} style={{margin: "5px 0", backgroundColor: background,borderRadius:"10px", padding: `${padding}px`}}>
      {children}
    </div>
  )
}