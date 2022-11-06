import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='app relative'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App