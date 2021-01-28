import React, { useContext } from 'react';
import { Product } from './Product';
import '../styles/components/Products.css';

import { AppContext } from '../context/AppContext';

export const Products = () => {
  const { state, addToCart } = useContext(AppContext);

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <div className="Products-items">
      {state.products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        );
      })}
    </div>
  );
};
