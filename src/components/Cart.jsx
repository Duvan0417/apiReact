import React from 'react';

const Cart = ({ carrito, quitarDelCarrito }) => (
  <div style={{ marginTop: '40px' }}>
    <h3>Carrito de compras ({carrito.length})</h3>
    {carrito.length === 0 ? (
      <p>El carrito está vacío.</p>
    ) : (
      <ul>
        {carrito.map(item => (
          <li key={item.id} style={{ marginBottom: '8px' }}>
            {item.nombre} - ${item.precio}
            <button onClick={() => quitarDelCarrito(item.id)} style={{ marginLeft: '10px' }}>
              Quitar
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Cart;