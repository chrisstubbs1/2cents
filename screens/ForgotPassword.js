import React from "react";
import {View} from "react-native-web";
import {StyleSheet} from "react-native";
import LogoHeader from "./components/LogoHeader";

const ForgotPassword = () => {
    return (
        <View style={styles.container}>
            <LogoHeader/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})


export default ForgotPassword