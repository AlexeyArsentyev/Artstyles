import React from 'react';
import './Card.css';

const Card = ({ header, text, img, url }) => {
  function getRandomColor() {
    var letters = '6789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

  const accentColor = getRandomColor();

  return (
    <div
      className="card"
      style={{
        filter: `drop-shadow(0 0 0.7rem ${accentColor})`,
        outline: `${accentColor} 3px solid`,
      }}
      // style={{ boxShadow: `${accentColor}  0 0 3rem`, outline: `${accentColor} 3px solid` }}
    >
      <h3>{header}</h3>
      <img src={img} alt={header} />
    </div>
  );
};

export default Card;
