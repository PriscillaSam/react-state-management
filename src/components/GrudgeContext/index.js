import React, { createContext, useReducer, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import grudges from "../../utils/grudges";
import reducer from "../../reducers/grudges";

export const GrudgeContext = createContext();

const GrudgeProvider = props => {
  const [state, dispatch] = useReducer(reducer, grudges);

  const editGrudge = useCallback(
    id => {
      dispatch({
        type: "EDIT_GRUDGE",
        payload: { id }
      });
    },
    [dispatch]
  );

  const addGrudge = useCallback(
    ({ person, reason }) => {
      const newGrudge = {
        id: uuidv4(),
        person,
        reason,
        forgiven: false
      };

      dispatch({ type: "ADD_GRUDGE", payload: newGrudge });
    },
    [dispatch]
  );

  const value = { grudges: state, addGrudge, editGrudge };

  return (
    <GrudgeContext.Provider value={value}>
      {props.children}
    </GrudgeContext.Provider>
  );
};

export default GrudgeProvider;
