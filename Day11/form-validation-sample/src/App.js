import React from 'react'
import NavBar from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App