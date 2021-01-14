import "react-native-gesture-handler";
import LogoHeader from "./components/LogoHeader";
import LoginFormContainer from "./components/LoginFormContainer";
import LoginButtonSection from "./components/LoginButtonSection";
import React, {useState, useEffect} from "react";
import {StyleSheet, View, Alert} from "react-native";
// import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {

    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [user, setUser] = useState()
    const [initializing, setInitializing] = useState(true)

    useEffect(() => {
        if (userName !== '') {
            Alert.alert(userName)
        }
    }, [userName])

    const usernameStateCallback = (currentUsername) => {
        setUsername(currentUsername)
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoHeader}>
                <LogoHeader/>
            </View>
            <View style={styles.formSection}>
                <LoginFormContainer nav={navigation}
                                    dataPasser={usernameStateCallback}/>
            </View>
            <View style={styles.buttonSection}>
                <LoginButtonSection nav={navigation}/>
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
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonSection: {
        flex: 1
    },
});

export default Login;
