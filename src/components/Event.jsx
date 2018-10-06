import React, { Component } from 'react';
import '../App.css'

const Event = ({eventTitle, eventImage}) => {
  const eventTitleInfo =  
  <article className='event-title'>
    <img src={eventImage}/>
    <h2>{eventTitle}</h2>
  </article>

  return(
    eventTitleInfo
  )

}

export default Event