import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import LoginScreen from "../Screens/Login";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeTab">
      <Drawer.Screen name="HomeTab" component={TabNavigator} options={{headerShown:false}}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;