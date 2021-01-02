import "react-native-gesture-handler";
import LogoHeader from "./components/LogoHeader";
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Button} from 'react-native-paper';
import {TextInput} from 'react-native-paper';

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>

                <LogoHeader/>

                <View style={styles.secondContainer}>
                    <TextInput
                        multiLine={false}
                        label="Email"
                        style={styles.infoInput}
                        selectionColor={'#A41846'}
                    />

                    <TextInput
                        multiLine={false}
                        label="Password"
                        style={styles.infoInput}
                    />

                    <Button color={'#7a57d1'} style={styles.forgotPassword}>
                        Forgot Password?
                    </Button>
                </View>

                <View style={styles.thirdContainer}>
                    <Button mode={'contained'} contentStyle={styles.loginBtn}>
                        Log In
                    </Button>

                    <Button color={"#7a57d1"} onPress={() => navigation.navigate('Signup')}>
                        Don't have an account? Sign up here.
                    </Button>
                </View>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    backgroundImg: {
        flex: 1,
        width: "100%"
    },

    secondContainer: {
        flex: 2,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
    },

    infoInput: {
        width: 300,
        height: 50,
    },

    thirdContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'flex-start',
    },

    text: {
        fontSize: 70,
        color: "#fff",
    },

    loginBtn: {
        height: 50,
        width: '100%',
        fontSize: 20,
        backgroundColor: '#7a57d1'
    },

    forgotPassword: {
    },

    buttonContainer: {
        display: "flex",
        flexDirection: "column",
    },
});

export default Login;
