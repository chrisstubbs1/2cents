import React, {useEffect} from "react";
import {StyleSheet, View, Alert} from "react-native";
import HomeRightHalf from "./HomeComponents/HomeRightHalf";
import HomeLeftHalf from "./HomeComponents/HomeLeftHalf";
import {choices} from '../../../models/votingmodels/choices'

const Home = () => {

    return (
        <View style={styles.container}>
            <HomeLeftHalf choice={choices.comparison1[0]}/>
            <HomeRightHalf choice={choices.comparison1[1]}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
    },

    cardContainer: {
        width: '100%',
    },

    leftHalf: {
        height: "100%",
        width: "50%",
        padding: 10,
        justifyContent: "space-around",
    },

    drawerSection: {
        flex: 1,
        alignItems: 'flex-start'
    },

    contentSection: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    swipeButtonSection: {
        flex: 1,

    },

    rightHalf: {
        height: "100%",
        width: "50%",
        padding: 10,
        justifyContent: "space-around",
    },

    categoriesSection: {
        flex: 1,
    }
});

export default Home;
