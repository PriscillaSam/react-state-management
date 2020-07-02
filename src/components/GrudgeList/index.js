import React from "react";
import GrudgeCard from "../GrudgeCard";

import { GrudgeContext } from "../GrudgeContext";
import "./style.css";

const GrudgeList = () => {
  const { grudges } = React.useContext(GrudgeContext);

  return (
    <div className="GrudgeList">
      <h1>Grudges - {grudges.length}</h1>
      {grudges.map(grudge => (
        <GrudgeCard grudge={grudge} key={grudge.id} />
      ))}
    </div>
  );
};

export default GrudgeList;
