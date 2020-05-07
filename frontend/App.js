import React, {useEffect, useState} from 'react';
import { View, StyleSheet} from 'react-native';

//For Navigation
import 'react-native-gesture-handler';

//For Screens
import Signup from './screens/Signup';
import Login from './screens/Login';
import Loading from './screens/Loading';
import Home from './screens/Home';
import About from './screens/About';
import Truck from './screens/Truck';
import Struck from './secondScreen/Struck';
import Mtruck from './secondScreen/Mtruck';
import Ltruck from './secondScreen/Ltruck';
import Btruck from './secondScreen/Btruck';
import Map from './screens/Map';

//For Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

const App = () => {
  const[isloggedin, setLogged] = useState(null)

  const detectLogin = async () => {
    const token = await AsyncStorage.getItem('token')
    if(token){
      setLogged(true)
    }else{
      setLogged(false)
    }
  }
  
  useEffect(async ()=> {
    detectLogin()
  },[])
  return(
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Truck" component={Truck} />
        <Stack.Screen name="Struck" component={Struck} />
        <Stack.Screen name="Mtruck" component={Mtruck} />
        <Stack.Screen name="Ltruck" component={Ltruck} />
        <Stack.Screen name="Btruck" component={Btruck} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

console.disableYellowBox=true;