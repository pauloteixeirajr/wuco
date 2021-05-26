import React from "react";

import "./section.scss";

const Section = ({ header, children, white }) => {
  return (
    <div className="section-container">
      <section className="section-content">
        <h3 style={white ? { color: "#eee" } : null}>{header}</h3>
        <div className="section-children">{children}</div>
      </section>
    </div>
  );
};

export default Section;
