import React from 'react';
import './ColorCard.css';
import { Link } from 'react-router-dom';

const ColorCard = ({colorData}) => {
  return (
    <Link to={`/color/${colorData.hex}`} className="ColorCard" style={{background: `#${colorData.hex}`}}>
      <div className="titling">#{colorData.hex}</div>
    </Link>
  )
}

export default ColorCard;
