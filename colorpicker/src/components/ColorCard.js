import React from 'react';
import './ColorCard.css';
import { Link } from 'react-router-dom';

const ColorCard = ({color}) => {
  return (
    <Link to={`/color/${color.hex}`} className="ColorCard" style={{background: `#${color.hex}`}}>
      <div className="titling">#{color.hex}</div>
    </Link>
  )
}

export default ColorCard;
