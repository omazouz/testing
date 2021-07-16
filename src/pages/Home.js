import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomCard from '../components/CustomCard';
import CarouselComponent from '../components/CarouselComponent';

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
         <View style={{backgroundColor:'yellow',width:'100%',alignItems:'center',height:40,justifyContent:'center'}}>
        <Text>TITLE</Text>
         </View>
         <View flex={1}>
          <CarouselComponent/>
         </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius:50,
    paddingTop:60,
    flexDirection:'column',
    // paddingBottom:25,
    // paddingHorizontal:5,
  },
});