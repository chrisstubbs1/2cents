import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert, Platform } from "react-native";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>2cents</Text>

      <TextInput style={styles.textInput} placeholder={"Username"} />

      <TextInput style={styles.textInput} placeholder={"Password"} />

      <Text style={styles.forgotPassword}>Forgot password?</Text>

      <View style={styles.buttonContainer}>
        <TouchableHighlight style={styles.button} onPress={handleLogin}>
          <Button title={"Login"} />
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={handleSignup}>
          <Button title={"Sign up"} />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const handleLogin = () => Alert.alert("Login pressed", "you pressed the login");

const handleSignup = () =>
  Alert.alert("Alert pressed", "you pressed the sign up button");

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
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
