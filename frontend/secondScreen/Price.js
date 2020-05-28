import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, ImageBackground,
         Image, ScrollView, KeyboardAvoidingView, StatusBar, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const Price = (props) => {
    return (
        <ImageBackground source={require('../assets/grey.jpg')} style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <StatusBar barStyle="dark-content"/>
                <View style={{marginTop: 80}}/>
                <Text style={{fontSize: 23, fontWeight: 'bold', color: "#000000"}}>Price System of Rental Shifters</Text>

                <View style={{marginTop: 20}}/>

                <Text style={{fontSize: 18, fontWeight: 'bold', color: "red"}}>Distance Prices</Text>

                <View style={{margin: 10}}/>

                <TextInput
                    label="Within 5 km"
                    mode="flat"
                    style={{width: 350}}
                    disabled value = "Rs. 500"
                />
                <TextInput
                    label="Within 10 km"
                    mode="flat"
                    style={{width: 350}}
                    disabled value = "Rs. 1000"
                />
                <TextInput
                    label="Within 15 km"
                    mode="flat"
                    style={{width: 350}}
                    disabled value = "Rs. 1500+"
                />

                <View style={{marginTop: 20}}/>

                <Text style={{fontSize: 18, fontWeight: 'bold', color: "red"}}>Truck Prices</Text>

                <View style={{margin: 10}}/>

                <TextInput
                    label="Small Truck"
                    mode="flat"
                    style={{width: 350}}
                    disabled value = "Rs. 500"
                />
                <TextInput
                    label="Medium Truck"
                    mode="flat"
                    style={{width: 350}}
                    disabled value = "Rs. 1000"
                />
                <TextInput
                    label="Large Truck"
                    mode="flat"
                    style={{width: 350}}
                    disabled value = "Rs. 1500"
                />

                <TextInput
                    label="X-Large Truck"
                    mode="flat"
                    style={{width: 350}}
                    disabled value = "Rs. 2000"
                />

                <View style={{marginTop: 20}}/>

                <Text style={{fontSize: 18, fontWeight: 'bold', color: "red"}}>Extra Preference Prices</Text>

                <View style={{margin: 10}}/>

                <TextInput
                    label="Each One Worker"
                    mode="flat"
                    style={{width: 350}}
                    disabled value = "Rs. 100"
                />
                <TextInput
                    label="Each One Box"
                    mode="flat"
                    style={{width: 350}}
                    disabled value = "Rs. 30"
                />
                <TextInput
                    label="House Rearrangement"
                    mode="flat"
                    style={{width: 350}}
                    disabled value = "Rs. 3000"
                />

                <TextInput
                    label="Room Decoration"
                    mode="flat"
                    style={{width: 350}}
                    disabled value = "Rs. 3000"
                />

                <View style={{marginTop: 20}}/>

                <Button mode ="contained" onPress={()=> props.navigation.navigate("Truck")}>
                        Okay
                </Button>

                <View style={{marginTop: 20}}/>
                
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
})

export default Price;