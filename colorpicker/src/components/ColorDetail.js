import React from 'react';
import ColorCard from './ColorCard';
import { Link } from 'react-router-dom';

function shadeColor(color, percent) {
  const f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
  return (0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

function renderShades(hex) {
  const shadeValues = [-.5, -.3, -.1, .3];
  const result = [];
  for (var value of shadeValues) {
    result.push(shadeColor('#' + hex, value));
  }
  return result.map( (color) => {
    return (
      <div key={color} className="col-xs-6 col-sm-4 col-md-3">
        <ColorCard colorData={{hex: `${color}`}} />
      </div>
    )
  });
}

const ColorDetail = (props) => {
  return (
    <div className="ColorDetail row">
      <div className="col-xs-12 primary">
        <ColorCard colorData={{hex: `${props.match.params.id}`}} />
      </div>
      {renderShades(props.match.params.id)}
      <div className="col-xs-12 actions">
        <Link className="btn" to="/">Clear</Link>
      </div>
    </div>
  )
}

export default ColorDetail;
