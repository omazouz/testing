import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TabIcon = (props) => (
    <Ionicons
      name={'md-home'}
      size={35}
      color={props.focused ? 'grey' : 'darkgrey'}
    />
  )


export default class Home extends React.Component {

  // we won't need to configure navigationOptions just yet
  static navigationOptions = {
    tabBarIcon: TabIcon

  };

  render() {
    return (
      <View style={styles.container}>
          <Text>HOME</Text>
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