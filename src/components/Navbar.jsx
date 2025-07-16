import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: '#333', padding: '10px', color: '#fff' }}>
      <Link to="/" style={{ marginRight: '10px', color: 'white' }}>Inicio</Link>
      <Link to="/productos" style={{ color: 'white' }}>Productos</Link>
    </nav>
  );
};

export default Navbar;
