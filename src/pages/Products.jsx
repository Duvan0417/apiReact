import React from 'react';
import ProductList from '../components/ProductList';

const Products = ({ onAgregarAlCarrito }) => {
  return (
    <>
      <ProductList onAgregarAlCarrito={onAgregarAlCarrito} />
    </>
  );
};

export default Products;
