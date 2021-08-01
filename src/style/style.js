import { StyleSheet, Dimensions } from "react-native";

export const css = StyleSheet.create({
 
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
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").width /6,
    backgroundColor: "#6a51ae",
  },
  Logo:{
    color: "#FFF",
    fontFamily: "sans-serif-light",
    fontSize: 24,
  }
})