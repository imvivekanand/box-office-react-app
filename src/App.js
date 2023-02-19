import React from 'react';
import { Switch, Route  } from 'react-router';

function App() {
  return (
    <Switch>
      <Route exact={true} path='/'>Homepage</Route>
      <Route exact path='/vivek'>Vivek</Route>
      <Route>404: Page Not Found</Route> {/* Default operation */}
    </Switch>
  );
}

export default App;
