  import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

// import ScreenName from '../components/ScreenName.js'
import { MaterialIcons } from '@expo/vector-icons'; 

const TabIcon = (props) => (
    <MaterialIcons 
        name="favorite-border" 
        size={35}
        color={props.focused ? 'grey' : 'darkgrey'}
    />
  )
export default class Favoris extends React.Component {

  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Favoris</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
