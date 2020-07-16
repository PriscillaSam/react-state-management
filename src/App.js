import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import GrudgeList from "./components/GrudgeList";
import NewGrudge from "./components/NewGrudge";

import "./App.css";
import GrudgeProvider from "./components/GrudgeContext";
import CharactersList from "./components/CharactersList";

const App = () => {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Grudges</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <GrudgeProvider>
              <NewGrudge />
              <GrudgeList />
            </GrudgeProvider>
          </Route>
          <Route path="/characters">
            <CharactersList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
