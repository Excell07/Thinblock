import React, { Component } from "react";

export default class Connection extends Component {
  render() {
    return (
      <div className="container-outer">
        <div>
          <div className="container">
            <div className="justify-content-sm-center row">
              <div className="col-lg-5 col-12">
                <div className="welcome__user">
                  <div className="welcome__user-hey">Ready to get started?</div>
                  <div className="welcome__user-start">
                    Get in touch or read the docs
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-12">
                <div style={{ paddingTop: 20 }} className="user__xyz">
                  <a href="mailto:contact@thinblock.io" className="user-btn">
                    <button
                      type="button"
                      className="user__xyz-req btn btn-primary"
                    >
                      Request access
                    </button>
                  </a>

                  <a
                    href="https://docs.thinblock.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="user-btn"
                  >
                    <button
                      type="button"
                      className="user__xyz-doc btn btn-primary"
                    >
                      Docs
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
