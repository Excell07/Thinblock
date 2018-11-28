import React, {Component} from 'react';
import {NavHashLink as NavLink} from 'react-router-hash-link';
import brand from '../../images/negative-logo.png';

class MobileNav extends Component {
  render(){
    // let overlayState;
    // let mobileSlideout;
    // let dynamicClass;

    // if (this.props.mobileToggle === true && this.props.mobileView === true){
    //   overlayState = "overlay--active";
    //   mobileSlideout = "mobile-nav--slide-out";
    // } else if (this.props.desktopView === true){
    //   dynamicClass = "justify-content-center"
    // } else {
    //   overlayState = "overlay--hidden";
    //   mobileSlideout = "";
    // }
    
    // if (dynamicClass === "justify-content-center"){
    //   dynamicClass = "justify-content-end"
    // }

    

    return (
      <div className="bg-custom">
        {/* <div className={`overlay ${overlayState}`}></div> */}

        <div className="container">
            <nav className="navbar navbar-expand-md navbar-light bg-transparent">
              <a className="navbar-brand" href="#home"><img src={brand} alt="" className="nav__list__section__item__img-container__img"/></a>
            
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
              <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="mr-auto navbar-nav"></ul>
                <ul className="navbar-nav">
                {/* <ul className={`nav navbar-nav ${dynamicClass}`}> */}
                  <li className="nav-item">
                  <NavLink onClick={this.props.toggleBtn} className="nav-link mobile-nav__list__item" to="#solution">Our Solution</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink onClick={this.props.toggleBtn} className="nav-link mobile-nav__list__item" to="#roadmap" activeclassname="mobile-nav-active">RoadMap</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink onClick={this.props.toggleBtn} className="nav-link mobile-nav__list__item" to="#" activeclassname="mobile-nav-active">API</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink onClick={this.props.toggleBtn} className="nav-link mobile-nav__list__item" to="#" activeclassname="mobile-nav-active">FAQ</NavLink>
                  </li>
                  <li className="nav-item">
                    <a onClick={this.props.toggleBtn} href="mailto:contact@thinblock.io" className="nav-link mobile-nav__list__item" activeclassname="mobile-nav-active">Contact Sales</a>
                  {/* <NavLink onClick={this.props.toggleBtn} className="nav-link mobile-nav__list__item" to="mailto:contact@thinblock.io" activeclassname="mobile-nav-active">Contact Sales</NavLink> */}
                  </li>
                </ul>
              </div>
            </nav>
          {/* </ul> */}
        </div>
      </div>
    )
  }
}

export default MobileNav;