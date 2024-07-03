import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
      <>
      <h1  className=' text-yellow-400 text-4xl'>Desde el Home</h1>
      <Link to="/main">FORM</Link>
    </>

  )
}

export default Home