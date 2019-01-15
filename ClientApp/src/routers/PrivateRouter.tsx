import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { StoreState } from '../state';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ?
          <Component {...props} />
          :
          <Redirect to="/login" />
      }
    />
  );

const mapStateToProps = (state: StoreState) => {
    return {
        isAuthenticated: !!state.authentication.currentUser
  };
};

export default connect(mapStateToProps)(PrivateRoute);
