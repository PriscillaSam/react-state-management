import React, { useState } from "react";

import { GrudgeContext } from "../GrudgeContext";

import "./style.css";

const NewGrudge = React.memo(props => {
  const [person, setPerson] = useState("");
  const [reason, setReason] = useState("");
  const { addGrudge } = React.useContext(GrudgeContext);

  const handleSetPerson = event => setPerson(event.target.value);
  const handleSetReason = event => setReason(event.target.value);
  const handleSubmit = () => addGrudge({ person, reason });

  return (
    <div className="NewGrudge">
      <input
        type="text"
        value={person}
        onChange={handleSetPerson}
        placeholder="Person"
      />
      <input
        type="text"
        value={reason}
        onChange={handleSetReason}
        placeholder="Reason"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={!(person && reason)}
      >
        Add Grudge
      </button>
    </div>
  );
});

export default NewGrudge;
