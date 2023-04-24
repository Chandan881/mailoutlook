import React from 'react'
import './Headers.css'
import {FaSearch, FaRegPlusSquare, FaEnvelopeOpen, FaUndoAlt, FaToggleOff} from 'react-icons/fa'

const Headers = () => {
  return(
    <div className='headers'>
      <div className='Hsleft'>
          <input type='text' placeholder='Search mail and people' />
          <button className='iconsearch'><FaSearch /></button>
      </div>
      <div className='Hsright'>
         <div className='Hrleft'>
            <div className='iconadd'>
              <h5 className='plus'><FaRegPlusSquare /></h5>
              <select><option> <h5 className='gresy'>New</h5></option></select>
            </div>
            
            <div className='iconmail'>
            <h5 className='openmsg'><FaEnvelopeOpen /></h5>
            <h6 className='markread'>Mark all as read</h6>
          </div>
         </div>

         <div className='Hrright'>
         <div className='iconadd'>
              <div className='undo'><FaUndoAlt /></div>
              <h6 className='beta'>Undo</h6>
            </div>
            
            <div className='iconmail'>
            <div className='toggle'><FaToggleOff /></div>
            <h6 className='beta'>Try this beta</h6>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Headers