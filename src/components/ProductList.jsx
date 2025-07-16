import React, { useEffect, useState } from 'react';
import Card from './Card';
import './ProductList.css';

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para cargar productos desde la API
    const cargarProductos = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Llamada a la API de Fake Store
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Transformar los datos para que coincidan con el formato esperado
        const productosFormateados = data.map(producto => ({
          id: producto.id,
          nombre: producto.title,
          precio: producto.price,
          imagen: producto.image,
          descripcion: producto.description,
          categoria: producto.category
        }));
        
        setProductos(productosFormateados);
      } catch (err) {
        setError(err.message);
        console.error('Error al cargar productos:', err);
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, []);

  // Función para recargar productos
  const recargarProductos = () => {
    setProductos([]);
    setLoading(true);
    setError(null);
    // Volver a ejecutar la carga después de un breve delay
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  if (loading) {
    return (
      <div className="product-list">
        <h2>Lista de Productos</h2>
        <div className="loading">
          <p>Cargando productos desde la API...</p>
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-list">
        <h2>Lista de Productos</h2>
        <div className="error">
          <p>Error al cargar productos: {error}</p>
          <button onClick={recargarProductos} className="retry-btn">
            Intentar de nuevo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      <p>Mostrando {productos.length} productos desde Fake Store API</p>
      
      {productos.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        <div className="product-container">
          {productos.map((producto) => (
            <Card 
              key={producto.id} 
              nombre={producto.nombre} 
              precio={producto.precio}
              imagen={producto.imagen}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;