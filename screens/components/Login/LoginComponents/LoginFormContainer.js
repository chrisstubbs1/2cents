import React, {useState, useEffect} from 'react'
import {Button, TextInput} from "react-native-paper";
import {View, Alert, StyleSheet} from "react-native";


const LoginFormContainer = (props) => {
    const [currentUserState, setCurrentUserState] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        props.dataPasser(currentUserState)
    }, [currentUserState])

    return (
        <View style={styles.formContainer}>
            <TextInput
                multiLine={false}
                label="Email"
                style={styles.infoInput}
                selectionColor={'#A41846'}
                value={currentUserState.email}
                onChangeText={text => {
                    setCurrentUserState(oldState => {
                        return {
                            ...oldState,
                            email: text
                        }
                    })
                }}
            />

            <TextInput
                multiLine={false}
                label="Password"
                style={styles.infoInput}
                value={currentUserState.password}
                onChangeText={text => {
                    setCurrentUserState(oldState => {
                        return {
                            ...oldState,
                            password: text
                        }
                    })
                }}
            />

            <Button color={'#7a57d1'}
                    onPress={() => props.nav.navigate('Forgot Password')}>
                Forgot Password?
            </Button>
        </View>

    )
}


const styles = StyleSheet.create({

    formContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    infoInput: {
        width: '100%',
        height: 50,
    },


})

export default LoginFormContainer
