import React,{ useState } from "react";
import { View, Button, Text, StyleSheet,TextInput,TouchableOpacity,StatusBar } from "react-native";
import { useDispatch } from "react-redux";
import { userLogin, userLogout } from "../store/actions";


export default function LoginScreen() {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
   const dispatch= useDispatch() 

    return (
      
      <View  style={styles.container}>
  
      <View>
        <Text>Login Page</Text>
      </View>
      
        
      <View >
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
   
      <View >
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
  
      <TouchableOpacity>
        <Button style={styles.loginText} title="Log in" onPress={() => dispatch(userLogin())}/>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextInput: {
      height: 40,
      width:200,
      margin: 12,
      borderWidth: 2,
      padding: 10,
    },
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    
      center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      },
   
  });