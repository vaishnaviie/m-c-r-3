export const initialState = {
  searchItem: "",
};

export const ReducerFunc = (state, action) => {
  switch (action.type) {
    case "SEARCH_ITEM": {
      return {
        ...state,
        searchItem: action.payload,
      };
    }

    default:
      break;
  }
};
