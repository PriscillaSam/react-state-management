import React from "react";
import GrudgeList from "./components/GrudgeList";
import NewGrudge from "./components/NewGrudge";

import "./App.css";
import GrudgeProvider from "./components/GrudgeContext";

const App = () => {
  return (
    <div className="App">
      <GrudgeProvider>
        <NewGrudge />
        <GrudgeList />
      </GrudgeProvider>
    </div>
  );
};

export default App;
