import React, { useContext } from "react";
import { View, Text } from "react-native";
import { css } from "../style/style";
import { Banco } from "./Contexto";
export default function Header(){

  const {cliente} = useContext (Banco);

  return (
    <View style={css.Header}>
      <Text style={css.Logo}>Mili</Text>
      <Text>Nome: {cliente.Nome} / Agencia: {cliente.Agencia} / Conta: {cliente.Conta} </Text>
    </View>
  )
}
