import { months } from '@/static/adminData'
import React from 'react'

const LastSeen = ({lastSeen = new Date()}) => {

  const hour = lastSeen.getHours()
  const minute = lastSeen.getMinutes()
  const year = lastSeen.getFullYear()
  const day = lastSeen.getDay()
  const month = months[lastSeen.getMonth()]

  return (
    <div>
      <p className='font-lato font-[500]' data-testid='last_seen'>Last seen: <span>{month} {day}th, {year}</span> at <span>{hour}:{minute}am</span>
        </p></div>
  )
}

export default LastSeen;