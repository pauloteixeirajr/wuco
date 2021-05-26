import React from "react";

import "./card.scss";

const Card = ({ header, children }) => {
  return (
    <div className="card">
      <h3 className="card-title">{header}</h3>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
