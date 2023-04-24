import React from 'react'
import MidContent from './MidContent'
import "./Cotent.css"
import { FaTrashAlt } from "react-icons/fa";

const Delete = () => {
  return (
    <div className='main'>
    <div className='midcont'>
       <MidContent />
    </div>
    <div className='rightcont'>
       <div className="delcont">
         <div className='delnav'><h3>Delete Files</h3></div>
         <div className='deldisplay'>
            <div className='icondel'><FaTrashAlt /></div>
            <p> Empty </p>
         </div>
       </div>
    </div>
</div>  
  )
}

export default Delete