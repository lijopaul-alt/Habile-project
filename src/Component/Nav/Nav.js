import React, { Component } from "react";

import "./Navstyle.css";

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="menuicon">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>

        <div className="brand">
          <p className="logo">CB</p>
          <h1 className="name">cloudbanking</h1>
        </div>

        <div className="sidebar">
          <p className="logo">GC</p>
          <h1 className="name">Gregory Clark</h1>
          <div className="icon">
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
        </div>

      </nav>
    );
  }
}

export default Nav;
