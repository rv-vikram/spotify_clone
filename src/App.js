
import './App.css';
import {Switch,Route} from 'react-router-dom'
import { Login } from './components/signupnavbar';
import { Homepage } from './components/Homepage';
import { useEffect, useState } from 'react';
import { Dashboard } from './components/Dashboard';
function App() {
  const [whole,setwhole]= useState('whole')
  useEffect(()=>{
    document.documentElement.className = whole;
  }, [whole]);
  
 
  return (
    <Switch>
      <Route exact path={'/'}>
        <Login/>
      </Route>

      <Route to='/dashboard'>
        <Homepage/>
      </Route>

    </Switch>
  );
}

export default App;
