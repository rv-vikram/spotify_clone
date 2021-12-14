
import './App.css';
import {Switch,Route} from 'react-router-dom'
import { Login } from './components/Login';

import { Dashboard } from './components/Dashboard';
function App() {
 
  return (
    <Switch>
      <Route exact path={'/'}>
    <Login/>

      </Route>
<Route to='/dashboard'>
 <Dashboard/>
</Route>

    </Switch>
  );
}

export default App;
