import React from "react";
import GrudgeCard from "../GrudgeCard";

import "./style.css";

const GrudgeList = props => {
  return (
    <div className="GrudgeList">
      <h1>Grudges - {props.grudges.length}</h1>
      {props.grudges.map(grudge => (
        <GrudgeCard
          grudge={grudge}
          editGrudge={props.editGrudge}
          key={grudge.id}
        />
      ))}
    </div>
  );
};
export default GrudgeList;
