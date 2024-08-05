import React , {useContext} from 'react';
import './ProductCard.css';
import { useAuth } from '../../context/AuthContext';
import { ProductsContext } from '../../context/ProductsContext';
import Button from '../Button/Button';

const ProductCard = ({ product }) => {
    const { user } = useAuth();
    const { deleteProduct } = useContext(ProductsContext);
  
    const { image, name, description, price } = product;

    const handleDelete = (e) => {
      e.stopPropagation();
      deleteProduct(product.name);
    };
  
    return (
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          {user.role === 'admin' || user.role === 'employee' && (
            <Button onClick={handleDelete} variant="delete">
              Eliminar
            </Button>
          )}
        </div>
      </div>
    );
  };
  
  export default ProductCard;