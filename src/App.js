import React from 'react';
import { Switch, Route  } from 'react-router';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <Switch>
      <Route exact={true} path='/'><Home/></Route>
      <Route exact path='/starred'><Starred/></Route>
      <Route><div>404: Page Not Found</div></Route> {/* Default operation */}
    </Switch>

  );
}

export default App;
