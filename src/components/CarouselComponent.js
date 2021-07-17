import React, { Component } from "react";
import { ImageBackground, SafeAreaView, TextInput } from "react-native";

import Carousel from "react-native-snap-carousel";

import CustomCard from "./CustomCard";

export default class CarouselComponent extends Component {
  state = {
    DATA: [],
    backGroundImage: null,
    inputValue: null,
    dataSearch: null,
  };

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item }) {
    this.setState({ backGroundImage: item.strDrinkThumb });
    return <CustomCard element={item} />;
  }
  async onSraech(e) {
    let dataFiltered = [];
    this.setState({ inputValue: e });
    await this.props.DATA.filter((el) => {
      el.strDrink.toLowerCase().indexOf(e.toLowerCase()) >= 0 &&
        dataFiltered.push(el);
    });
    this.setState({ dataSearch: dataFiltered });
  }

  render() {
    const { DATA } = this.props;
    const { backGroundImage, inputValue, dataSearch } = this.state;
    // console.log("dataseaaa", dataSearch);
    return (
      <ImageBackground
        style={{ paddingVertical: 10 }}
        source={{ uri: backGroundImage }}
      >
        <SafeAreaView
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginBottom: 10,
            marginRight: 40,
            justifyContent: "flex-end",
          }}
        >
          <TextInput
            style={{
              color: "black",
              backgroundColor: "silver",
              opacity: 0.8,
              height: 40,
              width: "60%",
              borderRadius: "50%",
              fontWeight: "600",
              marginRight: 5,
              fontSize: 20,
            }}
            onChangeText={(e) => this.onSraech(e)}
            value={inputValue}
            placeholder="  Search"
          ></TextInput>
        </SafeAreaView>
        <Carousel
          ref={(c) => (this.carousel = c)}
          data={dataSearch && dataSearch.length > 0 ? dataSearch : DATA}
          renderItem={this._renderItem}
          layout={"default"}
          sliderHeight={300}
          itemWidth={300}
          sliderWidth={500}
          sliderHeight={500}
        />
      </ImageBackground>
    );
  }
}
