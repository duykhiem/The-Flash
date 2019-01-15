import * as React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import ContactPage from '../components/containers/ContactPage';
import Header from '../components/containers/Header';
import HomePage from '../components/containers/HomePage';
import LoginPage from '../components/containers/LoginPage';
import ManageAccountPage from '../components/containers/ManageAccountPage';
import ProductsPage from '../components/containers/ProductsPage';
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFoundPage';
import { history } from '../utils/history';
import PrivateRoute from './PrivateRouter';

const AppRouter = () => (
  <Router history={history} >
    <div>
      <Header />
      <div className="siteWrapper">
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/home" component={HomePage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/manageaccount" component={ManageAccountPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />
    </div>

  </Router>
);

export default AppRouter;