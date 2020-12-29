import React from "react";
import { StyleSheet, Text, View, Button, Alert, Platform, TouchableHighlight } from "react-native";


const Home = ({navigation}) => {
    return (
      <View>
        <TouchableHighlight onPress={navigation.navigate("Login")}>
          <Text>Hello world</Text>
        </TouchableHighlight>
      </View>
    );
}

export default Home