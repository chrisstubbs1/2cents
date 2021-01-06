import "react-native-gesture-handler";
import LogoHeader from "./components/LogoHeader";
import React from "react";
import {StyleSheet, View} from "react-native";
import {TextInput, Button} from 'react-native-paper';

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

                <Button color={'#7a57d1'} style={styles.forgotPassword}
                        onPress={() => navigation.navigate('Forgot Password')}>
                    Forgot Password?
                </Button>
            </View>

            <View style={styles.thirdContainer}>
                <Button mode={'contained'} contentStyle={styles.loginBtn} onPress={() => navigation.navigate('Home')}>
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
        padding: 10,
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

    forgotPassword: {},

    buttonContainer: {
        display: "flex",
        flexDirection: "column",
    },
});

export default Login;
