import React from 'react';

import "./Button.css";

export default function Button({ title, click = false, handleClick }) {
  return (
      <button onClick={handleClick} disabled={click}>{title}</button>
  );
}