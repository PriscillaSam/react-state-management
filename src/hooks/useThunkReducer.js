import { useReducer, useCallback } from "react";

const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const thunkDispatch = useCallback(
    action => {
      console.log(action);
      if (typeof action === "function") {
        action(dispatch);
      } else {
        dispatch(action);
      }
    },
    [dispatch]
  );

  return [state, thunkDispatch];
};

export default useThunkReducer;
