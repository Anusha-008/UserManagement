import React from "react";
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';


import Home from "../Screens/Home";
import About from "../Screens/About";
import Contact from "../Screens/Contact";
import AboutList from "../Screens/AboutList";

const Stack =  createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerBackTitle: "Back",
};




const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={({ navigation }) => ({ headerLeft: () => (
        
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon name="bars" size={30} color="#900" />
        </TouchableOpacity>
    ),
  })}/>
      <Stack.Screen name="About" component={About} options={{ title: 'My About' }}/>
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

const AboutStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="AboutList" component={AboutList} />
    </Stack.Navigator>
  );
}
export { HomeStackNavigator, ContactStackNavigator,AboutStackNavigator };