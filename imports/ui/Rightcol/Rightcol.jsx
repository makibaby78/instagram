import React from 'react'
import './rightcol.css'

function Rightcol(props) {
    function logout(){
        Meteor.logout();
    }
  return (
    <div className='rightcol-wrapper'>
        <div className='profile-information'>
            <div className='pi-i-un'>
                <div className='pi-un profile-image'>
                    <img src={props.url} />
                </div>
                <div className='pi-un'>
                    <span className='pi-username'>{props.username}</span>
                    <span className='pi-name'>{props.name}</span>
                </div>
            </div>
            <div className='pi-un'>
                <span onClick={logout} className='link-style'>Switch</span>
            </div>
        </div>
    </div>
  )
}

export default Rightcol