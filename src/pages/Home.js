import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomCard from "../components/CustomCard";
import CarouselComponent from "../components/CarouselComponent";
import * as axios from "axios";
import store from "../redux/store";
import { connect } from "react-redux";
const TabIcon = (props) => (
  <Ionicons
    name={"md-home"}
    size={35}
    color={props.focused ? "grey" : "darkgrey"}
  />
);

class Home extends React.Component {
  // we won't need to configure navigationOptions just yet
  state = {
    DATA: [],
  };
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    await axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then(async (response) => {
        // console.log("success");
        await store.dispatch({
          type: "FETCH_DATA",
          payload: response.data.drinks,
        });
        this.setState({ DATA: response.data.drinks });
      })
      .catch(function (error) {
        // console.log("error");
      });
  }
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  render() {
    // const { DATA } = this.state;
    const { allCocktails } = this.props;
    // console.log('HOME',DATA)
    return (
      <View style={styles.container}>
        <View
          style={{
            // backgroundColor: "yellow",
            width: "100%",
            alignItems: "center",
            height: 40,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "800", fontSize: 20 }}>Cocktails</Text>
        </View>
        <View flex={1}>
          <CarouselComponent DATA={allCocktails} />
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

const mapStateToProps = ({ DataReducer }) => {
  const { allCocktails, favorisCocktails } = DataReducer;
  return { allCocktails, favorisCocktails };
};
export default connect(mapStateToProps, {})(Home);
