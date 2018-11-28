import React, {Component} from 'react';
import hero from '../../images/header-illustration.png';

class Hero extends Component {
  render(){
    return (
      <div className={this.props.backGround}>
        <div className={`hero row-container center-text`}>
          <div className="hero__content">
            <div className="hero__content__banner">
              <h1 className="hero__content-h1"> {this.props.header } </h1>
              <h2 className="hero__content-h2"> {this.props.subHeader} </h2>
            </div>
                
                <a href="mailto:accounts@thinblock.io">
                  <button className="btn btn-primary btn-shadow hero__content__button-req">{this.props.btnReqAccess}</button>
                </a> 
  
                <a href="https://docs.thinblock.io">
                  <button className="btn btn-primary btn-shadow hero__content__button-doc">{this.props.btnDocs}</button>
                </a>
  
                <div className="hero__content-vessel">
                  <img className="hero__content-img" src={hero} alt="illlustration"/>
                </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;