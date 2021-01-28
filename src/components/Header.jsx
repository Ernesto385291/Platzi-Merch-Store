import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';
import '../styles/components/Header.css';

export const Header = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <FaShoppingCart />
        </Link>
        {state.cart.length > 0 && (
          <div className="Header-alert">({state.cart.length})</div>
        )}
      </div>
    </div>
  );
};
