import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

const Truck = (props) => {

    return(
        <ImageBackground source={require('../assets/nice.jpg')} style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>

                    <View style={{margin: 20}}/>

                    <Image style={styles.logo}
                        source={require('../assets/Logo.png')}>
                    </Image>

                    <View style={{margin: 8}}/>

                    <Text style={{fontSize: 22, fontWeight: 'bold'}}>Select Your Vehicle Size 🚛</Text>

                    <View style={{margin: 8}}/>

                    <Button mode ="contained" color="brown" onPress={()=> props.navigation.navigate("Price")}>
                        Press To View The Prices
                    </Button>

                    <View style={{margin: 8}}/>

                    {/* FOR SMALL TRUCK */}
                    <Button mode="default" onPress={()=> props.navigation.navigate("Struck")}>
                        <Image style={styles.Struck}
                            source={require('../assets/Struck.png')}>
                        </Image>
                    </Button>

                    <View style={{margin: 8}}/>

                    {/* FOR MEDIUM TRUCK */}
                    <Button mode="default" onPress={()=> props.navigation.navigate("Mtruck")}>
                        <Image style={styles.Mtruck}
                            source={require('../assets/Mtruck.png')}>
                        </Image>
                    </Button>

                    <View style={{margin: 8}}/>

                    {/* FOR LARGE TRUCK */}
                    <Button mode="default" onPress={()=> props.navigation.navigate("Ltruck")}>
                        <Image style={styles.Ltruck}
                            source={require('../assets/Ltruck.png')}>
                        </Image>
                    </Button>

                    <View style={{margin: 8}}/>

                    {/* FOR X-LARGE TRUCK */}
                    <Button mode="default" onPress={()=> props.navigation.navigate("Btruck")}>
                        <Image style={styles.Btruck}
                            source={require('../assets/Btruck.png')}>
                        </Image>
                    </Button>

                    <View style={{margin: 10}}/>

                    <Button mode ="contained" onPress={()=> props.navigation.navigate("Map")}>
                        Track Your Belongings
                    </Button>

                    <View style={{margin: 10}}/>

                    <Button mode ="contained" onPress={()=> props.navigation.navigate("End")}>
                        End Page
                    </Button>

                    <View style={{margin: 20}}/>

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

    logo: {
        width: 120,
        height: 120,
    },

    item:{
        backgroundColor:"#fff",
        borderRadius:20,
        padding:10,
        marginBottom:15,
        flexDirection:"row",
    },

    scrollView: {
        marginHorizontal: 20,
        width: 500
    },

    Struck: {
        height: 150,
        width: 220,
        borderRadius: 35
    },

    Mtruck: {
        height: 150,
        width: 220,
        borderRadius: 35
    },

    Ltruck: {
        height: 150,
        width: 220,
        borderRadius: 35
    },

    Btruck: {
        height: 150,
        width: 220,
        borderRadius: 35
    },
})

export default Truck;