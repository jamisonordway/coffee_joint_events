import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import EventsContainer from './components/EventsContainer' 
import EventDate from './components/EventDate'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventData: []
    };
  }

  componentDidMount() {
    this.getEventsList()
  }
  
  getEventsList = async () => {
    const response = await fetch('https://www.eventbriteapi.com/v3/events/search/?q=meow+wolf&token=GV4WN6VQGEDOJ565HBV4')
    const result = await response.json();
    const events = result.events
    const eventInfo = events.map((event)  => {
      return {
        eventTitle: event.name.text,
        eventImage: event.logo.url,
        eventDate: event.start.local,
        eventDescription: event.description.text,
        eventLink: event.url
      }
    })
    this.setState({ eventData: [...eventInfo] });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <EventsContainer eventData={this.state.eventData} />
        </header>
      </div>
    );
  }
}


export default App;
