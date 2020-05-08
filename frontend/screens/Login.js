import React, {useState} from 'react';
import { View, Text, StyleSheet,
         StatusBar, TouchableOpacity, KeyboardAvoidingView, 
         Alert, ImageBackground, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';


//For Login
import AsyncStorage from '@react-native-community/async-storage';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const sendCred = async (props) => {
        fetch("https://f6169df3.ngrok.io/signin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "email":email,
                "password":password
            })
        })
        .then(res=>res.json())
        .then(async (data)=>{
                try {
                    await AsyncStorage.setItem('token',data.token)
                    props.navigation.replace("Home")
                } catch (e) {
                    console.log("It is an error",e)
                    Alert(e)
                }
        })
    }

    return(
      <ImageBackground source={require('../assets/boxs.jpeg')} style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <Text style={{fontSize: 35, fontWeight: 'bold'}}>Welcome To</Text>
            <Image style={styles.logo}
                source={require('../assets/Logo.png')}>
            </Image>

            <View style={{marginTop: 20}}/>

            <Text style={{fontSize: 25, marginBottom: 20, color: 'red', fontWeight: 'bold'}}>Login Below</Text>
            <TextInput
              label="Email"
              mode="outlined"
              autoCapitalize={false}
              value={email}
              style={{width: 300}}
              onChangeText={(text)=> setEmail(text)}
            />
            <TextInput
              label="Password"
              mode="outlined"
              value={password}
              secureTextEntry={true}
              autoCapitalize={false}
              style={{width: 300}}
              onChangeText={(text)=> setPassword(text)}
            />
            <Button mode="contained" onPress={() => sendCred(props)} style={{marginTop: 20}}>
              Login
            </Button>
            <TouchableOpacity>
              <Text
               style={{fontSize: 20, marginTop: 45, color: 'black', fontWeight: 'bold'}}
               onPress={()=> props.navigation.replace("Signup")}
              >Don't Have An Account?</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {
    width: 150,
    height: 150,
  },
})

export default Login;