import React from 'react';
import { View, Text, StatusBar } from "react-native";
import { css } from "./src/style/style";
//NAVEGACAO
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/MaterialIcons";
//COMPONEMTES
import Header from "./src/components/Header";
import Deposito from "./src/components/Deposito";
import Dicas from "./src/components/Dicas";
import Contexto from './src/components/Contexto';


// #734D1F
// #A67C49
// #D9C8B4
// #401E01
// #658CBF

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar/>
      <Header />
      <Tab.Navigator initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon:({color, size}) => {
            let iconName;
            switch(route.name){
              case "Home": iconName = "home"
              break;
              case "Deposito": iconName = "attach-money"
              break;
              case "Dicas": iconName = "lightbulb"
              break;
            }
            return <Icons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#D9C8B4", 
          inactiveTintColor: "#A67C49",
          activeBackgroundColor: "#A67C49", 
          labelStyle:{
            fontSize: 14,
          }, 
          style: {
            backgroundColor: "#401E01", 
          }
        }}
      >
        <Tab.Screen name="Home" component={Contexto} />
        <Tab.Screen name='Deposito' component={Deposito} />
        <Tab.Screen name='Dicas' component={Dicas} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

