import React from 'react'
import { FaBeer } from "react-icons/fa";
import { Hello } from './Hello.jsx'
import { Info } from './Info.jsx'

function App() {
  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <Hello/>
      <Info/>
      Lets go for a <FaBeer />
    </div>
  )
}

export default App
