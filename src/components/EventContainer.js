import React from 'react';
import Event from './Event';
import '../stylesheets/EventContainer.css';

const EventContainer = ({ eventsData }) => {
  const eventInfo = eventsData.map((event, index)  => {
    console.log(event.start.local)
    return (
      <Event 
        key={event.id}
        title={event.name.text}
        image={event.logo.url}
        date={event.start.local}
        description={event.description.text}
        link={event.url}
      />
    )
  })
 
  return(
    <div className='container'>{eventInfo}</div>
  );
}

export default EventContainer