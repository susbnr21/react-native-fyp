import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView, Alert, Picker } from 'react-native';
import { Button } from 'react-native-paper';

const Map = () => {
    const [selectedValue, setSelectedValue] = useState("java");

    return(
        <ImageBackground source={require('../assets/grey.jpg')} style={styles.container}>
            <View style={styles.container}>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
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