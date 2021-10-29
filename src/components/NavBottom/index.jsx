import React from "react";
import { View, Image } from "react-native";

const NavBottom = () => {
  return (
    <View
    style={{
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
    }}
  >
    <Image source={require("../../../assets/1.png")} />
    <Image source={require("../../../assets/2.png")} />
    <Image source={require("../../../assets/3.png")} />
    <Image source={require("../../../assets/4.png")} />
  </View>
  )
}

export default NavBottom;
