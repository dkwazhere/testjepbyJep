import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Collaboration from "./pages/Collaboration";
import Shop from "./pages/Shop";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path ="/" component={Landing} />
        <Route exact path ="/home" component={Home} />
        <Route exact path ="/videos" component={Videos} />
        <Route exact path ="/collaboration" component={Collaboration} />
        <Route exact path ="/shop" component={Shop} />
        </Switch>
      </div>
      </Router>;
export default App;
