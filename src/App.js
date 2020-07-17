import React, { useContext } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import GrudgeList from "./components/GrudgeList";
import NewGrudge from "./components/NewGrudge";

import "./App.css";
import { GrudgeContext } from "./components/GrudgeContext";
import CharactersList from "./components/CharactersList";

const App = () => {
  const { hasPast, hasFuture, undo, redo } = useContext(GrudgeContext);

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
            <NewGrudge />
            <section>
              <button disabled={!hasPast} onClick={undo}>
                Undo
              </button>
              <button disabled={!hasFuture} onClick={redo}>
                Redo
              </button>
            </section>
            <GrudgeList />
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
