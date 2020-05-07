import React, {useEffect} from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

const Loading = (props) => {

    const detectLogin = async () => {
        const token = await AsyncStorage.getItem('token')
        if(token){
            props.navigation.replace("Home")
        }else{
            props.navigation.replace("Login")
        }
    }

    useEffect(()=> {
        detectLogin()
      },[])

    return(
      <View style={styles.container}>
        <ActivityIndicator size="large" color="black"/>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

export default Loading;