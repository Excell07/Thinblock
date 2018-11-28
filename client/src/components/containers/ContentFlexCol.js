import React, { Component } from 'react'

import Code from '../../images/Code@2x.png'
import Apps from '../../images/Apps@2x.png'
import Wallets from '../../images/Crypto_Wallet@2x.png'
import Crypto from '../../images/Crypto@2x.png'
import Payments from '../../images/Secure_Payments@2x.png'

export default class ContentFlexCol extends Component {
  render() {
    return (
      <div className="full-width-row">
        <div>
          <div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="container-header jumbotron">
                    <h2>Empower your blockchain workflows</h2>
                    <h4>ThinBlock provides a interoperability layer to connect APIs, apps, wallets, exchanges and blockchains.</h4>
                  </div>
                </div>
              </div>
                <div className="justify-content-sm-center row">
                  <div className="feature col-lg-2 col-md-4 col-sm-4 col-12">
                    <div className="content-col-primary">
                      <div className="content-col-primary--img"><img src={Code} alt="" /></div>
                      <h4>APIs</h4><p>Use our automation API to invoke triggers or be notified when an event happened</p>
                    </div>
                  </div>
                  <div className="feature col-lg-2 col-md-4 col-sm-4 col-12">
                    <div className="content-col-primary">
                      <div className="content-col-primary--img"><img src={Apps} alt="" /></div><h4>Apps</h4><p>Access to countless integrations with your daily apps via Zapier integration</p>
                    </div>
                  </div>
                  <div className="feature col-lg-2 col-md-4 col-sm-4 col-12">
                    <div className="content-col-primary">
                      <div className="content-col-primary--img"><img src={Payments}  alt="" /></div><h4>Exchanges</h4><p>We connect to the most popular exchanges in order to help you automating your trading</p></div>
                  </div>
                  <div className="feature col-lg-2 col-md-4 col-sm-4 col-12">
                    <div className="content-col-primary">
                      <div className="content-col-primary--img"><img src={Wallets} alt="" /></div><h4>Wallets</h4><p>Use our wallet as a service with zero-knowledge to seamlessly integrate wallets and automation</p></div>
                  </div>
                  <div className="feature col-lg-2 col-md-4 col-sm-4 col-12">
                    <div className="content-col-primary"><div className="content-col-primary--img"><img src={Crypto} alt="" /></div><h4>Blockchains</h4><p>Automatically create transactions, invoke smart contracts or receive security notifications</p></div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}
