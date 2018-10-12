import React from 'react';
import '../stylesheets/Event.css'
import { startDateCleaner } from '../cleaner';


const Event = ({title, image, date, description, link}) => {
  const cleanStart= startDateCleaner(date) 
  console.log('start', cleanStart)
  // const eventInfo =  
  // <article className='title'>
  //   <img src={image} alt="event"/>
  //   <h2>{title}</h2>
  //   <p className='date'>{date}</p>
  //   <p className='description'>{description}</p>
  //   <p className='link'>{link}</p>
  // </article> 


  return(
    <div className='card'>
      <article className='info'>
        <div className='event-left'>
          <h2 className='event-start'>{cleanStart}</h2>
          <p className= 'description'>{description}</p>
        </div>
        <div className='event-center'>
          <img src={image}></img>
          <h1>{title}</h1>
        </div>
      </article>
      <div className='event-right'>
        <a href={link}>Click here to learn more</a>
      </div>
    </div>
    )

}

export default Event