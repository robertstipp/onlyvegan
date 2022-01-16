import {
  HANDLE_SEARCH,
  HANDLE_PAGE,
  REMOVE_STORY,
  SET_LOADING,
  STOP_LOADING,
  SET_DATA,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case STOP_LOADING:
      return { ...state, isLoading: false };
    case SET_DATA:
      return {
        ...state,
        recipes: action.payload.recipes,
      };
    default:
      throw new Error(`no matching "${action.type}" action.type`);
  }
};

export default reducer;
