import React, { useState, useEffect } from 'react'
import Leftbar from '../Leftbar/Leftbar'

function Home() {
    useEffect(() => {
        document.title = 'Instagram';
    }, []);
  return (
    <>
        <Leftbar />
    </>
  )
}

export default Home