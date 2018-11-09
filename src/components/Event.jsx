import React from 'react';
import '../stylesheets/Event.css'
import { startDateCleaner } from '../cleaner';


const Event = ({title, image, date, description, link}) => {
  const cleanStart= startDateCleaner(date)

  return(
    <div className='card'>
      <article className='info'>
        <div className='event-left'>
          <h2 className='event-start'>{cleanStart}</h2>
          <p className= 'description'>{description}</p>
        </div>
        <div className='event-center'>
          <img src={image} alt={title}></img>
          <h1>{title}</h1>
        </div>
      </article>
      <div className='event-right'>
        {/* maybe make the link a button */}
        <a href={link}>Click here to learn more</a>
      </div>
    </div>
    )

}

export default Event
