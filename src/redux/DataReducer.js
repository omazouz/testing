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
    // case "DELETE_FAVORIS":
    //   return {
    //     ...state,
    //     favorisCocktails: state.favorisCocktails.filter(
    //       (el) => el.idDrink != action.payload.idDrink
    //     ),
    //   };

    default:
      return state;
  }
};
