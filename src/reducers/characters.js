import actions from "../actions";

export const initialState = {
  loading: true,
  characters: [],
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.LOADING:
      return initialState;
    case actions.FETCHING_COMPLETED:
      return {
        loading: false,
        characters: action.payload.response,
        error: null
      };
    case actions.FETCHING_ERROR:
      return {
        loading: false,
        characters: [],
        error: action.payload
      };
  }
};

export default reducer;
