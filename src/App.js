import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import EventTitle from './components/eventTitle' 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventData: this.getEventsList()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ eventData: this.props});
  }
  
  
  getEventsList() {
    fetch('https://www.eventbriteapi.com/v3/events/search/?q=meow+wolf&token=GV4WN6VQGEDOJ565HBV4')
    .then(function (result) {
      return result.json();
    }).then(function (json) {
      json.events.map(function(event) {
        return event
        // return {
          //   eventText: event.name.text,
          //   eventImage: event.logo.url
          // }
        })
      })
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={this.} className="eventImage" alt="event image" /> */}
          <EventTitle eventImage={'this.state.eventImage'} eventName={'this.state.eventText'}/>
        </header>
      </div>
    );
  }
}


export default App;
