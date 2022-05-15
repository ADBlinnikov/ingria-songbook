import React, { useState } from "react";

const CollapsableCard = ({ children }) => {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState(!state)
  }

  return (
    <section class="section">
      <div class="container">
        <div class="card is-fullwidth">
          <header class="card-header">
            <p class="card-header-title">Ноты</p>
            <button className="card-header-icon" onClick={toggle}>
              <span className="icon">
                <i class="fa fa-angle-down" />
              </span>
            </button>
          </header>
          <div class={`card-content ${state ? "is-hidden": ""}`}>
            <div class="content">
              { children }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollapsableCard;
