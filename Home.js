import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";

import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Platform,
  TouchableHighlight,
  Image,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftHalf}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://reactjs.org/logo-og.png" }}
            style={{ width: "100%", height: 100 }}
          />
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://reactjs.org/logo-og.png" }}
            style={{ width: "100%", height: 200 }}
          />
          <Text style={styles.imageText}>React</Text>
        </View>

        <TouchableHighlight style={styles.swipeButton}>
          <Button title={"Swipe!"} />
        </TouchableHighlight>
      </View>

      <View style={styles.rightHalf}></View>
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
