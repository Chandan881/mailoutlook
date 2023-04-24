import React from 'react'
import MidContent from './MidContent'
import RightContent from './RightContent'
import "./Cotent.css"

const Cotent = () => {
  return (
    <div className='main'>
         <div className='midcont'>
            <MidContent />
         </div>
         <div className='rightcont'>
            <RightContent />
         </div>
    </div>     
  )
}

export default Cotent