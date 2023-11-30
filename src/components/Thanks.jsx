import React from 'react'
import { Link } from 'react-router-dom'


function Thanks({score}) {
  return (
    <div>
        <p>Thanks, your score is: {score}</p>
        <Link to={'/'}><div className='btn'>Home</div></Link>
    </div>
  )
}

export default Thanks