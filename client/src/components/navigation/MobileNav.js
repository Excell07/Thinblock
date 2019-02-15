import React, { Component } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import brand from "../../images/negative-logo.png";

class MobileNav extends Component {
  render() {
    return (
      <div className="bg-custom">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light bg-transparent">
            <a className="navbar-brand" href="#home">
              <img
                src={brand}
                alt=""
                className="nav__list__section__item__img-container__img"
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggler"
              aria-controls="navbarToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="mr-auto navbar-nav" />
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    onClick={this.props.toggleBtn}
                    className="nav-link mobile-nav__list__item"
                    to="#solution"
                  >
                    Our Solution
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={this.props.toggleBtn}
                    className="nav-link mobile-nav__list__item"
                    to="#roadmap"
                    activeclassname="mobile-nav-active"
                  >
                    RoadMap
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={this.props.toggleBtn}
                    className="nav-link mobile-nav__list__item"
                    to="#"
                    activeclassname="mobile-nav-active"
                  >
                    API
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={this.props.toggleBtn}
                    className="nav-link mobile-nav__list__item"
                    to="#"
                    activeclassname="mobile-nav-active"
                  >
                    FAQ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a
                    onClick={this.props.toggleBtn}
                    href="mailto:contact@thinblock.io"
                    className="nav-link mobile-nav__list__item"
                    activeclassname="mobile-nav-active"
                  >
                    Contact Sales
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default MobileNav;
