import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { onChange, set } from "react-native-reanimated";
import store from "../redux/store";
import { connect } from "react-redux";
import { addToFavoris } from "../redux/DataAction";

const CustomCard = (item) => {
  const { element } = item;
  const [favoris, setFavoris] = useState(null);

  const onToggleFavoris = async () => {
    element.favoris = true;
    await store.dispatch(addToFavoris(element));
    setFavoris(element.favoris);
  };

  // const onRemoveFavoris = async () => {
  //   element.favoris = false;
  //   await store.dispatch({
  //     type: "DELETE_FAVORIS",
  //     payload: element,
  //   });
  //   setFavoris(element.favoris);
  // };

  return (
    <View style={styles.containerStyle}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={styles.imageContainerStyle}>
          <Image
            style={styles.imageStyle}
            source={{ uri: element.strDrinkThumb }}
          />
          <Text style={styles.titleStyle}>{element.strDrink}</Text>
        </View>
      </View>
      <View style={{ justifyContent: "space-between", flex: 1, marginTop: 10 }}>
        <Text style={{}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
          nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
          sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae,
          consequat in, pretium a, enim. Pellentesque congue. Ut in risus
          volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
          Praesent egestas leo in pede. Praesent blandit odio eu enim{" "}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            disabled={favoris || element.favoris}
            onPress={() => onToggleFavoris()}
          >
            <MaterialIcons
              name="favorite"
              size={50}
              color={element.favoris ? "red" : "silver"}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity
            // disabled={!(!element.favoris && !favoris)}
            onPress={() => onRemoveFavoris()}
          >
            <AntDesign name="closecircleo" size={45} color="silver" />
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainerStyle: {
    flex: 1,
    zIndex: 1,
  },
  imageStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    borderRadius: 20,
    flex: 1,
  },
  containerStyle: {
    backgroundColor: "white",
    height: "100%",
    borderRadius: 20,
    padding: 10,
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-around",
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 15,
  },
});

export default connect(addToFavoris)(CustomCard);
