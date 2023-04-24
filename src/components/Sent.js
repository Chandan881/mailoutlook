import React from 'react'
import MidContent from './MidContent'
import "./Cotent.css"
import { FaTelegramPlane } from "react-icons/fa";

const Sent = () => {
  return (
    <div className='main'>
    <div className='midcont'>
       <MidContent />
    </div>
    <div className='rightcont'>
       <div className="sentcont">
         <div className='sentnav'><h3>Sent Files</h3></div>
         <div className='sentdisplay'>
            <div className='iconsent'><FaTelegramPlane /></div>
            <p>There is no any Sent files present</p>
         </div>
       </div>
    </div>
</div>  
  )
}

export default Sent