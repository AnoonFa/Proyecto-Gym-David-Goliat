import React, { useState, useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { setFilteredProducts, products } = useContext(ProductsContext);

  const handleSearch = () => {
    setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(query.toLowerCase())));
  };

  return ( 
  <>
 <center> <h2>Buscar Productos</h2></center>
 <br/>
    <div className="search-bar">
     
      <input
        type="text"
        placeholder="Buscar productos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div></>
  );
};

export default SearchBar;