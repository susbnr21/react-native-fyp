import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

const End = (props) => {
    return(
        <ImageBackground source={require('../assets/nice.jpg')} style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <View style={{margin: 150}}/>
                    <Image style={styles.logo}
                        source={require('../assets/Logo.png')}>
                    </Image>
                    <View style={{margin: 8}}/>
                    <Text style={{fontSize: 22, fontWeight: 'bold'}}>Thank You For Using Rental Shifters</Text>
                    <View style={{margin: 20}}/>
                    <Button mode ="contained" color="red" onPress={()=> props.navigation.navigate("Home")}>
                        Back To Home
                    </Button>
                    <View style={{margin: 20}}/>
                    <Button mode ="contained" onPress={()=> props.navigation.navigate("Map")}>
                        Track Your Belongings
                    </Button>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    scrollView: {
        marginHorizontal: 20,
        width: 500
    },
    logo: {
        width: 120,
        height: 120,
    },
});

export default End;