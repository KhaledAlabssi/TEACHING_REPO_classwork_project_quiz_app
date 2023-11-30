import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Thanks({score, setScore, setTest}) {

  const navigate = useNavigate()

  function clickHandler () {
    setScore(0)
    setTest({})
    navigate('/')
  }
  return (
    <div>
        <p>Thanks, your score is: {score}</p>
        <div onClick={clickHandler} className='btn'>Home</div>
    </div>
  )
}

export default Thanks