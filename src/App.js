import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Event from './components/Event'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsData: []
    };
  }
  componentDidMount() {
    this.getEventsList()
  }
  
  getEventsList = async () => {
    const response = await fetch('https://www.eventbriteapi.com/v3/events/search/?q=meow+wolf&token=GV4WN6VQGEDOJ565HBV4')
    const result = await response.json();
    const events = result.events
    const eventsData = events.map((event)  => {
      return {
        title: event.name.text,
        image: event.logo.url,
        date: event.start.local,
        description: event.description.text,
        link: event.url
      }
    })
    this.setState({ eventsData });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
          {this.state.eventsData.map((event) => {
            return <Event
            key={event.id}
            title={event.title}
            image={event.image}
            date={event.date}
            description={event.description}
            link={event.link}
            />
          })}
      </div>
    );
  }
}


export default App;
