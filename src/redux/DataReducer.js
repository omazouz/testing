const INITIAL_STATE = {
  allCocktails: [],
  favorisCocktails: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, allCocktails: action.payload };
    case "TOGGLE_FAVORIS":
      return {
        ...state,
        favorisCocktails: [...state.favorisCocktails, action.payload],
      };
    
    default:
      return state;
  }
};
