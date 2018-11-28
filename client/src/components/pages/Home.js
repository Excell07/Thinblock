import React from 'react';
import Hero from '../containers/Hero';
import TwoCol from '../containers/TwoCol';
import ContentFlexCol from '../containers/ContentFlexCol';
import Timeline from '../containers/Timeline';

import axios from 'axios';

class HomePage extends React.Component {
  state = {
    TwoColdata: []
  }

  componentDidMount(){
    axios.get(`/index-two-col-data`)
    .then((response) => {
      this.setState({TwoColdata: response.data});
    })
    .catch(function(error){
      console.log(error);
    })
  }
  
  render(){
    return (
      <div>
        <Hero 
          header="Automation for blockchains"
          subHeader="Thinblock connects blockchain platforms with third-party services to help you build smart applications."
          backGround="home-hero-backGround"
          btnReqAccess="REQUEST ACCESS"
          btnDocs="DOCS"
        />
        <ContentFlexCol />

        {
          this.state.TwoColdata.map((data, i) => {
            return (
              <TwoCol 
                key={i}
                header={data.header}
                para={data.para}
                img={data.img}
                altText={data.altText}
                pullImg={data.pullImg}
                id={data.id}
                diffFlow={i % 2 === 0 ? null : 'setSpace'}
              />
            );
          })
        }

        <Timeline />
      </div>
    );
  }
}

export default HomePage;