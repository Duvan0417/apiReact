import React, { useEffect, useState } from 'react';
import Card from './Card';
import './ProductList.css';

const ProductList = ({ onAgregarAlCarrito }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
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

  const recargarProductos = () => {
    setProductos([]);
    setLoading(true);
    setError(null);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(search.toLowerCase())
  );

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
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: '20px', padding: '8px', width: '100%', maxWidth: '400px' }}
      />
      <p>Mostrando {productosFiltrados.length} productos desde Fake Store API</p>
      {productosFiltrados.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        <div className="product-container">
          {productosFiltrados.map((producto) => (
            <Card
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
              onAgregar={() => onAgregarAlCarrito(producto)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;