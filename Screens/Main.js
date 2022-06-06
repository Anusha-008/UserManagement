import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector} from "react-redux";

import DrawerNavigator from "../Navigation/DrawerNavigator";
import Login from '../Screens/Login';

 const Main = () => {

const users = useSelector((state)=>state.isloggedIn);
console.log(users);


  return (
   
      <NavigationContainer>
      {users? <DrawerNavigator/>:<Login />}
      </NavigationContainer>
   
  );
}
export default Main;