import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { userLogin, userLogout } from "../store/actions";



const Home = ({ navigation }) => {
 
 const dispatch= useDispatch(); 
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("About")} 
      />
      <Button
        title="LogOut"
        onPress={() => dispatch(userLogout())} 
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