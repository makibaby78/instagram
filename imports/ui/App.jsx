import React from 'react'
import Leftbar from './Leftbar/Leftbar'
import Login from './Login/Login'
import Register from './Register/Register';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/Home';

function App() {
  const user = useTracker(() => Meteor.user());

  return (
    <div className='app-wrapper container'>
    <Router>
      {user ? 
        (
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          ) : (
          <Routes>
            <Route path='/register' element={<Register /> } />
            <Route path='/login' element={<Login /> } />
            <Route path='/' element={<Login /> } />
            <Route path='*' element={<Login /> } />
          </Routes>
        )
      }
    </Router>
    </div>
  )
}

export default App
