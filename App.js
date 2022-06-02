import React,{useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppContext from "./context/AppContext";

import DrawerNavigator from './Navigation/DrawerNavigator';
import Login from './Screens/Login';

 const App = () => {

  const [isloggedIn,setIsLoggedIn] = useState(false)

  return (
    <AppContext.Provider value={{isloggedIn,setIsLoggedIn}}>
      <NavigationContainer>
      {isloggedIn? <DrawerNavigator/>:<Login />}
      </NavigationContainer>
    </AppContext.Provider>
  );
}
export default App;