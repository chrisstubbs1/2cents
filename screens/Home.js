import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Image,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import {ImageBackground} from "react-native-web";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftHalf}>

      </View>

      <View style={styles.rightHalf}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00303f",
    flexDirection: "column",
  },

  leftHalf: {
    height: "100%",
    width: "50%",
    padding: 10,
    justifyContent: "space-around",
  },

  imageContainer: {
  },

  imageText: {
    fontSize: 35,
    alignSelf: "center",
    color: "#cae4db",
    marginTop: 5,
  },

  rightHalf: {
    backgroundColor: "#ff7f",
    height: "100%",
    width: "50%",
  },

  swipeButton: {
    alignSelf: "center",
    color: "#cdac81",
    backgroundColor: "#cae4db",
    borderRadius: 20,
    width: 100,
  },
});

export default Home;
