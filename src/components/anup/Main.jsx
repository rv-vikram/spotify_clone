import React from "react";
// import Categories from './Categories'
import { Categories } from "./Categories";
import { Switch, Route } from "react-router-dom";
// import PlaylistPage from './pages/Playlist'
import { PlaylistPage } from "./Playlist";

export const Main = () => {
  return (
    <div className="main">
      <div className="upperNav">
        <button className="signup"> sign up</button>
        <button className="login"> Login</button>
      </div>
      <div className="mainContent">
        {/* <Switch>
          <Route path="/" exact component={Categories}></Route>
          <Route path="/search">Search</Route>
          <Route path="/your-library">Your library</Route>
          <Route path="/playlist/:id" component={PlaylistPage}></Route>
        </Switch> */}
        <Categories />
        {/* <PlaylistPage /> */}
      </div>
    </div>
  );
};
