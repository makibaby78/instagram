import React, {useState} from 'react'
import { Meteor } from 'meteor/meteor'
import { FaInstagram, FaFacebookMessenger } from "react-icons/fa";
import { BsGearWide, BsExclamationSquare, BsHouseDoorFill, BsSearch, BsCompass, BsHeart, BsBagPlus, BsFillPersonFill, BsList } from "react-icons/bs";
import './leftbar.css'
import { Link } from 'react-router-dom';

function Leftbar() {
    const [show, setShow] = useState(false)

    function logout(){
      Meteor.logout();
    }
  return (
    <div className='leftbar-wrapper d-sm-block'>
      <div className='lb-home'>
        <Link to="/" className='link-color'>
          <FaInstagram className='icon-size bn-1264'/>
          <div className='n-1264'>
            <img src='https://firebasestorage.googleapis.com/v0/b/test-uploading-file.appspot.com/o/images%2Finstagram-logo.png?alt=media&token=328758d6-03d8-403d-b6d0-7e6152b51b21' width='130'/>
          </div>
        </Link>
      </div>
      <div className='lb-os-wrapper'>
        <div className='lb-options'>
          <Link to="/" className='link-color'>        
            <BsHouseDoorFill className='icon-size'/>
          </Link>
          <BsSearch className='icon-size'/>
          <BsCompass className='icon-size'/>
          <Link to="/messages" className='link-color'><FaFacebookMessenger className='icon-size'/></Link>
          <BsHeart className='icon-size'/>
          <BsBagPlus className='icon-size'/>
          <BsFillPersonFill className='icon-size'/>
        </div>
        <div className='lb-settings'>
          <div onClick={()=>setShow(!show)}>
            <BsList className='icon-size'/>
          </div>
          {show ?
            (
              <div className='lbs-content'>
                <div className='lbsc-ti'>
                  <span>Settings</span>
                  <BsGearWide className='option icon'/>
                </div>
                <div className='hr-line'></div>
                <div className='lbsc-ti'>
                  <span>Report a problem</span>
                  <BsExclamationSquare className='option icon'/>
                </div>
                <div className='hr-line'></div>
                <div onClick={logout} className='lbsc-ti'>
                  <span>Logout</span>
                </div>
              </div>
            ):
            (
              <></>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Leftbar