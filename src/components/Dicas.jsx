import React from "react";
import { View, Text, ScrollView, Image, } from "react-native";
import { css } from "../style/style";

export default function Dicas(){

  return (
    <ScrollView style={{backgroundColor: "#D9C8B4",}}>
      <View style={css.Lista}>
        <Text style={css.Titulo}>10 dicas para proteger o celular e aplicativos bancários</Text>
        <Image source={require("../../assets/images/thief.jpg")} style={{display: "flex",alignSelf: "center", marginTop: 25, marginBottom: 25, }} />
        <Text style={css.Item}>Não anote suas senhas no próprio aparelho</Text>
        <Text style={css.Item}>Jamais repita as senhas dos seus bancos</Text>
        <Text style={css.Item}>Verifique os limites diários das suas transações</Text>
        <Text style={css.Item}>Não use o recurso de lembrete de senhas no celular</Text>
        <Text style={css.Item}>Tenha uma senha de bloqueio de tela</Text>
        <Text style={css.Item}>Salve o IMEI do celular</Text>
        <Text style={css.Item}>Saiba como entrar em contato com seu banco e com sua operadora</Text>
        <Text style={css.Item}>Evite usar o celular em locais públicos</Text>
        <Text style={css.Item}>Delete informações sensíveis do celular</Text>
        <Text style={css.Item}>Mantenha o aparelho e aplicativos atualizados</Text>
      </View>
    </ScrollView>
  )
}
