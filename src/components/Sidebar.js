import React from 'react';
import "./Sidebar.css"

import { NavLink } from "react-router-dom";


const Sidebar = () => {

  return (
    <div className="sidebar">


      <ul className="sidein">
        <h2 className="conti">Folders</h2>
          <NavLink style={({isActive})=>{return{backgroundColor: isActive ?  ' #00204a' : ''}}} className="ancr1" to="/">Inbox</NavLink>
          <NavLink style={({isActive})=>{return{backgroundColor: isActive ?  ' #00204a' : ''}}} className="ancr1" to="/junk">Junk email</NavLink>
          <NavLink style={({isActive})=>{return{backgroundColor: isActive ?  ' #00204a' : ''}}} className="ancr1" to="/drafts">Drafts</NavLink>
          <NavLink style={({isActive})=>{return{backgroundColor: isActive ?  ' #00204a' : ''}}} className="ancr1" to="/sent">Sent home</NavLink>
          <NavLink style={({isActive})=>{return{backgroundColor: isActive ?  ' #00204a' : ''}}} className="ancr1" to="/delete">Delete home</NavLink>
          <NavLink style={({isActive})=>{return{backgroundColor: isActive ?  ' #00204a' : ''}}} className="ancr1" to="/active">Active</NavLink>
      </ul>

    </div>
  )
}

export default Sidebar