import React from "react";

const NodeElement = ({ color = 'black', background = 'white', fontSize = '20px', text = '' }) => (
    <span
        style={{
            fontSize,
            color,
            background
        }}
    >
    {text + ' '}
  </span>
)

export default  NodeElement