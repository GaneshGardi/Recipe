
import './App.css'
import Login from './components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home'


function App() {


  return (
  

      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home />} />
      </Routes>
      </BrowserRouter>
      
    
  )
}

export default App
