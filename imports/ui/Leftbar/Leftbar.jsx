import React from 'react'
import './leftbar.css'
import { FaInstagram, FaFacebookMessenger } from "react-icons/fa";
import { BsHouseDoorFill, BsSearch, BsCompass, BsHeart, BsBagPlus, BsFillPersonFill, BsList } from "react-icons/bs";

function Leftbar() {
  return (
    <div className='leftbar-wrapper d-sm-block'>
      <div className='lb-home'>
        <FaInstagram className='icon-size bn-1264'/>
        <div className='n-1264'>
          <img src='https://firebasestorage.googleapis.com/v0/b/test-uploading-file.appspot.com/o/images%2Finstagram-logo.png?alt=media&token=328758d6-03d8-403d-b6d0-7e6152b51b21' width='130'/>
        </div>
      </div>
      <div className='lb-options'>
        <BsHouseDoorFill className='icon-size'/>
        <BsSearch className='icon-size'/>
        <BsCompass className='icon-size'/>
        <FaFacebookMessenger className='icon-size'/>
        <BsHeart className='icon-size'/>
        <BsBagPlus className='icon-size'/>
        <BsFillPersonFill className='icon-size'/>
      </div>
      <div className='lb-settings'>
        <BsList className='icon-size'/>
      </div>
    </div>
  )
}

export default Leftbar