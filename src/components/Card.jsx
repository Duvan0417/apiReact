import React from 'react';
import './Card.css';

const Card = ({ nombre, precio, imagen }) => {
  return (
    <div className="card">
      <h3>{nombre}</h3>
      {imagen && <img src={imagen} alt={nombre} className="card-img" />}
      <p>Precio: ${precio}</p>
    </div>
  );
};

export default Card;
