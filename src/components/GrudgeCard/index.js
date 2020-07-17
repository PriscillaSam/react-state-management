import React from "react";

import "./style.css";
import { GrudgeContext } from "../GrudgeContext";

const GrudgeCard = props => {
  const { editGrudge } = React.useContext(GrudgeContext);

  const handleOnChange = () => editGrudge(props.grudge.id);

  return (
    <div className="GrudgeCard">
      <p className="GrudgeCard-person">{props.grudge.person}</p>
      <p className="GrudgeCard-reason">{props.grudge.reason}</p>
      <label>
        <input
          type="checkbox"
          checked={props.grudge.forgiven}
          onChange={handleOnChange}
        />
        Forgiven
      </label>
    </div>
  );
};

export default GrudgeCard;
