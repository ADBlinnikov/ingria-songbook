import React, { useState } from "react";

const CollapsableCard = ({ children, header="Ноты" }) => {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState(!state)
  }

  return (
    <section class="section">
      <div class="container">
        <div class="card is-fullwidth">
          <header class="card-header" onClick={toggle}>
            <p class="card-header-title">{ header }</p>
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
