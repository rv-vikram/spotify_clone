
import './App.css';
import {Switch,Route} from 'react-router-dom'
import { Login } from './components/signupnavbar';
//import { Homepage } from './components/Homepage';
import { useEffect, useState } from 'react';
//import { Dashboard } from './components/Dashboard';
import { Debouncing } from './components/CSS/Debouncing';
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
        <Debouncing/>
      </Route>
    

    </Switch>
  );
}

export default App;
