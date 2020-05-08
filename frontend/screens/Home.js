import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

const Home = (props) => {
    const[name,setName] = useState("Loading")
    const Boiler = async () => {
        const token = await AsyncStorage.getItem("token")
        fetch('https://f6169df3.ngrok.io', {
            headers: new Headers({
                Authorization: "Bearer "+ token
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            setName(data.name)   
        }
        )
    }
    useEffect(()=>{
        Boiler()
    },[])

    const logout = (props) => {
         AsyncStorage.removeItem("token").then(() => {
             props.navigation.replace("Login")
         })
    }

    return(
      <ImageBackground source={require('../assets/nice.jpg')} style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        <Image style={styles.logo}
            source={require('../assets/Logo.png')}>
        </Image>

        <View style={{margin: 20}}/>

        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Hey There, {name}</Text>

        <View style={{margin: 10}}/>

        <Text style={{fontWeight: 'bold', fontSize: 20}}>Welcome To Rental Shifters 👏</Text>

        <View style={{margin: 20}}/>
        {/* <Button mode="contained" color="#0061DC" style={{width: 150, borderRadius: 35, paddingVertical: 12}}>
            Next
        </Button> */}
        <Button mode="contained" color="#0061DC" style={{width: 150, borderRadius: 35, paddingVertical: 8}}
            onPress={()=> props.navigation.navigate("About")}>
        Next
        </Button>

        <View style={{margin: 80}}/>
        
        <Button mode="contained" onPress={() => logout(props)} style={{marginTop: 20}}>
            Logout
        </Button>
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

export default Home;