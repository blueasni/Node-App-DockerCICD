// StepCircle.js
import React from 'react';

const StepCircle = ({ color, icon, title, text }) => {
  return (
    <div className="step-circle" style={{ borderColor: color }}>
      {icon} {/* Render the SVG icon directly */}
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default StepCircle;