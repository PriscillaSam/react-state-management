import actions from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_GRUDGE:
      return [action.payload, ...state];

    case actions.EDIT_GRUDGE: {
      return state.map(grudge => {
        if (grudge.id === action.payload.id) {
          return { ...grudge, forgiven: !grudge.forgiven };
        }
        return grudge;
      });
    }

    default:
      return state;
  }
};

export default reducer;
