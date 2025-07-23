import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ carrito, quitarDelCarrito }) => {
  return <Cart carrito={carrito} quitarDelCarrito={quitarDelCarrito} />;
};

export default CartPage;