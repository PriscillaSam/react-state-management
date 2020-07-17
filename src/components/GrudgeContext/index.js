import React, { createContext, useReducer, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import grudges from "../../utils/grudges";
import reducer from "../../reducers/grudges";
import actions from "../../actions";

export const GrudgeContext = createContext();

const initialState = {
  past: [],
  present: grudges,
  future: []
};

const GrudgeProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const editGrudge = useCallback(
    id => {
      dispatch({
        type: actions.EDIT_GRUDGE,
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

      dispatch({ type: actions.ADD_GRUDGE, payload: newGrudge });
    },
    [dispatch]
  );

  const undo = useCallback(() => dispatch({ type: actions.UNDO }), [dispatch]);
  const redo = useCallback(() => dispatch({ type: actions.REDO }), [dispatch]);

  const hasPast = state.past.length > 0;
  const hasFuture = state.future.length > 0;

  const value = {
    grudges: state.present,
    addGrudge,
    editGrudge,
    undo,
    redo,
    hasFuture,
    hasPast
  };

  return (
    <GrudgeContext.Provider value={value}>
      {props.children}
    </GrudgeContext.Provider>
  );
};

export default GrudgeProvider;
