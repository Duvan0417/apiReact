import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/CartPage';

const App = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const quitarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products onAgregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/carrito" element={<CartPage carrito={carrito} quitarDelCarrito={quitarDelCarrito} />} />
      </Routes>
    </>
  );
};

export default App;
