import React from 'react'
import './RightContent.css'
import {FaEnvelope} from 'react-icons/fa'



const RightContent = () => {
  return (
    <div className='rightcontents'>
       <div className='rights'>
           <div className='icon'><FaEnvelope /></div>
           <h6 className='icongrey'>Select an item to read</h6>
           <h6 className='iconblue'>Click here to always select first item in the list</h6>
       </div>
    </div>
  )
}

export default RightContent