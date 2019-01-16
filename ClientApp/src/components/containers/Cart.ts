import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { removeItem } from '../../actions/cart-action';
import { syncQuantity } from '../../actions/product-action';

import ProductModel from '../../models/product-model';
import { StoreState } from '../../state';
import Cart, { CartProps, CartDispatchProps } from '../Cart';

const mapStateToProps = (state: StoreState): CartProps  => {
  return {
      cartItems: state.cart.items
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): CartDispatchProps  => {
  return {
    removeFromCart: (item: ProductModel) => dispatch(removeItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);