import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet,ImageBackground, SafeAreaView, TextInput } from 'react-native';
import { MaterialIcons,FontAwesome } from '@expo/vector-icons'; 
import * as axios from 'axios';
// import { FontAwesome } from 'react-native-elements';

import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json

// import { scrollInterpolator, animatedStyles } from './utils/animations';
import CustomCard from './CustomCard';
import { back } from 'react-native/Libraries/Animated/src/Easing';
import { Feather } from '@expo/vector-icons'; 

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const DATA = axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
                  .then( (response)=>   response.data.drinks)
                  .catch(function (error) {
                    
                  });;
// for (let i = 0; i < 10; i++) {
//   DATA.push(i)
// }
console.log('DAAAATA',DATA)

export default class CarouselComponent extends Component {
  
  state = {
    DATA: [],
    backGroundImage:null,
    inputValue:null
  }

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this)
  }
  componentDidMount(){
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
                  .then( (response)=>   this.setState({DATA:response.data.drinks}))
                  .catch(function (error) {
                    console.log('eror')
                  });;
  }
  _renderItem({ item }) {
    // console.log('backgorrr',item.strDrinkThumb)
   this.setState({backGroundImage:item.strDrinkThumb})
    return (
      <CustomCard element={item}/>
    )
  }
  
  render() {
    const {DATA,backGroundImage,inputValue}=this.state
   
    return (
      <ImageBackground style={{paddingVertical:10}} source={{uri: backGroundImage}} >
        <SafeAreaView style={{alignItems:'center',flexDirection:'row',marginBottom:10,marginRight:40,justifyContent:'flex-end'}}>
        
      <TextInput
        // style={styles.input}
        style={{borderColor:'red',color:'black',
        
        backgroundColor:'silver',opacity:0.8
        ,height:40,width:'60%',
        borderRadius:'50%',
        fontWeight:'600',
        marginRight:5,
        fontSize:20}}
         onChangeText={(e)=>this.setState({inputValue:e})}
        value={inputValue}
        placeholder="  useless placeholder"
        
      >
        <FontAwesome name="search" size={30} color="grey"  />  
        </TextInput>
      
        </SafeAreaView>
       <Carousel 
       ref={(c) => this.carousel = c}
       data={DATA}
       renderItem={this._renderItem}
       layout={'default'} 
        sliderHeight={300} 
        itemWidth={300} 
        sliderWidth={500}
        sliderHeight={500}
         />
        {/* <Text style={styles.counter}
        >
          {this.state.index}
        </Text> */}
      </ImageBackground>
    );
  }
}

