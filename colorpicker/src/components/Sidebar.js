import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';


function randomColor() {
  return '/color/' + Math.random().toString(16).slice(2, 8).toUpperCase();
}

function renderMenuItems() {
  const filterColors = {
    red: '#f00',
    orange: '#FFA500',
    yellow: '#ff0',
    green: '#0f0',
    blue: '#00f',
    purple: '#800080',
    brown: '#A52A2A',
    gray: '#808080'
  };
  return Object.keys(filterColors).map((color) => {
    return  (
      <li key={color}>{color}</li>
    )
  });
}
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Link className="btn" to={randomColor()}>Random Color</Link>
      <ul className="menu">
        {renderMenuItems()}
      </ul>
    </div>
  )
}
export default Sidebar;
