import React from 'react'
import './MidContent.css';

const MidContent = () => {
  return(
    <div className='midcontents'>
      <div className='mids'>
         <div className='sec1'>
             <h4>Focused</h4>
             <h6>Others</h6>
             <select className='filter'><option>filter</option></select>
         </div>
         <div className='sec2'>
            <h6 className='gmail'>Bohnsg+gdkdas@gmail.com</h6>
            <h6 className='gmailmid'>THIS IS EXAMPLE EMAIL NUMBER1 <span className='time'>12:50</span> </h6>
            <h6 className='gmaillast'>This is example name native part1 as showing  </h6>
         </div>
         <div className='sec3'>
            <h5 className='gmail'>Cutlock Team</h5>
            <h6 className='gmailmid'>THIS IS EXAMPLE NUMBER2 <span className='time'>12:50</span> </h6>
            <h6 className='gmaillast'>This is example name native part1 as showing  </h6>
         </div>
      </div>
    </div>
  )
}

export default MidContent