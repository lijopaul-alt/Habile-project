import React, { Component } from "react";

import "./Navstyle.css";

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <ul>
          <li className="color">
            <p className="fonts ">CB</p>
          </li>
          <li className="font font-1">cloudbanking</li>
        </ul>
        <ul>
          <li className="color-1">
            <p>CG</p>
          </li>
          <li className="font"> Gregory Clark</li>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </ul>
      </nav>
    );
  }
}

export default Nav;
