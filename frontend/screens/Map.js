import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { View, StyleSheet } from 'react-native';

const Map = () => {

    return(
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: 28.3949,
                    longitude: 84.1240,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.035
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    map: {
        height: '100%'
    }
})

export default Map;