import React from "react";

import {
    StyleSheet,
    View,
} from "react-native";
import HomeRightHalf from "./components/HomeRightHalf";
import HomeLeftHalf from "./components/HomeLeftHalf";


const Home = () => {

    return (
        <View style={styles.container}>
            <HomeLeftHalf/>
            <HomeRightHalf/>
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
