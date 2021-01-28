import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import { AppContext } from '../context/AppContext';
import '../styles/components/Checkout.css';

export const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>
          {state.cart.length
            ? 'Lista de Pedidos:'
            : 'No hay productos en tu carrito'}
        </h3>
        {state.cart.map((item) => {
          return (
            <div key={item.id} className="Checkout-item">
              <div className="Checkout-element">
                <h4>{item.title}</h4> <span>${item.price}</span>
              </div>
              <button type="button" onClick={() => handleRemove()}>
                <FiTrash2 />
              </button>
            </div>
          );
        })}
      </div>
      {state.cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total: {handleSumTotal()}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};
