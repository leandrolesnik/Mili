import React from 'react';
import { View, Text, StatusBar } from "react-native";
import Header from "./src/components/Header";
import Contexto from "./src/components/Contexto";
import Home from "./src/components/Home";
import { css } from "./src/style/style";
// #734D1F
// #A67C49
// #D9C8B4
// #401E01
// #658CBF

export default function App() {
  return (
    <View style={css.Container}>
      <Header />
      <StatusBar/>
      <Text>HOME</Text>
      {/* <Contexto /> */}
      <Home />
    </View>
  )
}

