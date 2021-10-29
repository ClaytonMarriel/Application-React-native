import React from "react";
import { View } from "react-native";

import styles from "./styles";

import Maps from "../../components/Maps";
import ButtonTraining from "../../components/Buttons";
import NavBottom from "../../components/NavBottom";
//paddingTop: getStatusBarHeight() + 200,

const Home = () => (
  <View style={styles.container}>
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    ></View>
    <View style={{ flex: 5, marginTop: 50 }}>
      <Maps />
    </View>
    <View style={{ flex: 1, backgroundColor: "white", paddingTop:10 }}>
      <NavBottom />
      <ButtonTraining />
    </View>
  </View>
);

Home.navigationOptions = {
  title: "Home",
};

Home.navigationOptions = {
  title: "About",
};

export default Home;
