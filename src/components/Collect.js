import React from 'react'
import Sidebar from './Sidebar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cotent from './Cotent';
import "./Collect.css";
import Junk from './Junk';
import Drafts from './Drafts';
import Delete from './Delete';
import Sent from './Sent';
import Active from './Active'


const Collect = () => {
  return (
    <div className='flxContents'>
     <BrowserRouter>
      <Sidebar />
      <Routes>
      <Route path="/" element={<Cotent />} />
      <Route path="/junk" element={<Junk />} />
      <Route path="/drafts" element={<Drafts />} />
      <Route path="/sent" element={<Sent />} />
      <Route path="/delete" element={<Delete />} />
      <Route path="/active" element={<Active />} />
      </Routes>
    </BrowserRouter> 
    </div>
  )
}

export default Collect