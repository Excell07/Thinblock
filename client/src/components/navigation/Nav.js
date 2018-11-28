import React, {Component} from 'react';

import MobileNav from './MobileNav';

class Nav extends Component {
  state = {
    mobileToggle: false,
    mobileView: true,
    desktopView: false
  }

  updateDimensions = () => {
    if (window.innerWidth < 500){
      this.setState({mobileView: false})
    } else if (window.innerWidth > 768) {
      this.setState({desktopView: true})
    } else {
      this.setState({mobileView: false})
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      mobileToggle: !prevState.mobileToggle
    }))
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions)
  }

  render(){
    // const addClass = this.state.desktopView ? "justify-content-end" : "justify-content-center";
    return (
      <div>
        <MobileNav toggleBtn={this.handleClick}
                   mobileToggle={this.state.mobileToggle}
                   mobileView={this.state.mobileView} 
                   desktopView={this.state.desktopView} 
                   />
      </div>
    );
  }
}

export default Nav;














// import React, {Component} from 'react';

// import DeskTopNav from './DesktopNav';
// import MobileNav from './MobileNav';

// class Nav extends Component {
//   state = {
//     mobileToggle: false,
//     mobileView: true
//   }

//   updateDimensions = () => {
//     if (window.innerWidth > 500){
//       this.setState({mobileView: false})
//     } else {
//       this.setState({mobileView: true})
//     }
//   }

//   handleClick = () => {
//     this.setState(prevState => ({
//       mobileToggle: !prevState.mobileToggle
//     }))
//   }

//   componentDidMount() {
//     this.updateDimensions();
//     window.addEventListener("resize", this.updateDimensions)
//   }

//   render(){
//     return (
//       <div>
//         {/* <DeskTopNav toggleBtn={this.handleClick} /> */}
//         <MobileNav toggleBtn={this.handleClick}
//                    mobileToggle={this.state.mobileToggle}
//                    mobileView={this.state.mobileView} />
//       </div>
//     );
//   }
// }

// export default Nav;