import { combineReducers } from 'redux';

import application from './application-reducer';
import authentication from './authentication-reducer';

const rootReducer = combineReducers({
  application,
  authentication
});

export default rootReducer;