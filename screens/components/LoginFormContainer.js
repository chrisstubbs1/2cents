import React, {useState, useEffect} from 'react'
import {Button, TextInput} from "react-native-paper";
import {View, Alert, StyleSheet} from "react-native";


const LoginFormContainer = (props) => {
    const [currentUsername, setCurrentUsername] = useState('')

    useEffect(() => {
        if (currentUsername !== ''){
            props.dataPasser(currentUsername)
        }
    }, [currentUsername])

    return (
        <View style={styles.formContainer}>
            <TextInput
                multiLine={false}
                label="Email"
                style={styles.infoInput}
                selectionColor={'#A41846'}
                value={currentUsername}
                // onChangeTsext={text => setUsername(text)}
                onChangeText={text => {
                    setCurrentUsername(text)
                    props.dataPasser(currentUsername)
                }}

            />

            <TextInput
                multiLine={false}
                label="Password"
                style={styles.infoInput}
                // value={password}
                // onChangeText={text => setPassword(text)}
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
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    infoInput: {
        width: 300,
        height: 50,
    },


})

export default LoginFormContainer
