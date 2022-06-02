import React,{ useState } from "react";
import { View, Button, Text, StyleSheet,TextInput,TouchableOpacity,StatusBar } from "react-native";
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        onChangeText={(e) => setEmail(e.target.value)}
      />
    </View>
 
    <View >
      <TextInput
        style={styles.TextInput}
        placeholder="Password."
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(e) => setPassword(e.target.value)}
      />
    </View>

    <TouchableOpacity>
      <Button style={styles.loginText} title="Log in" onPress={() => navigation.navigate('DrawerNavigator')}/>
    </TouchableOpacity>

    <StatusBar style="auto" />
    </View>
  );
}

const Home = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button title="Go to About Screen" onPress={() => navigation.navigate("About")}/>
    </View>
  );
};

const About = () => {
  return (
    <View style={styles.center}>
      <Text>This is the about screen</Text>
    </View>
  );
};




const Contact = () => {
  return (
    <View style={styles.center}>
      <Text>This is the contact screen</Text>
    </View>
  );
};

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
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

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} options={{headerShown: false}}/>
      <Tab.Screen name="Contact" component={ContactStackNavigator} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} options={{headerShown: false}}/>
      <Drawer.Screen name="Contact" component={ContactStackNavigator} options={{headerShown: false}}/>
    </Drawer.Navigator>
  );
}
 const App = () => {
  return (
    <NavigationContainer>
      
    </NavigationContainer>
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
export default App;