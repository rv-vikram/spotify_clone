
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Login } from './components/signupnavbar';
import { Homepage } from './components/Homepage';
import { useEffect, useState } from 'react';
import { Dashboard } from './components/Dashboard';

import { Artist } from "./components/Artist/Artist";
function App() {
  const [whole, setwhole] = useState('whole')
  useEffect(() => {
    document.documentElement.className = whole;
  }, [whole]);


  return (
    <Switch>
      <Route exact path={'/'}>
        <Login/>
      </Route>

      {/* <Route exact to='/dashboard'>
        <Homepage/>
      </Route> */}
      <Route  to='/artist'>
        <Artist />
      </Route> 
     {/* <Route  to='/dashboard'>
        <Dashboard />
      </Route> */}

    </Switch>
  );
}

export default App;
