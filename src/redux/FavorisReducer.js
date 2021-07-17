// const INITIAL_STATE = {
//   favorisCocktails: [{ title: "title1", image: "image 1", favoris: true }],
// };

// // let allDrinks = null;
// // async function getAllDrinks() {
// //   await axios
// //     .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
// //     .then(async (response) => {
// //       console.log("success");
// //       await allDrinks.push(response.data.drinks);
// //     })
// //     .catch(function (error) {
// //       console.log("error");
// //       return [];
// //     });
// // }
// // // const allDrinks = getAllDrinks();
// // console.log("tttttt", allDrinks);

// export default (state = [], action) => {
//   switch (action.type) {
//     case "TOGGLE_FAVORIS":
//       return [...state, action.payload];
//     case "DELETE_FAVORIS":
//       return state.filter((el) => el.idDrink != action.payload.idDrink);
//     default:
//       return state;
//   }
// };
