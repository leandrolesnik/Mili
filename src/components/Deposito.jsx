import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Dimensions, ImageBackground} from "react-native";
import { css } from "../style/style";

export default function Deposito({navigation}){
  
  const[valor, setValor] = useState(
    {
      D: 0,
      T: 0,    
    }
  )

  const total = () => {
    setValor({
        ...valor, T: (valor.D * 1.7).toFixed(2)
    })
  }
  
  console.log(valor);

  return (
    <View>
      <View style={css.BarraDeposito}>
        <Text style={css.TituloDeposito}>Deposito</Text>
      </View>
      
      <ImageBackground  source={require("../../assets/images/money.jpg")} style={css.BackgroundDeposito}>
        <View style={css.MainDeposito}>
          <View style={css.ViewInputDeposito}>
            <Text style={css.TextoDeposito}>Valor</Text>
            <TextInput style={css.InputDeposito} keyboardType={"numeric"}
              onChangeText={(deposito) => setValor({...valor, D: Number(deposito)})}
            />
          </View>

          <View style={css.ViewInputDeposito}>
            <Text style={css.TextoDeposito}>Rendimento</Text>
            <Text style={css.TextoDeposito}>{valor.T}</Text>
          </View>

          <TouchableOpacity style={css.BtnDeposito}
            onPress={total}>
            <Text style={css.TextoBtnDeposito}>Depositar</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  )
}
