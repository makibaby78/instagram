import React, { useEffect } from 'react'
import Leftbar from '../Leftbar/Leftbar'
import './messages.css'

function Messages() {
  
  useEffect(() => {
    document.title = 'Inbox • Chats';
  }, []);

  return (
    <div className='home-wrapper'>
        <Leftbar />
        <div className='messages-content-wrapper'>
            <div className='messages-wrapper'>
                <div className='messages-list'>
                  <div className='ml-username'>
                    <span>Owner</span>
                  </div>
                  <div className='ml-options'>
                    <div className='mlo mlo-primary'>
                      <span>PRIMARY</span>
                    </div>
                    <div className='mlo mlo-primary'>
                      <span>GENERAL</span>
                    </div>
                    <div className='mlo mlo-primary'>
                      <span>Requests</span>
                    </div>
                  </div>
                </div>
                <div className='ml-chatbox'>
                  <button>Send Message</button>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Messages