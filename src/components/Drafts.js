import React from 'react'
import MidContent from './MidContent'
import "./Cotent.css";
import { FaPushed } from "react-icons/fa";

const Drafts = () => {
  return (
    <div className='main'>
    <div className='midcont'>
       <MidContent />
    </div>
    <div className='rightcont'>
       <div className="draftcont">
         <div className='draftnav'><h3>Draft Files</h3></div>
         <div className='draftdisplay'>
            <div className='icondraft'><FaPushed /></div>
            <p>There is no any Draft files present</p>
         </div>
       </div>
    </div>
</div>  
  )
}

export default Drafts