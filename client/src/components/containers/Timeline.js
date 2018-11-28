import React, {Component} from 'react'

class Timeline extends Component {
  render(){
    return (
      <div id="roadmap" className="container-timeline container-fluid">
        <div className="container-timeline-header">
          <h1 className="timeline-header">Roadmap</h1>
          <h4 className="timeline-sub">We have a lot of exciting stuff coming. Stay tuned!</h4>
        </div>

        <div className="timeline-years">
          <ul className="timeline">
            <li className="event" data-date="2017">
              <div className="timeline-months"><strong>November: </strong>Early Stage Concept</div>
            </li>
            <li className="event" data-date="2018">
              <div className="timeline-months"><strong>April: </strong>Concept Validation</div>
              <div className="timeline-months"><strong>July: </strong>Development Kickoff</div>
              <div className="timeline-months"><strong>November: </strong>Prototype API</div>
            </li>
            <li className="event" data-date="2019">
              <div className="timeline-months"><strong>April: </strong>Concept Validation</div>
              <div className="timeline-months"><strong>June: </strong>Official Launch</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Timeline;