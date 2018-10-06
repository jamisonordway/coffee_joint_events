import React, { Component } from 'react';

const Event = ({eventTitle, eventImage}) => {
  const eventTitleInfo =  
  <article>
    <h2>{eventTitle}</h2>
    <h3>{eventImage}</h3>
  </article>

  return(
    eventTitleInfo
  )

}

export default Event