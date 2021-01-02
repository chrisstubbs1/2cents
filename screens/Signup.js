import React from 'react';
import {View, StyleSheet} from "react-native";
import LogoHeader from "./components/LogoHeader";
import {Button, TextInput} from "react-native-paper";

const Signup = () => {
    return (
        <View style={styles.container}>
            <LogoHeader/>
            <View style={styles.midSection}>
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
            <View style={styles.lastSection}>
                <Button mode={'contained'} color={'#7a57d1'}>Sign Up!</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    infoInput: {
        width: '45%',
        margin: 5,
    },

    midSection: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center'
    },

    lastSection: {
        flex: 1,

    },

})

export default Signup;