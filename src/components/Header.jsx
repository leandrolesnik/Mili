import React from "react";
import { View, Text } from "react-native";
import { css } from "../style/style";

export default function Header(){

  return (
    <View style={css.Header}>
      <Text style={css.Logo}>Mili</Text>
    </View>
  )
}
