import * as React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <Link to="/">GO HOME!</Link>
    <br/>
    <img src={require('../assets/404.jpg')} />
  </div>
);

export default NotFoundPage;
