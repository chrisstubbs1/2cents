import "react-native-gesture-handler";

import React from "react";
import {StyleSheet, Text, View, Button, Alert, Platform} from "react-native";
import {TextInput, TouchableOpacity} from "react-native-gesture-handler";

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>2cents</Text>

            <TextInput style={styles.textInput} placeholder={"Username"}/>

            <TextInput style={styles.textInput} placeholder={"Password"}/>

            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style={styles.loginTxt}>Log In</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.signupButton}
                    onPress={() => navigation.navigate("Signup")}
                >
                    <Text style={styles.signupTxt}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00303f",
        alignItems: "center",
        justifyContent: "center",
    },

    textInput: {
        height: 40,
        width: "80%",
        backgroundColor: "#cae4db",
        marginTop: 10,
        padding: 10,
        borderRadius: 20,
    },

    text: {
        fontSize: 50,
        color: "#cae4db",
    },

    signupTxt: {
        fontSize: 20,
        alignSelf: "center",
        color: "#f5f4f4",

    },

    loginTxt: {
        fontSize: 30,
        alignSelf: "center",
        color: "#f5f4f4"
    },

    forgotPassword: {
        fontSize: 15,
        color: "#f5f4f4",
        margin: 20,
    },

    loginButton: {
        color: "#cdac81",
        backgroundColor: "#cdac81",
        margin: 20,
        borderRadius: 30,
        width: 150,
    },

    signupButton: {
        color: "#cdac81",
        backgroundColor: "#cdac81",
        margin: 20,
        borderRadius: 30,
        width: 100,
        alignSelf: "center",
        fontSize: 20
    },

    buttonContainer: {
        display: "flex",
        flexDirection: "column",
    },
});

export default Login;
