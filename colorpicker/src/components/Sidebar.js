import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function randomColor() {
  return '/color/' + Math.random().toString(16).slice(2, 8).toUpperCase();
}
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Link className="btn" to={randomColor()}>Random Color</Link>
      <ul className="menu">
        <li>Red</li>
        <li>Orange</li>
        <li>Yellow</li>
        <li>Green</li>
        <li>Blue</li>
        <li>Purple</li>
        <li>Brown</li>
        <li>Gray</li>
      </ul>
    </div>
  )
}
export default Sidebar;
