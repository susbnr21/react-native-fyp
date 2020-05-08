import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, ImageBackground,
         Image, ScrollView, KeyboardAvoidingView, StatusBar, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

//For Truck Info
import AsyncStorage from '@react-native-community/async-storage';

const Struck = (props) => {
    const[name,setName] = useState("Loading");
    const[contact,setContact] = useState('');
    const[address_from,setAddress_from] = useState('');
    const[address_to,setAddress_to] = useState('');
    const[truck_size,setTruck_size] = useState('Small Truck');
    const[description,setDescription] = useState('Studio/Small 1 Bed Apartments (400-600 sqft)');
    const[weight,setWeight] = useState('1-3000 lbs');
    const[truck_space,setTruck_space] = useState('400-450 cubic feet');
    const[capacity_furniture,setCapacity_furniture] = useState('1-5 Medium Furniture');
    const[capacity_box,setCapacity_box] = useState('Upto 120 medium box');
    const[worker,setWorker] = useState('');
    const[boxes,setBoxes] = useState('');
    const[extra,setExtra] = useState('');

    //For Posting Data in Database
    const sendCred = async (props) => {
        fetch("https://f6169df3.ngrok.io/truck", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "name": name,
                "contact":contact,
                "address_from": address_from,
                "address_to": address_to,
                "truck_size": truck_size,
                "description": description,
                "weight": weight,
                "truck_space": truck_space,
                "capacity_furniture": capacity_furniture,
                "capacity_box": capacity_box,
                "worker": worker,
                "boxes": boxes,
                "extra": extra
            })
        })
        .then(res=>res.text())
        .then(async ()=>{
            try{
                // await AsyncStorage.setItem('token',data.token)
                props.navigation.replace("Map")
            } catch (e) {
                console.log("It is an error", e)
                Alert(e)
            }
        })
    }

    //For Getting the name of the user
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

    // For TextInput Validation and Sending Credentials
    const Warning = () => {
        if(contact != ''){
            if(address_from !=''){
                if(address_to != '') {
                    Alert.alert(
                        "Confirmation",
                        "Submit the Information?",
                        [
                          {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                          },
                          { text: "OK", onPress: () => sendCred(props)}
                        ],
                        { cancelable: false }
                    );
                } else {
                    alert('Please Give Your Address You Are Going To!');
                }
            } else {
                alert('Please Give Your Address You Are Shifting From!');
            }
        } else {
            alert('Please Give Your Contact!');
        }
    }

    return(
        <ImageBackground source={require('../assets/grey.jpg')} style={styles.container}>
            <KeyboardAvoidingView behavior="position">
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                <StatusBar barStyle="dark-content"/>
                <View style={{marginTop: 80}}/>
                <Text style={{fontSize: 25, fontWeight: 'bold', color: "#D30B0B"}}>Small Truck Details</Text>

                <View style={{margin: 10}}/>

                <Image style={styles.Struck}
                    source={require('../assets/Struck.png')}>
                </Image>

                <View style={{marginTop: 20}}/>

                <TextInput
                    label="Name"
                    mode="flat"
                    style={{width: 350}}
                    disabled value = {name}
                />
                <TextInput
                    label="Truck Size"
                    mode="flat"
                    style={{width: 350}}
                    disabled value = {truck_size}
                    onChangeText={(text)=> setTruck_size(text)}
                />
                <TextInput
                    label="Description"
                    mode="flat"
                    style={{width: 350}}
                    disabled value = {description}
                    onChangeText={(text)=> setDescription(text)}
                />
                <TextInput
                    label="Weight"
                    mode="flat"
                    style={{width: 350}}
                    disabled value = {weight}
                    onChangeText={(text)=> setWeight(text)}
                />
                <TextInput
                    label="Truck Space"
                    mode="flat"
                    style={{width: 350}}
                    disabled value = {truck_space}
                    onChangeText={(text)=> setTruck_space(text)}
                />
                <TextInput
                    label="Capacity Furniture"
                    mode="flat"
                    style={{width: 350}}
                    disabled value = {capacity_furniture}
                    onChangeText={(text)=> setCapacity_furniture(text)}
                />
                <TextInput
                    label="Capacity Boxes"
                    mode="flat"
                    style={{width: 350}}
                    disabled value = {capacity_box}
                    onChangeText={(text)=> setCapacity_box(text)}
                />

                <View style={{margin: 20}}/>

                <Text style={{fontSize: 15, fontWeight: 'bold', color: "red"}}>Please Fill The Form Below</Text>

                <View style={{margin: 10}}/>

                <TextInput
                    label="Phone Number"
                    mode="flat"
                    style={{width: 350}}
                    value={contact}
                    onChangeText={(text)=> setContact(text)}
                />

                <View style={{margin: 10}}/>

                <TextInput
                    label="Address From"
                    mode="flat"
                    style={{width: 350}}
                    value={address_from}
                    onChangeText={(text)=> setAddress_from(text)}
                />

                <View style={{margin: 10}}/>

                <TextInput
                    label="Address To"
                    mode="flat"
                    style={{width: 350}}
                    value={address_to}
                    onChangeText={(text)=> setAddress_to(text)}
                />

                <View style={{margin: 5}}/>

                <View style={styles.button}>
                    <Button mode="contained" onPress={Warning} style={{marginTop: 20}}>
                        Submit
                    </Button>
                    <Button mode="contained" onPress={()=> props.navigation.replace("Truck")} color="red" style={{marginTop: 20, marginLeft: 50}}>
                        Cancel
                    </Button>
                </View>

                <View style={{margin: 20}}/>

                </View>
                </ScrollView>
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

    Struck: {
        height: 120,
        width: 200,
        borderRadius: 35
    },

    scrollView: {
        marginHorizontal: 20,
        width: 500
    },

    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})

export default Struck;