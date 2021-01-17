import React from "react";
import {View} from "react-native";
import {StyleSheet} from "react-native";
import LogoHeader from "./components/Login/LoginComponents/LogoHeader";
import {Button, Headline, Paragraph, TextInput} from 'react-native-paper'

const ForgotPassword = () => {
    return (
        <View style={styles.container}>
            <LogoHeader style={styles.logoHeader}/>
            <View style={styles.mainContentArea}>
                <View style={styles.textArea}>
                    <Headline>Oh no! Did you forget your password? We told you to stop smoking that shit.</Headline>
                    <Paragraph>Use the form below to get instructions on how to reset it.</Paragraph>
                </View>
                <View style={styles.formArea}>
                    <View stlye={styles.inputContainer}>
                        <TextInput
                            multiLine={false}
                            label="Email"
                            style={styles.infoInput}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button mode={'contained'} contentStyle={styles.loginBtn}>
                            Send
                        </Button>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-evenly'
    },

    logoHeader: {
        flex: 1,
    },

    mainContentArea: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,
    },

    textArea: {
        padding: 20,

    },

    formArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },

    inputContainer: {
        backgroundColor: 'red',
    },

    infoInput: {
        width: 300,
        height: 50,
    },
})


export default ForgotPassword
