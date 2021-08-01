import { StyleSheet, Dimensions } from "react-native";

export const css = StyleSheet.create({
 
// #734D1F
// #A67C49
// #D9C8B4
// #401E01
// #658CBF

 //*********/ APP /**********//
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccbbff",
  },
 //*********/ HEADER /**********//
  Header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width/1.5,
    backgroundColor: "#401E01",
  },
  Logo:{
    width: Dimensions.get("window").width/2,
    resizeMode: "contain",
  },
  LogoTexto:{
    color: "#D9C8B4",
    fontFamily: "sans-serif-light",
    fontSize: 24,
  },
  //*********/ DICAS /**********//
  Titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#401E01",
    textAlign: "center",
    paddingVertical: 20,
  },
  Lista: {
    padding: 5,
    paddingBottom: 30,
  },
  Item: {
    lineHeight: 30,
    fontSize: 18,
    fontStyle: "italic",
    // backgroundColor: "#A67C49",
    borderBottomWidth: 3,
    borderBottomColor: "#734D1F",
  },
  //*********/ HOME /**********//
  ContainerHome: {
    flex: 1,
  },
  Barra :{
    display: "flex",
    width: Dimensions.get("window").width,
    backgroundColor: "#A67C49",
    justifyContent: "space-evenly",
    flexDirection: "row",
    paddingVertical: 30,
  },
  ItemBarra: {
    display: "flex", 
    flexDirection: "row"
  },
  Icone: {
    color: "#D9C8B4",
    paddingRight: 5,
  },
  TextoBarra: {
    color: "#D9C8B4",
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
    fontSize: 18,
  },  
  BarraSaldo :{
    display: "flex",
    width: Dimensions.get("window").width,
    backgroundColor: "#734D1F",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 5,
  },
  TextoBarraSaldo: {
    color: "#D9C8B4",
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
    fontSize: 18,
  }, 
  Main: {
    flex: 1,
    backgroundColor: "#D9C8B4",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  TituloMain: {
    color: "#734D1F",
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: 28,
  }, 
  TextoMain: {
    color: "#401E01",
    fontFamily: "sans-serif",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
  BtnDepositoMain:{
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#734D1F",
    borderRadius: 25,
  },
  TextoBtnDepositoMain: {
    color: "#D9C8B4",
    fontWeight: "bold",
  },
//*********/ Deposito /**********//
BarraDeposito :{
  display: "flex",
  width: Dimensions.get("window").width,
  backgroundColor: "#A67C49",
  justifyContent: "center",
  alignItems: "center",
  paddingVertical: 30,
},
BackgroundDeposito:{
  resizeMode: "contain", 
  width: Dimensions.get("window").width, 
  height:340,
},
  TituloDeposito: {
    color: "#D9C8B4",
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
    fontSize: 28,
  }, 
  MainDeposito: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingHorizontal: 5,
  },
  TextoDeposito: {
    color: "#401E01",
    fontFamily: "sans-serif",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
  ViewInputDeposito: {
    width: 320,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  InputDeposito: {
    textAlign: "right",
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: "bold",
    borderRadius:25,
    color: "#401E01",
    width: Dimensions.get("window").width/2,
    borderWidth: 2,
    borderColor: "#401E01",
  },
  BtnDeposito:{
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#734D1F",
    borderRadius: 25,
  },
  TextoBtnDeposito: {
    color: "#D9C8B4",
    fontWeight: "bold",
  },
});