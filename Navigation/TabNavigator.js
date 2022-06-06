import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeStackNavigator, ContactStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="HomeStack">
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} options={{headerShown: false}}/>
      <Tab.Screen name="Contact" component={ContactStackNavigator} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;