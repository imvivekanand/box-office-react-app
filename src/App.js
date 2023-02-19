import React from 'react';
import { Switch, Route  } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <div>
    <Navbar/>

    <Switch>
      <Route exact={true} path='/'><Home/></Route>
      <Route exact path='/vivek'>Vivek</Route>
      <Route exact path='/starred'><Starred/></Route>
      <Route><div>404: Page Not Found</div></Route> {/* Default operation */}
    </Switch>
    </div>
  );
}

export default App;
