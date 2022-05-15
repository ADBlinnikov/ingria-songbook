import * as React from "react";

const Author = ({ children }) => {
  return (
    <div className="has-text-right is-size-6 is-family-secondary">
        {children}
    </div>
  );
};

export default Author;
