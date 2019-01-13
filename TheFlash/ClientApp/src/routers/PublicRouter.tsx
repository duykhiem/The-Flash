import * as React from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/containers/Header';
import Footer from '../components/Footer';

export const PublicRoute = ({
  component: Component,
  ...rest
}) => (
    <Route
      {...rest}
      component={props =>
        <div>
          <Header />
          <div className="siteWrapper">
            <Component {...props} />
          </div>
          <Footer />
        </div>
      }
    />
  );

export default PublicRoute;
