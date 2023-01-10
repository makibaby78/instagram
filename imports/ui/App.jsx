import React from 'react'
import Login from './Login/Login'
import Register from './Register/Register';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { UserCollection } from '../api/userinfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/Home';
import Messages from './Messages/Messages';

function App() {
  const user = useTracker(() => Meteor.user());
  
  const allUsers = useTracker(() => {
    Meteor.subscribe('allUsers');
      return UserCollection.find().fetch();
  });

  return (
      <div className='app-wrapper container'>
        <Router>
          {user ? 
            (
              <>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/messages" element={<Messages />} />
                      </Routes>
              </>
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
