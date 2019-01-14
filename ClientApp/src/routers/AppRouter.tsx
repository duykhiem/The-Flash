import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ContactPage from '../components/containers/ContactPage';
import HomePage from '../components/containers/HomePage';
import LoginPage from '../components/containers/LoginPage';
import ManageAccountPage from '../components/containers/ManageAccountPage';
import ProductsPage from '../components/containers/ProductsPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRouter';
import PublicRoute from './PublicRouter';

const AppRouter = () => (
  <BrowserRouter>
      <Switch>
        <PublicRoute path="/" component={HomePage} exact={true} />
        <PublicRoute path="/home" component={HomePage} />
        <PublicRoute path="/products" component={ProductsPage} />
        <PublicRoute path="/contact" component={ContactPage} />
        <PublicRoute path="/login" component={LoginPage} />
        <PrivateRoute path="/manageaccount" component={ManageAccountPage} />
        <Route component={NotFoundPage} />
      </Switch>
  </BrowserRouter>
);

export default AppRouter;