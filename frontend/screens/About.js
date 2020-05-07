import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

const About = (props) => {
    return(
        <ImageBackground source={require('../assets/nice.jpg')} style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
            
            <View style={{margin: 20}}/>

                <Image style={styles.logo}
                    source={require('../assets/Logo.png')}>
                </Image>

                <View style={{margin: 8}}/>

                <View style={styles.color}>
                    <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 20}}>About Us</Text>

                    <Text style={styles.para}>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                        culpa qui officia deserunt mollit anim id est laborum.""Sed ut perspiciatis unde omnis iste natus error 
                        sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
                        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
                        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores 
                        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor 
                        sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                        dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam 
                        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit 
                        qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas 
                        nulla pariatur?
                    </Text>
                </View>

                <View style={{margin: 20}}/>

                <Button mode="contained" color="#0061DC" style={{width: 150, borderRadius: 35, paddingVertical: 8}}
                    onPress={()=> props.navigation.navigate("Truck")}>
                Next
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

    color: {
        backgroundColor: '#878A8E',
        width: 330,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },

    para: {
        fontFamily: 'Arial',
        fontSize: 16,
        color: 'orange',
        fontWeight: 'bold',
        textAlign: 'justify',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    },

    scrollView: {
        marginHorizontal: 20,
        width: 500
    },
})

export default About;