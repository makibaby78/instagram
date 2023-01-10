import React, { useEffect } from 'react'
import Leftbar from '../Leftbar/Leftbar'
import Rightcol from '../Rightcol/Rightcol';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { UserCollection } from '../../api/userinfo';
import './home.css'

function Home() {
  const user = useTracker(() => Meteor.user());

  const allUsers = useTracker(() => {
    Meteor.subscribe('allUsers');
      return UserCollection.find().fetch();
  });

  useEffect(() => {
    document.title = 'Instagram';
  }, []);
  
  return (
    <>
      {allUsers.filter(lists => lists.username===user.username).map((lists)=>{
        return(
          <div className='home-wrapper' key={lists._id}>
            <Leftbar/>
            <div className='content-wrapper'></div>
            {/* <Rightcol url={lists.profileurl} name={`${lists.firstname} ${lists.lastname}`} username={`${lists.username}`}/> */}
          </div>
        )
      })}
    </>
  )
}

export default Home