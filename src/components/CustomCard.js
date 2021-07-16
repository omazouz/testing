import React from 'react';
import { Card,
         CardTitle,
          CardContent, 
          CardAction, CardButton, CardImage } from 'react-native-cards';
import { ScrollView,View,Image,Text,TouchableOpacity,StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 


const CustomCard =(item)=>{
    const {element}=item
    return (
        <View style={styles.containerStyle} >
          <View style={{flex:1,justifyContent:'center'}}>
            <View style={styles.imageContainerStyle}>
                <Image
                style={styles.imageStyle}
                source={{uri: element.strDrinkThumb}}
                />
            <Text style={styles.titleStyle}>{element.strDrink}</Text>
            </View>
            </View>
            <View style={{justifyContent:'space-between',flex:1,marginTop:10}}>
            <Text style={{fontFamily: 'lucida grande'}}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim            </Text>
            <TouchableOpacity onclick={()=>alert('clicked')}>
                <MaterialIcons style={{borderColor:'red'}} name="favorite" size={50} color="red" /> 
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainerStyle:{
      //  height:'50%',
       flex:1,
      zIndex:1,
    },
   imageStyle:{
     justifyContent:'center',
     alignItems:'center',
     height:'80%',
     borderRadius:20,
      flex:1
    },
    containerStyle:{
       backgroundColor:'white',
      height:'100%',
      borderRadius:20,
      padding:10,
      flexDirection:'column',
      flex:1,
      justifyContent:'space-around',
      // opacity:0.5,
      //  zIndex: 0
    },
    titleStyle:{
      fontSize:20,
      fontWeight:'600',
      marginTop:15
    }
  });
export default CustomCard