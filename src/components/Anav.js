import React from 'react'
import "./Anav.css";
import Header from './Header';
import Headers from './Headers';

const Anav = () => {
  return (
    <div className='Anav'>
      <div className='Anavu'><Header /></div>
      <div className='Anavl'><Headers /></div>
    </div>
  )
}

export default Anav