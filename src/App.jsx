import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Components/Main'
import Home from './Components/Home'
import Confirmation from './Components/Confirmation'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route  path='/main' element={<Main/>} />
        <Route path='/confirmation' element={<Confirmation/>} />
      </Routes>
    </BrowserRouter>
    </> 
  )
}

export default App
