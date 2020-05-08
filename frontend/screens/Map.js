import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView, Alert, Picker } from 'react-native';
import { Button } from 'react-native-paper';

const Map = () => {

    return(
        <ImageBackground source={require('../assets/grey.jpg')} style={styles.container}>
            
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

export default Map;