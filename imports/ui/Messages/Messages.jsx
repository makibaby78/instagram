import React, { useEffect } from 'react'
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { UserCollection } from '../../api/userinfo';
import Leftbar from '../Leftbar/Leftbar'
import './messages.css'

function Messages() {
  const user = useTracker(() => Meteor.user());

  const allUsers = useTracker(() => {
    Meteor.subscribe('allUsers');
      return UserCollection.find().fetch();
  });

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
                  {/* map chat friends */}
                  {allUsers.filter(lists=>lists.username===user.username).map((lists)=>{
                      return(
                        <div className='ml-chatlist'>
                          <div key={lists._id} className='chat-wrapper pi-un profile-image'>
                              <img src={lists.profileurl} />
                          </div>
                          <h5>{lists.firstname} {lists.lastname}</h5>
                        </div>
                  )})}
                  {/* map chat friends */}
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