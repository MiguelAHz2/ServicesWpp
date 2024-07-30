import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Components/Main'
import Home from './Components/Home'
import Confirmation from './Components/Confirmation'


function App() {
  const [orderStatus, setOrderStatus] = useState(false)
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route  path='/main' element={<Main setOrderStatus={setOrderStatus} />} />
        <Route path='/confirmation' element={<Confirmation orderStatus={orderStatus} />} />
      </Routes>
    </BrowserRouter>
    </> 
  )
}

export default App
