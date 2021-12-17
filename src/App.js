
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Login } from './components/signupnavbar';
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
        <Login />

      </Route>
      <Route to='/artist'>
        <Artist />
      </Route>
      <Route to='/dashboard'>
        <Dashboard />
      </Route>

    </Switch>
  );
}

export default App;


// import "./styles.scss";
// // import {PlaylistPage} from "./components/Playlist"
// import { Nav } from "./components/Anup/Nav";
// import { Main } from "./components/Anup/Main";
// import { PlaylistPage } from "./components/Anup/Playlist";
// import { Playlists } from "./componentsAnup//Playlists";
// import { register } from "./serviceWorker";

// export default function App() {
//   return (
//     <div className="outerWrap">
//       <div className="App">
//         {/* <Nav />
//         <Main /> */}
//         {/* <PlaylistPage /> */}
//         {/* <Playlists />  */}
//         {/* <register />  */}
//       </div>
//       <div className="musicControls">
//         <p>
//           Try Premium free for 3 months. Listen to your music and ad-free.
//           Monthly subscription free applies after. Open only to users who
//           haven’t already tried
//           <br />
//           Premium. Offer excludes Family and Duo plans. Terms and conditions
//           apply.
//         </p>

//         <button className="free">Gets 3 month Free</button>
//       </div>
//     </div>
//   );
// }
