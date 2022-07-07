import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [state, setState] = useState(0);

  return (
    <div>
      <div className="tabs is-centered">
        <ul>
          {children.map((verses, index) => {
            return (
              <li className={state === index ? "is-active" : ""}>
                <a onClick={() => setState(index)}>{verses.props.author}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div>{ children[state] }</div>
    </div>
  );
};

export default Tabs;
