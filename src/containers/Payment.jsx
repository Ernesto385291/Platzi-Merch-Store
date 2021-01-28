import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button';
import { useHistory } from 'react-router-dom';

import '../styles/components/Payment.css';

export const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const history = useHistory();

  console.log(state);
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status == 'COMPLETED') {
      const newOrder = {
        buyer,
        products: state.cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {state.cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={{
              clientId:
                'AWz5qTFdU_MM9vgSm_5RkpaaJWWHDuL9Hl_1UTs0RDO9l3khuu5ZctlSNuj2layaPo0MJG57o3ErOtQp',
              intent: 'capture',
              currency: 'USD',
            }}
            buttonStyles={{ layout: 'vertical', shape: 'rect' }}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(cancel) => console.log(cancel)}
          />
        </div>
      </div>
    </div>
  );
};
