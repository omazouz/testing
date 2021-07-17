import { createBottomTabNavigator } from "react-navigation-tabs";

import Home from "../pages/Home";
import Favoris from "../pages/Favoris";

const BottomTabNavigator = createBottomTabNavigator(
  {
    One: Home,
    Two: Favoris,
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
  }
);

export default BottomTabNavigator;
