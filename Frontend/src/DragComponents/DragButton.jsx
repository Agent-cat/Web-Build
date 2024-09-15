import React from 'react';
import { useNode } from '@craftjs/core';

const DragButton = ({
  text,
  backgroundColor,
  color,
  fontSize,
  fontWeight,
  padding,
  margin,
  borderRadius,
  borderWidth,
  borderColor,
  boxShadow,
  width,
  height,
}) => {
  const { connectors: { connect, drag } } = useNode();

  const buttonStyle = {
    backgroundColor,
    color,
    fontSize,
    fontWeight,
    padding,
    margin,
    borderRadius,
    border: `${borderWidth}px solid ${borderColor}`,
    boxShadow,
    width,
    height,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  return (
    <button
      ref={ref => connect(drag(ref))}
      style={buttonStyle}
    >
      {text}
    </button>
  );
};

DragButton.craft = {
  props: {
    text: 'Button',
    backgroundColor: '#007bff',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'normal',
    padding: '10px 20px',
    margin: '0',
    borderRadius: '4px',
    borderWidth: 0,
    borderColor: '#007bff',
    boxShadow: 'none',
    width: 'auto',
    height: 'auto',
  },
  rules: {
    canDrag: true,
    canDrop: true,
  },
};

export default DragButton;
