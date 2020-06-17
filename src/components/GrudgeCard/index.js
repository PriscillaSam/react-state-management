import React from "react";

import "./style.css";

const GrudgeCard = React.memo(props => {
  const handleOnChange = () => {
    props.editGrudge({
      type: "EDIT_GRUDGE",
      payload: { id: props.grudge.id }
    });
  };

  return (
    <div className="GrudgeCard">
      <p className="GrudgeCard-person">{props.grudge.person}</p>
      <p className="GrudgeCard-reason">{props.grudge.reason}</p>
      <label>
        <input
          type="checkbox"
          checked={props.grudge.isForgiven}
          onChange={handleOnChange}
        />
        Forgiven
      </label>
    </div>
  );
});

export default GrudgeCard;
