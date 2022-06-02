import React,{useContext} from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import AppContext from '../context/AppContext';

const Home = ({ navigation }) => {
  let loginData = useContext(AppContext);
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("About")} 
      />
      <Button
        title="LogOut"
        onPress={() => loginData.setIsLoggedIn(false)} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home;