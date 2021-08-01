import React, {useState, useContext} from "react";
import { View, Text, ImageBackground, Dimensions, TouchableOpacity, Button } from "react-native";
import Icons from "react-native-vector-icons/MaterialIcons";
import { Banco } from "./Contexto";
import { css } from "../style/style";
import Deposito from "./Deposito";

export default function Home({navigation}){
  const {cliente} = useContext(Banco);
  
  return (
      <View style={css.ContainerHome}>
        <View style={css.Barra}>
          <View style={css.ItemBarra}>
            <Icons name="home-work" size={24} style={css.Icone} />
            <Text style={css.TextoBarra}>
            Agência: {cliente.Agencia}
            </Text>
          </View>
          <View style={css.ItemBarra}>
            <Icons name="credit-card" size={24} style={css.Icone} />
            <Text style={css.TextoBarra}>Conta: {cliente.Conta} </Text>
          </View>
        </View>
        <View style={css.BarraSaldo}>
        <Text style={css.TextoBarraSaldo}>Seu saldo atual é de R${cliente.Saldo}</Text>
        </View>

        <ImageBackground  source={require("../../assets/images/money.jpg")} style={[css.Main, {resizeMode: "contain", width: Dimensions.get("window").width, }]}>
          <Text style={css.TituloMain}>Bem vindo {cliente.Nome}</Text>
          <Text>{"\n"}</Text>
          <Text style={css.TextoMain}>Deposite hoje as suas férias de amanhã.</Text>
          <Text style={css.TextoMain}>Garantimos rendimentos{"\n"} de até 70% ao ano.</Text>
          {/* <TouchableOpacity style={css.BtnDepositoMain} 
          onPress={()=> navigation.navigate('Deposito', dados)}
          >
            <Text style={css.TextoBtnDepositoMain}>Depositar</Text>
          </TouchableOpacity> */}
        </ImageBackground>
        <View style={{display: "none"}}>
          <Deposito />
        </View>
      </View>
  );
}
