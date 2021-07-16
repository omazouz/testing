// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
 import { StyleSheet, Text, View } from 'react-native'; 
// import CarouselComponent from './src/components/CarouselComponent';
// import Carousel from 'react-native-snap-carousel';

export default function App() {
  return (
    <View flex={1}>
    <AppNavigator/>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection:'column',
//     backgroundColor: '#fff',
//      alignItems: 'center',
//     // justifyContent: 'center',
//     paddingTop:80
//   },
// });
////////
// export default class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       entries: [
//         { title: 'hello' },
//         { title: 'world' },],
//     }
//   }
//   _renderItem ({item, index}) {
//     return (
//       <View style={styles.slide}>
//           <Text style={styles.title}>{ item.title }</Text>
//       </View>
//   );}

//   render () {
//     return (
//       <Carousel
//         ref={(c) => { this._carousel = c; }}
//         data={this.state.entries}
//         renderItem={this._renderItem}
//         sliderWidth={150}
//         itemWidth={100}
//       />
//  ); 
// }}