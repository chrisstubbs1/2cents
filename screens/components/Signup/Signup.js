import React, {useState} from 'react';
import {View, StyleSheet, Text, Alert} from "react-native";
import LogoHeader from "../Login/LoginComponents/LogoHeader";
import {Button, TextInput} from "react-native-paper";
import auth from '@react-native-firebase/auth';

const Signup = () => {

    const [signupState, setSignupState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    })

    const [passwordErrorText, setPasswordErrorText] = useState('')

    const checkIfPasswordsAreEqual = (password1, password2) => {
        return password1 === password2
    }

    const checkIfEmailIsValid = (emailToBeChecked) => {
        return emailToBeChecked.includes('@')
    }

    const handleSignupPress = () => {
        if (!checkIfPasswordsAreEqual(signupState.password, signupState.confirmPassword)) {
            setPasswordErrorText('Passwords do not match')
            return
        }

        setPasswordErrorText('')

        if (!checkIfEmailIsValid(signupState.email)) {
            Alert.alert('Not a valid email')
            return
        }

        auth().createUserWithEmailAndPassword(signupState.email, signupState.password)
            .then(() => Alert.alert('account successfully created'))
            .catch(() => {
                Alert.alert('Account could not be created.')
            })
    }

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
                        value={signupState.firstName}
                        onChangeText={text => {
                            setSignupState(oldState => {
                                return {
                                    ...oldState,
                                    firstName: text
                                }
                            })
                        }}
                    />

                    <TextInput
                        multiLine={false}
                        label="Last Name"
                        style={styles.infoInput}
                        selectionColor={'#A41846'}
                        value={signupState.lastName}
                        onChangeText={text => {
                            setSignupState(oldState => {
                                return {
                                    ...oldState,
                                    lastName: text
                                }
                            })
                        }}
                    />

                    <TextInput
                        multiLine={false}
                        label="Email"
                        style={styles.infoInput}
                        selectionColor={'#A41846'}
                        value={signupState.email}
                        onChangeText={text => {
                            setSignupState(oldState => {
                                return {
                                    ...oldState,
                                    email: text
                                }
                            })
                        }}
                    />

                    <TextInput
                        multiLine={false}
                        label="Last Name"
                        style={styles.infoInput}
                        selectionColor={'#A41846'}
                        value={signupState.username}
                        onChangeText={text => {
                            setSignupState(oldState => {
                                return {
                                    ...oldState,
                                    username: text
                                }
                            })
                        }}
                    />

                    <TextInput
                        multiLine={false}
                        label="Password"
                        style={styles.infoInput}
                        selectionColor={'#A41846'}
                        value={signupState.password}
                        onChangeText={text => {
                            setSignupState(oldState => {
                                return {
                                    ...oldState,
                                    password: text
                                }
                            })
                        }}
                    />

                    <TextInput
                        multiLine={false}
                        label="Confirm Password"
                        style={styles.infoInput}
                        selectionColor={'#A41846'}
                        value={signupState.confirmPassword}
                        onChangeText={text => {
                            setSignupState(oldState => {
                                return {
                                    ...oldState,
                                    confirmPassword: text
                                }
                            })
                        }}
                    />
                </View>

                <Text style={styles.invalidPasswordTxt}>{passwordErrorText}</Text>

            </View>
            <View style={styles.privacyTxtContainer}>
                <Text>We take data privacy very seriously. Your information is securely stored and encrypted
                    on our servers.</Text>
            </View>

            <View style={styles.lastSection}>
                <Button mode={'contained'} color={'#7a57d1'}
                        style={styles.signupBtn}
                        onPress={handleSignupPress}>Sign Up!</Button>
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

    invalidPasswordTxt: {
        fontSize: 15,
        color: 'green',
        padding: 3
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
