import React from 'react';
import './Card.css';

const Card = ({ nombre, precio, imagen, onAgregar }) => {
  return (
    <div className="card">
      <h3>{nombre}</h3>
      {imagen && <img src={imagen} alt={nombre} className="card-img" />}
      <p>Precio: ${precio}</p>
      <button onClick={onAgregar} style={{ marginTop: '8px' }}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Card;
