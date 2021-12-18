
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Login } from './components/signupnavbar';
import { Homepage } from './components/Homepage';
import { useEffect, useState } from 'react';
import { Dashboard } from './components/Dashboard';

import { Artist } from "./components/Artist/Artist";
import { Playlist } from './components/Artist/playlis';
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

      <Route exact path='/dashboard'>
        <Homepage/>
      </Route>
      <Route exact path={`/artist/:id`}>
        <Artist />
      </Route> 

      <Route path={`/Playlist/:id`}>
        <Playlist/>
      </Route>
     {/* <Route  path='/dashboard/audio'>
        <Dashboard />
      </Route> */}

    </Switch>
  );
}

export default App;
