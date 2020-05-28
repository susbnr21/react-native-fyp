import React, {Component} from 'react';
import MapView, {Marker, Polyline, PROVIDER_GOOGLE} from 'react-native-maps';
import { View, StyleSheet, Text, Image } from 'react-native';
import haversine from 'haversine';
import { Button } from 'react-native-paper';

navigator.geolocation = require('@react-native-community/geolocation');

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 27.7172;
const LONGITUDE = 85.3240;

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            error: null,
            routeCoordinates: [],
            distanceTravelled: 0,  // contain live distance
            valueprevLatLng: {}  // contain pass lat and lang value
        };
    }

    getMapRegion = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
       });
    
    calcDistance = newLatLng => {
        const { prevLatLng } = this.state; 
        return haversine(prevLatLng, newLatLng) || 0;
    }
    
    componentDidMount() {
            navigator.geolocation.getCurrentPosition(
            position => {
            console.log(position);
            this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null
            });
        },
    error => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 }
        );
        navigator.geolocation.watchPosition(
            position => {
                const { latitude, longitude } = position.coords;
                const { routeCoordinates,distanceTravelled  } = this.state;
                const newCoordinate = {
                 latitude,
                 longitude
                };
                this.setState({
                 latitude,
                 longitude,
                 routeCoordinates: routeCoordinates.concat([newCoordinate]),
                 //distanceTravelled: distanceTravelled + this.calcDistance(newCoordinate),
                 prevLatLng: newCoordinate
                });
             },
            error => console.log(error),
            { 
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000,
                distanceFilter: 10
            }
        );
    }

    
    
    render(){
        return(
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    region={this.getMapRegion()}
                >
                    <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
                    <Marker coordinate={this.getMapRegion()} >
                        <Image source={require("../assets/truck.png")} style={{ height: 55, width: 55 }} />
                    </Marker>
                </MapView>
                <View style={styles.distanceContainer}>
                <Text>{parseFloat(this.state.distanceTravelled).toFixed(2)} km</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    map: {
        height: '100%'
    },
    distanceContainer: {
        flexDirection: "row",
        marginVertical: 20,
        backgroundColor: "transparent"
    },
})

export default Map;