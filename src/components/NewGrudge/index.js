import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./style.css";

const NewGrudge = React.memo(props => {
  const [person, setPerson] = useState("");
  const [reason, setReason] = useState("");

  const handleSetPerson = event => setPerson(event.target.value);
  const handleSetReason = event => setReason(event.target.value);
  const handleSubmit = () => {
    const newGrudge = {
      id: uuidv4(),
      person,
      reason,
      forgiven: false
    };

    props.addGrudge({ type: "ADD_GRUDGE", payload: newGrudge });
  };

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
