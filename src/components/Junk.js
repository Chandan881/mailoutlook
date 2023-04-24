import React from 'react'
import MidContent from './MidContent'
import "./Cotent.css"
import { FaHornbill } from "react-icons/fa";

const Junk = () => {
  return (
    <div className='main'>
         <div className='midcont'>
            <MidContent />
         </div>
         <div className='rightcont'>
            <div className="junkcont">
              <div className='junknav'><h3>Junk Files</h3></div>
              <div className='junkdisplay'>
                 <div className='iconjunk'><FaHornbill /></div>
                 <p>There is no any Junk files present</p>
              </div>
            </div>
         </div>
    </div> 
  )
}

export default Junk