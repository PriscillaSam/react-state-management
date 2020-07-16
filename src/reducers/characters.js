import actions from "../actions";

export const initialState = {
  loading: false,
  characters: [],
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.LOADING:
      return {
        ...state,
        loading: true
      };
    case actions.FETCHING_COMPLETED:
      return {
        loading: false,
        characters: action.payload,
        error: null
      };
    case actions.FETCHING_ERROR:
      return {
        loading: false,
        characters: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
