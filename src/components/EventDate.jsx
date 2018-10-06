import React, { Component } from 'react';

const EventDate = ({eventDate}) => {
  const dateAndTime = eventDate
  return(
  <article>
    <h2>Date and Time: {dateAndTime}</h2>
  </article>
  )
}


export default EventDate