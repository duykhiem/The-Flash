import { combineReducers } from 'redux';

import application from './application-reducer';
import authentication from './authentication-reducer';
import cart from './cart-reducer';
import product from './product-reducer';

const rootReducer = combineReducers({
  application,
  authentication,
  cart,
  product
});

export default rootReducer;