import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: '#333', padding: '10px', color: '#fff' }}>
      <Link to="/" style={{ marginRight: '10px', color: 'white' }}>Inicio</Link>
      <Link to="/productos" style={{ marginRight: '10px', color: 'white' }}>Productos</Link>
      <Link to="/carrito" style={{ color: 'white' }}>Carrito</Link>
    </nav>
  );
};

export default Navbar;
