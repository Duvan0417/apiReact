import React from 'react';
import './Cart.css';

const Cart = ({ carrito, quitarDelCarrito }) => (
  <div className="cart-container">
    <h3 className="cart-title">Carrito de compras ({carrito.length})</h3>
    {carrito.length === 0 ? (
      <p className="cart-empty">El carrito está vacío.</p>
    ) : (
      <ul className="cart-list">
        {carrito.map(item => (
          <li key={item.id} className="cart-item">
            <span>{item.nombre} <span className="cart-price">${item.precio}</span></span>
            <button className="cart-remove-btn" onClick={() => quitarDelCarrito(item.id)}>
              Quitar
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Cart;