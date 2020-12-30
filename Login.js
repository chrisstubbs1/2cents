import "react-native-gesture-handler";

import React from "react";
import { StyleSheet, Text, View, Button, Alert, Platform } from "react-native";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>2cents</Text>

      <TextInput style={styles.textInput} placeholder={"Username"} />

      <TextInput style={styles.textInput} placeholder={"Password"} />

      <Text style={styles.forgotPassword}>Forgot pashsword?</Text>

      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Button title={"Login"} />
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => Alert.alert("Sdign up")}
        >
          <Button title={"Sign up"} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

// const handleLogin = () => navigation.navigate("Home");

// const handleSignup = () => Alert.alert("Hello signup");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00303f",
    alignItems: "center",
    justifyContent: "center",
  },

  textInput: {
    height: 40,
    width: "80%",
    backgroundColor: "#cae4db",
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
  },

  text: {
    fontSize: 50,
    color: "#cae4db",
  },

  forgotPassword: {
    fontSize: 20,
    color: "#f5f4f4",
    margin: 20,
  },

  button: {
    color: "#cdac81",
    backgroundColor: "#cae4db",
    margin: 20,
    borderRadius: 20,
    width: 100,
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default Login;
