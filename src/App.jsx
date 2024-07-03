import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Components/Main'
import Home from './Components/Home'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route  path='/main' element={<Main/>} />
      </Routes>
    </BrowserRouter>
    </> 
  )
}

export default App
