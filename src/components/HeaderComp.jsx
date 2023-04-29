import React from "react";
import { NavLink } from "react-router-dom";

function HeaderComp() {
  return (
    <div className="header">
      <NavLink className="link" to="/">
        Home
      </NavLink>
      <NavLink className="link" to="/about">
        About
      </NavLink>
      <NavLink className="link" to="/contact">
        Contact
      </NavLink>
    </div>
  );
}

export default HeaderComp;
