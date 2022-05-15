import * as React from "react";
import { Link } from "gatsby";
import Logo from "../images/icon.png"

const Navbar = () => {
  const [isActive, setActive] = React.useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <nav className="navbar has-background-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img
            src={Logo}
            width="28"
            height="28"
            alt="Logo"
          />
        </Link>

        <span
          role="button"
          onClick={toggleClass}
          className={isActive ? "navbar-burger is-active" : "navbar-burger"}
          aria-label="menu"
          aria-expanded="false"
          data-target="app-navbar"
          tabIndex={0}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>

      <div
        id="app-navbar"
        className={isActive ? "navbar-menu is-active" : "navbar-menu"}
      >
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            <span className="has-text-dark has-text-weight-semibold">ДОМОЙ</span>
          </Link>
          <Link to="/hymns" className="navbar-item">
            <span className="has-text-dark has-text-weight-semibold">ГИМНЫ</span>
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/playbook/" className="button is-link">
                <span className="is-size-5">Я в церкви</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
