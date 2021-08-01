import React, {useContext} from "react";
import { View, Text } from "react-native";
import { Banco } from "./Contexto";

export default function Home(){

  const {cliente} = useContext(Banco);

  return (
    <View>
      <Text>Bem vindo {cliente.Nome}</Text>
    </View>
  );
}
