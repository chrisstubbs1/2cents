import React from 'react'
import {View, StyleSheet, Alert} from "react-native";
import {Button} from "react-native-paper";
import auth from '@react-native-firebase/auth'

const LoginButtonSection = ({nav, emailAddress, password}) => {

    const checkEmailOrPasswordIsEmpty = (emailToCheck, passwordToCheck) => {
        return emailToCheck === ''.trim() || passwordToCheck === ''.trim();
    }

    const handleLogin = () => {
        if (checkEmailOrPasswordIsEmpty(emailAddress, password)){
            Alert.alert('Email or Password cannot be empty')
            return;
        }

        auth().signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                Alert.alert(`Successfully signed in as ${emailAddress}`)
                nav.navigate('Home')
            })
            .catch(() => {
                Alert.alert("Login failed. Try again")
            })
    }

    return(
        <View>
            <Button mode={'contained'} contentStyle={styles.loginBtn}
                    onPress={handleLogin}>
                Log In
            </Button>

            <Button color={"#7a57d1"} onPress={() => nav.navigate('Signup')}>
                Don't have an account? Sign up here.
            </Button>
        </View>
    )

}


const styles = StyleSheet.create({
    loginBtn: {
        height: 50,
        width: '100%',
        fontSize: 20,
        backgroundColor: '#7a57d1'
    },
})

export default LoginButtonSection
