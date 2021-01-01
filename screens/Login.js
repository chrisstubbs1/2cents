import "react-native-gesture-handler";

import React from "react";
import {StyleSheet, Text, View, Button, Alert, Platform, ImageBackground} from "react-native";
import {TextInput, TouchableOpacity} from "react-native-gesture-handler";

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background4.jpeg')}
                             resizeMode='cover'
                             style={styles.imageBackground}>

                <View style={styles.firstContainer}>
                    <Text style={styles.text}>2cents</Text>
                </View>

                <View style={styles.secondContainer}>
                    <TextInput style={styles.textInput} placeholder={"Username"} placeholderTextColor="#fff"
                    />

                    <TextInput style={styles.textInput} placeholder={"Password"} placeholderTextColor="#fff"/>
                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.thirdContainer}>
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
                        <Text style={styles.signupTxt}>Dont have an account? Sign up.</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#16697a",
        alignItems: "center",
        justifyContent: "center",
    },

    imageBackground: {
        width: "100%",
        height: "100%",
    },

    firstContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    },

    secondContainer: {
        flex: 2,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-evenly"
    },

    thirdContainer: {
        flex: 1,
        alignItems: "center",
    },

    textInput: {
        height: 40,
        color: "#fff",
        width: "80%",
        marginTop: 10,
        padding: 10,
        borderRadius: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        alignSelf: "flex-end"
    },

    text: {
        fontSize: 70,
        color: "#f8f1f1",
    },

    signupTxt: {
        fontSize: 15,
        alignSelf: "center",
        color: "#f8f1f1",
    },

    loginTxt: {
        fontSize: 30,
        alignSelf: "center",
        color: "#f8f1f1"
    },

    forgotPassword: {
        fontSize: 15,
        color: "#f8f1f1",
        margin: 20,
    },

    loginButton: {
        backgroundColor: "#e89b97",
        opacity: 0.8,
        margin: 20,
        padding: 10,
        borderRadius: 30,
        width: 150,
    },

    signupButton: {
        borderRadius: 30,
        width: 220,
        alignSelf: "center",
        fontSize: 20
    },

    buttonContainer: {
        display: "flex",
        flexDirection: "column",
    },
});

export default Login;
