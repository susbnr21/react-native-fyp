import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView, Alert, Picker } from 'react-native';
import { Button } from 'react-native-paper';

const Map = () => {

    const [selectedValue, setSelectedValue] = useState("java");

    // const Message = () => {
    //     Alert.alert(
    //         "Alert Title",
    //         "My Alert Msg",
    //         [
    //           {
    //             text: "Cancel",
    //             onPress: () => console.log("Cancel Pressed"),
    //             style: "cancel"
    //           },
    //           { text: "OK", onPress: () => console.log("OK Pressed") }
    //         ],
    //         { cancelable: false }
    //       );
    // }
    return(
        <ImageBackground source={require('../assets/grey.jpg')} style={styles.container}>
            {/* <Button mode ="contained" onPress={Message}>Hello</Button> */}
            <View style={styles.container}>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
            </View>
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