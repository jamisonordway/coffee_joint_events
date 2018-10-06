import React, { Component } from 'react';
import Event from './Event'

const EventsContainer = ({eventData}) => {
 

  const events = eventData.map((event, index) => <Event key={index} {...event} />)
    return (
      <div className='events-container'>
      {events}
      </div>
    )
  }


export default EventsContainer;