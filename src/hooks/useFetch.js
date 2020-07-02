import { useEffect, useReducer } from "react";
import actions from "../actions";

const useFetch = (url, reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: actions.LOADING });
    (async () => {
      try {
        let response = await fetch(url);
        response = await response.json();
        dispatch({ type: actions.FETCHING_COMPLETED, payload: { response } });
      } catch (error) {
        dispatch({ type: actions.FETCHING_ERROR, payload: { error } });
      }
    })();
  }, []);

  return state;
};

export default useFetch;
