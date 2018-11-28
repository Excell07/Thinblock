import React from 'react';

class TwoCol extends React.Component {
  render(){
    return (
      <div id='solution' className={`full-width-row ${this.props.bg}`}>
        <div className="row-container two-col-container">
          <div className={`two-col-container__text-container ${this.props.diffFlow}`}>
            <h2 className="h-header h-header--blue"> {this.props.header} </h2>
            {
              this.props.para &&
              this.props.para.map((paraItem, i) => {
                return <p key={i} className="two-col-container__text-container__para para"> {paraItem} </p>
              })
            }
          </div>
          <div className={`two-col-container__img-container ${this.props.pullImg}`}>
            <img src={this.props.img} alt={this.props.altText} className="two-col-container__img-container__img"/>
          </div>
        </div>
      </div>
    );
  }
}

export default TwoCol;