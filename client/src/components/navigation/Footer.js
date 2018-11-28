import React, { Component } from 'react'
import logo from '../../images/negative-logo.png'


export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="sc-gPEVay footer__outer">
          <div className="container">
            <div className="justify-content-sm-center row">
              <div lgoffset="2" className="col-lg-6 col-12">
                <div className="sc-iRbamj footer__outer-logo"><img src={logo} alt="logo" /></div>
              </div>
                <div className="col-lg-2 col-4">
                  <ul className="sc-jlyJG footer__list"><span>Developers</span>
                    <a href="https://docs.thinblock.io" target="_blank" rel="noopener noreferrer"><li>Documentation</li></a>
                    <a href="https://github.com/thinblock" target="_blank" rel="noopener noreferrer"><li>Github</li></a>
                    <a href="/"><li>API Status</li></a>
                  </ul>
                </div>
                  <div className="col-lg-2 col-4">
                    <ul className="sc-jlyJG footer__list">
                      <span>RESOURCES</span>
                      <a href="/"><li>Conditions</li></a>
                      <a href="/"><li>Terms & Conditions</li></a>
                      <a href="/"><li>Privacy Policy</li></a>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-4">
                    <ul className="sc-jlyJG footer__list">
                      <span>Support</span>
                      <a href="https://twitter.com/thinblock" target="_blank" rel="noopener noreferrer"><li>Twitter</li></a>
                      <a href="mailto:contact@thinblock.io" target="_blank" rel="noopener noreferrer"><li>Email</li></a>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
