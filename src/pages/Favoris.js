import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { connect } from "react-redux";

// import ScreenName from '../components/ScreenName.js'
import { MaterialIcons } from "@expo/vector-icons";
import store from "../redux/store";

import CarouselComponent from "../components/CarouselComponent";

const TabIcon = (props) => (
  <MaterialIcons
    name="favorite-border"
    size={35}
    color={props.focused ? "grey" : "darkgrey"}
  />
);
class Favoris extends React.Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };
  state = {
    DATA: [],
  };
  constructor(props) {
    super(props);
  }
  // async componentDidMount() {
  //   // const { favorisCocktails } = store.getState().DataReucer;
  //   // console.log("axiosuuuuuuuuuu", favorisCocktails);
  //   // this.setState({ DATA: favorisCocktails });
  //   const { favorisCocktails } = this.props;
  // }
  // componentWillReceiveProps() {
  //   const favorisCocktails = store.getState();
  //   const { DATA } = this.state;
  // }

  render() {
    // const favorisCocktails = store.getState();
    // // console.log("daata", store.getState());
    // this.setState({ DATA: favorisCocktails });

    // const { DATA } = this.state;
    const { favorisCocktails } = this.props;
    console.log("tttt", favorisCocktails);
    return (
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            height: 40,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "800", fontSize: 20 }}>
            Favorites Cocktails
          </Text>
        </View>
        <View flex={1}>
          <CarouselComponent DATA={favorisCocktails} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // borderRadius:50,
    paddingTop: 60,
    flexDirection: "column",
    // paddingBottom:25,
    // paddingHorizontal:5,
  },
});
// const mapStateToProps = ({
//   FavorisReducer
// })=>{
//   const
// }
const mapStateToProps = ({ DataReducer }) => {
  const { allCocktails, favorisCocktails } = DataReducer;
  return { allCocktails, favorisCocktails };
};
export default connect(mapStateToProps, {})(Favoris);
