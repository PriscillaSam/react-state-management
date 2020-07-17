import actions from "../actions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_GRUDGE:
      return {
        past: [state.present, ...state.past],
        present: [action.payload, ...state.present],
        future: []
      };

    case actions.EDIT_GRUDGE: {
      const newPresent = state.present.map(grudge => {
        if (grudge.id === action.payload.id) {
          return { ...grudge, forgiven: !grudge.forgiven };
        }
        return grudge;
      });

      return {
        past: [state.present, ...state.past],
        present: newPresent,
        future: []
      };
    }

    case actions.UNDO: {
      const [newPresent, ...newPast] = state.past;
      return {
        past: newPast,
        present: newPresent,
        future: [state.present, ...state.future]
      };
    }

    case actions.REDO: {
      const [newPresent, ...newFuture] = state.future;

      return {
        past: [state.present, ...state.past],
        present: newPresent,
        future: newFuture
      };
    }

    default:
      return state;
  }
};

export default reducer;
