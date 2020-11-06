import React from "react";
import "./SideNavbar.css";

class SideNavbar extends React.Component {
  render() {
    return (
      <nav id="sidebar">
        <div className="buffer">
          <a href="#" className="title">
            Portal
          </a>
        </div>

        <ul className="list-unstyled components mb-5">
          <li className="active">
            <a href="#">
              <span className="fa fa-home mr-3"></span> Homepage
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa fa-user mr-3"></span> Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa fa-sticky-note mr-3"></span> Other
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa fa-sticky-note mr-3"></span> Other
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa fa-paper-plane mr-3"></span> Settings
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa fa-paper-plane mr-3"></span> Information
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideNavbar;
