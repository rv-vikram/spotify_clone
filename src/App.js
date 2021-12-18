
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Login } from './components/signupnavbar';
import { Homepage } from './components/Homepage';
import { useEffect, useState } from 'react';

import {Debouncing} from './components/Search'
import {Tracks} from './components/tracks'
import { Artist } from "./components/Artist/Artist";
import { Playlist } from './components/Artist/playlis';
function App() {
  const [whole] = useState('whole')
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
     <Route exact path='/debounce'>
      <Debouncing/>
      </Route>

      <Route exact path='/debounce/:id'>
        <Tracks/>
      </Route>

    </Switch>
  );
}

export default App;
