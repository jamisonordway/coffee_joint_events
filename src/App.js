import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import EventTitle from './components/eventTitle' 

class App extends Component {
  constructor() {
    super();
    this.state = {
      eventData: this.getEventsList(),
      eventText: '',
      eventImage: ''
    };
    this.getEventsList = this.getEventsList.bind(this);
  }
  
  getEventsList() {
    fetch('https://www.eventbriteapi.com/v3/events/search/?q=meow+wolf&token=GV4WN6VQGEDOJ565HBV4')
    .then(function (result) {
      return result.json();
    }).then(function (json) {
      let events = json.events.map(function(event) {
        // console.log(this.state);
        this.setState({
          eventText: event.name.text,
          eventImage: event.logo.url
        })
      });
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
