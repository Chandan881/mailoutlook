import React from 'react'
import './Header.css'
import {FaTh, FaRegCommentAlt} from 'react-icons/fa'


const Header = () => {
  return(
    <div className='header'>
       <div className='Hleft'><FaTh /></div>
       <div className='Hright'>
          <h5 className='outlook'>Outlook Mail</h5>
          <div className='msg'>
            <div className='msgs'>
               <FaRegCommentAlt/>
            </div>
            <h6 className='notify'>1</h6>
          </div>
       </div>
    </div>
  )
}

export default Header