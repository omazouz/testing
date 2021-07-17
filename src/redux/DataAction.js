export const addToFavoris = (cocktail) => {
  return {
    type: "TOGGLE_FAVORIS",
    payload: cocktail,
  };
};
export const removeFavoris = (cocktail) => {
  return {
    type: "",
    payload: cocktail,
  };
};
