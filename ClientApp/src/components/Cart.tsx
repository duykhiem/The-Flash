import * as React from 'react';
import ProductModel from '../models/product-model';

export interface CartProps {
  cartItems: Array<ProductModel>;
}

export interface CartDispatchProps {
  removeFromCart: (item: ProductModel) => void;
}

export type Props = CartProps & CartDispatchProps;

const Cart = (props: Props) => {

  let subTotals = [];

  props.cartItems.map((item) => {
    subTotals.push(item.Quantity * item.Price);
  });

  return (
    <div className="cart">
      {props.cartItems.length !== 0 ? (
        <div className="contains-items">
          <h3>Your Cart Summary</h3>

          <div className="cart-overview">
            <div className="item-count">
              <span>Item(s) in cart</span>
              <span className="count-meter">{props.cartItems.length}</span>
            </div>

            <div className="grand-total">
              <span>Total (USD)</span>
              <span className="total-amount">{subTotals.reduce((accumulator, currentValue) => accumulator + currentValue)}</span>
            </div>
          </div>

          <hr />

          <div className="cart-header">
            <div className="cart-item-title">Item</div>
            <div className="cart-quantity-title">Quantity</div>
            <div className="cart-total-title">Total (USD)</div>
          </div>

          {props.cartItems && props.cartItems.map((item, i) => (
            <div className="item-row" key={i}>
              <div className="cart-item-title">{item.Brand}<br />{item.Name}</div>
              <div className="cart-quantity-title">{item.Quantity}</div>
              <div className="cart-total-title">{item.Quantity * item.Price}</div>
              <div className="remove-item" onClick={() => { props.removeFromCart(item); }}>x</div>
            </div>
          ))}
        </div>
      ) : (
          <div className="contains-no-items">
            <h3>Your cart is empty!</h3>
          </div>
        )}
    </div>
  );
};

export default Cart;