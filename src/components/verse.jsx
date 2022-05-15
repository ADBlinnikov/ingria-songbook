import * as React from "react";

const Verse = ({ heading, children }) => {
  return (
    <div className="columns is-mobile is-multiline m-1 ml-2">
      <div className="column has-text-left-mobile has-text-right is-12-mobile">
        <h3 className="subtitle has-text-grey">{heading}</h3>
      </div>
      <div className="column has-text-left is-12-mobile">
        <span className="has-text-dark">{children}</span>
      </div>
    </div>
  );
};

export default Verse;
