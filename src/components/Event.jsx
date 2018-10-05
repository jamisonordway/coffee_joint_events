import React, { Component } from 'react';

const Event = ({eventTitle, eventImage}) => {
  const eventFunInfo =  
  <article>
    <h2>{eventTitle}</h2>
    <h3>{eventImage}</h3>
  </article>

  return(
    eventFunInfo
  )

}

export default Event