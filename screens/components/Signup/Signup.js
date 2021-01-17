import React from 'react';
import {View, StyleSheet, Text} from "react-native";
import LogoHeader from "../Login/LoginComponents/LogoHeader";
import {Button, TextInput} from "react-native-paper";

const Signup = () => {
    return (
        <View style={styles.container}>
            <LogoHeader/>
            <View style={styles.midSection}>
                <View style={styles.inputSection}>
                    <TextInput
                        multiLine={false}
                        label="First Name"
                        style={styles.infoInput}
                        selectionColor={'#A41846'}
                    />

                    <TextInput
                        multiLine={false}
                        label="Last Name"
                        style={styles.infoInput}
                        selectionColor={'#A41846'}
                    />

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
                        selectionColor={'#A41846'}
                    />

                    <TextInput
                        multiLine={false}
                        label="Confirm Password"
                        style={styles.infoInput}
                        selectionColor={'#A41846'}
                    />
                </View>

            </View>
            <View style={styles.privacyTxtContainer}>
                <Text>We take data privacy very seriously. Your information is securely stored and encrypted
                    on our servers.</Text>
            </View>

            <View style={styles.lastSection}>
                <Button mode={'contained'} color={'#7a57d1'} style={styles.signupBtn}>Sign Up!</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",

    },

    infoInput: {
        width: '45%',
        height: 50,
        margin: 5
    },

    signupBtn: {
        width: '60%',
    },

    inputSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
    },

    midSection: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    lastSection: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    privacyTxtContainer: {
        padding: 20
    },
})

export default Signup;
