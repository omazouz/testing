// import { StatusBar } from 'expo-status-bar';
import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { StyleSheet, Text, View } from "react-native";
import { Provider, connect } from "react-redux";
import store from "./src/redux/store";
import { createAppContainer } from "react-navigation";
// import CarouselComponent from './src/components/CarouselComponent';
// import Carousel from 'react-native-snap-carousel';

const App = createAppContainer(AppNavigator);
export default function wrapped() {
  return (
    <Provider store={store}>
      <View flex={1}>
        <App />
      </View>
    </Provider>
  );
}

