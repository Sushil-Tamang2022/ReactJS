import React from 'react'

const EventDetails = ({ event : { title, location, date } }) => {
  return (
    <div>
        <h1>Event Details has been given below.</h1>
        <h3>{title}</h3>
        <h3>{location}</h3>
        <h3>{date}</h3>
    </div>
  )
}

export default EventDetails