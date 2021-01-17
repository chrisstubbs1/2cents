import "react-native-gesture-handler";
import LogoHeader from "./LoginComponents/LogoHeader";
import LoginFormContainer from "./LoginComponents/LoginFormContainer";
import LoginButtonSection from "./LoginComponents/LoginButtonSection";
import React, {useState, useEffect} from "react";
import {StyleSheet, View, Alert} from "react-native";
// import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {

    const [userCredentialState, setUserCredentialState] = useState({
        email: '',
        password: ''
    })
    const [user, setUser] = useState()
    const [initializing, setInitializing] = useState(true)

    useEffect(() => {


    }, [userCredentialState])

    const userCredentialStateCallback = (currentUserStateCredentials) => {
        setUserCredentialState(currentUserStateCredentials)
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoHeader}>
                <LogoHeader/>
            </View>
            <View style={styles.formSection}>
                <LoginFormContainer nav={navigation}
                                    dataPasser={userCredentialStateCallback}/>
            </View>
            <View style={styles.buttonSection}>
                <LoginButtonSection nav={navigation}
                                    emailAddress={userCredentialState.email}
                                    password={userCredentialState.password}/>
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

    logoHeader: {
        flex: 1
    },

    formSection: {
        flex: 2,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },

    buttonSection: {
        flex: 1
    },
});

export default Login;
