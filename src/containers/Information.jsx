import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/components/Information.css';
import { AppContext } from '../context/AppContext';

export const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);

  const form = useRef(null);
  const history = useHistory();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('adress'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre completo"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Correo Electronico"
            />
            <input
              type="text"
              name="adress"
              id="adress"
              placeholder="Dirección"
            />
            <input type="text" name="apto" id="apto" placeholder="Apto" />
            <input type="text" name="city" id="city" placeholder="Ciudad" />
            <input type="text" name="country" id="country" placeholder="Pais" />
            <input type="text" name="state" id="state" placeholder="Estado" />
            <input type="text" name="cp" id="cp" placeholder="Codigo Postal" />
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="Telefono"
            />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button onClick={handleSubmit} type="button">
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <div>Pedido:</div>
        {state.cart.map((item) => {
          return (
            <div className="Information-item" key={item.id}>
              <div className="Information-element">
                <h4>{item.title}</h4> <span>${item.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
