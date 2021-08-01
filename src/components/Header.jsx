import React from "react";
import { View, Text, Image } from "react-native";
import { css } from "../style/style";

export default function Header(){
  return (
    <View style={css.Header}>
      <Image source={require("../../assets/images/logo.jpg")} style={css.Logo} />
    </View>
  )
}
