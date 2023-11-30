import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Link to={'/quiz'}><div className='btn'>Start</div></Link>
  )
}

export default Home