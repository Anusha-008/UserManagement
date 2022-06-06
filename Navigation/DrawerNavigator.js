import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { AboutStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeTab">
      <Drawer.Screen name="HomeTab" component={TabNavigator} options={{headerShown:false}}/>
      <Drawer.Screen name="AboutList"  component={AboutStackNavigator} options={{headerShown:false}}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;