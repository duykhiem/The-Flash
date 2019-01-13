import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import Header from '../components/containers/Header';
import Footer from '../components/Footer';
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
          <div>
            <Header />
            <div className="siteWrapper">
              <Component {...props} />
            </div>
            <Footer />
          </div>
          :
          <Redirect to="/login" />
      }
    />
  );

const mapStateToProps = (state: StoreState) => {
  return {
    isAuthenticated: !!state.authentication.userId
  };
};

export default connect(mapStateToProps)(PrivateRoute);
