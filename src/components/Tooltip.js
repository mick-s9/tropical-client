import React from 'react';
import './Tooltip.css';

const Tooltip = ({ message }) => {
  return (
    <div className="tooltip">
      {message}
    </div>
  );
};

export default Tooltip;
