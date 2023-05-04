import { Link } from 'react-router-dom';
import React from "react";

function NavBar({searchTerm, onSearchTermChange}) {
  return (
    <div className="topnav">
    <ul className="navBar">    
      <li className="nav-item active">
        <Link to="/">HOME</Link>
      </li>
      <li className="nav-item">
        <Link to="/platforms">PLATFORMS</Link>
       </li> 
       <li className="nav-item">
        <Link to="/shooter">SHOOTER</Link>
       </li>
       <li className="nav-item">
        <Link to="/mmorpg">MMORPG</Link>
       </li>
       <li className="nav-item">
        <Link to="/moba">MOBA</Link>
       </li>
       <li className="nav-item">
        <Link to="/mmo">MMO</Link>
       </li>
       <li className="nav-item">
        <Link to="/fighting">FIGHTING</Link>
       </li>
       <li className="nav-item">
        <Link to="/strategy">STRATEGY</Link>
       </li>
       <input type="text" placeholder="SEARCH GAME..." value={searchTerm} onChange={onSearchTermChange} />
    </ul>
    </div>
  );
}

export default NavBar;

