import React from 'react'
import {View, StyleSheet} from "react-native";
import {Button} from "react-native-paper";

const LoginButtonSection = ({nav}) => {

    return(
        <View>
            <Button mode={'contained'} contentStyle={styles.loginBtn}
                    onPress={() => nav.navigate('Home')}>
                Log In
            </Button>

            <Button color={"#7a57d1"} onPress={() => nav.navigate('Signup')}>
                Don't have an account? Sign up here.
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    loginBtn: {
        height: 50,
        width: '100%',
        fontSize: 20,
        backgroundColor: '#7a57d1'
    },
})

export default LoginButtonSection
