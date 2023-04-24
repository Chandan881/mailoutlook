import React from 'react'
import MidContent from './MidContent'
import "./Cotent.css"
import { FaBiking } from "react-icons/fa";

const Active = () => {
  return (
    <div className='main'>
    <div className='midcont'>
       <MidContent />
    </div>
    <div className='rightcont'>
       <div className="activecont">
         <div className='activenav'><h3>Active Files</h3></div>
         <div className='activedisplay'>
            <div className='iconactive'><FaBiking /></div>
            <p>There is no any Active files present</p>
         </div>
       </div>
    </div>
</div>  
  )
}

export default Active