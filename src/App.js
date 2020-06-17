import React, { useReducer } from "react";
import GrudgeList from "./components/GrudgeList";
import NewGrudge from "./components/NewGrudge";

import grudges from "./utils/grudges";
import reducer from "./reducer";

import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(reducer, grudges);

  return (
    <div className="App">
      <NewGrudge addGrudge={dispatch} />
      <GrudgeList grudges={state} editGrudge={dispatch} />
    </div>
  );
};

export default App;
