import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import Header from '../components/containers/Header';
import Footer from '../components/Footer';
import { StoreState } from '../state';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ?
          <Redirect to="/home" />
          :
          <div>
            <Header />
            <Component {...props} />
            <Footer />
          </div>
      }
    />
  );

const mapStateToProps = (state: StoreState) => {
  return {
    isAuthenticated: !!state.authentication.userId
  };
};

export default connect(mapStateToProps)(PublicRoute);
