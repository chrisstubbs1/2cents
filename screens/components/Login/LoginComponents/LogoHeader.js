import React from 'react'
import {Image, View, StyleSheet} from "react-native";

const LogoHeader = () => {
    return (
        <View style={styles.firstContainer}>
            <Image source={require('../../../../assets/logo.png')} style={styles.logo}/>
        </View>
    )
}

const styles = StyleSheet.create({

    firstContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    logo: {
        width: 200,
        height: 200,
    },

})

export default LogoHeader
