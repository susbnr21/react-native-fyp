import React, {useState} from 'react';
import { View, Text, StyleSheet,
         StatusBar, TouchableOpacity, 
         KeyboardAvoidingView, ImageBackground, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

//For Login
import AsyncStorage from '@react-native-community/async-storage';

const Signup = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const sendCred = async (props) => {
        fetch("https://96adb41d.ngrok.io/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "name":name,
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

            <Text style={{fontSize: 25, marginBottom: 20, color: 'red', fontWeight: 'bold'}}>
              Register Below
            </Text>

            <TextInput
              label="Name"
              mode="outlined"
              value={name}
              style={{width: 300}}
              onChangeText={(text)=> setName(text)}
            />
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
              Register
            </Button>

            <TouchableOpacity>
              <Text
               style={{fontSize: 20, marginTop: 45, color: 'black', fontWeight: 'bold'}}
               onPress={()=> props.navigation.replace("Login")}
              >Already Have An Account?</Text>
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

export default Signup;