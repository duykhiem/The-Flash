import * as React from 'react';

import Notification from '../components/Notification';
import AppRouter from '../routers/AppRouter';

const App = () => {
  return (
    <div>
      <Notification/>
      <AppRouter/>
    </div>
  );
};

export default App;