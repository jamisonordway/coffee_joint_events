import React from 'react';
import '../App.css'

const Event = ({id, title, image, date, description, link}) => {
  const eventInfo =  
  <article className='title'>
    <img src={image} alt="event: {title}"/>
    <h2>{title}</h2>
    <p className='date'>{date}</p>
    <p className='description'>{description}</p>
    <p className='link'>{link}</p>
  </article> 

  return(
    eventInfo
    )

}

export default Event