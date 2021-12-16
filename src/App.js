
import './App.css';
import {Switch,Route} from 'react-router-dom'
import { Login } from './components/signupnavbar';
import { Homepage1 } from './components/Homepage1';
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
        <Homepage1/>
      </Route>

    </Switch>
  );
}

export default App;
